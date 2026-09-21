import { NextResponse } from "next/server";
import { RENDEZ_VOUS_PAGE } from "@/lib/content/rendez-vous";
import { emailConfigured, sendNotification } from "@/lib/server/notify";
import { appendRow, sheetConfigured } from "@/lib/server/sheet";

/**
 * Receives the written-contact form. After validation it (1) emails the
 * request to the team inbox through Resend and (2) appends a row to a Google
 * Sheet (see docs/contact-form/README.md). All credentials are server-side
 * environment variables — the browser only ever talks to this route.
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

  // Two independent destinations: the notification email and the Google Sheet.
  // A request counts as received if at least one of them succeeded, so a
  // problem on one side never loses a visitor's message.
  const jobs: { name: string; run: Promise<void> }[] = [];
  if (emailConfigured()) jobs.push({ name: "email", run: sendNotification(data) });
  if (sheetConfigured()) jobs.push({ name: "sheet", run: appendRow(data, "/rendez-vous") });

  if (jobs.length === 0) {
    console.error("[contact] neither Resend nor Google Sheets is configured");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const results = await Promise.allSettled(jobs.map((j) => j.run));
  results.forEach((r, i) => {
    if (r.status === "rejected") console.error(`[contact] ${jobs[i].name} failed:`, r.reason);
  });

  if (results.every((r) => r.status === "rejected")) {
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
