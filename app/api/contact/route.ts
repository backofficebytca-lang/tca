import { NextResponse } from "next/server";
import { RENDEZ_VOUS_PAGE } from "@/lib/content/rendez-vous";

/**
 * Receives the written-contact form and forwards it to a Google Apps Script
 * web app, which appends a row to the Google Sheet and notifies the inbox
 * (see docs/google-sheet/README.md). The script URL and the shared secret stay
 * on the server (GOOGLE_SCRIPT_URL, GOOGLE_SCRIPT_SECRET) — the browser only
 * ever talks to this route.
 */
export const dynamic = "force-dynamic";

const MAX = { nom: 120, fonction: 120, entreprise: 160, email: 254, telephone: 40, message: 5000 };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Best-effort throttle (per server instance): 5 sends per 10 minutes per IP.
const hits = new Map<string, number[]>();
function throttled(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const text = (value: unknown, max: number) =>
  typeof value === "string" ? value.replace(/\r\n/g, "\n").trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Honeypot: real visitors never fill it. Answer "ok" so bots learn nothing.
  if (text(body["societe-site"], 200)) return NextResponse.json({ ok: true });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (throttled(ip)) return NextResponse.json({ ok: false, error: "rate" }, { status: 429 });

  const data = {
    nom: text(body.nom, MAX.nom),
    fonction: text(body.fonction, MAX.fonction),
    entreprise: text(body.entreprise, MAX.entreprise),
    email: text(body.email, MAX.email),
    telephone: text(body.telephone, MAX.telephone),
    objet: text(body.objet, 80),
    message: text(body.message, MAX.message),
    consentement: body.consentement === true,
  };

  const valid =
    data.nom &&
    data.entreprise &&
    EMAIL.test(data.email) &&
    RENDEZ_VOUS_PAGE.objectOptions.includes(data.objet) &&
    data.message &&
    data.consentement;
  if (!valid) return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });

  const url = process.env.GOOGLE_SCRIPT_URL;
  const secret = process.env.GOOGLE_SCRIPT_SECRET;
  if (!url || !secret) {
    console.error("[contact] GOOGLE_SCRIPT_URL / GOOGLE_SCRIPT_SECRET are not set");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  try {
    // Apps Script answers a POST with a redirect to the result; fetch follows it.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ secret, ...data, page: "/rendez-vous" }),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });
    const result = (await res.json().catch(() => null)) as { ok?: boolean } | null;
    if (!res.ok || !result?.ok) {
      console.error("[contact] Apps Script refused the request", res.status, result);
      return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Apps Script unreachable", error);
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }
}
