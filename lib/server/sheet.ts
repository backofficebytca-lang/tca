/**
 * Appends one row per request to a Google Sheet through the Sheets REST API,
 * authenticated with an OAuth refresh token obtained once for the sheet's
 * owner (scripts/google-auth.mjs). Values are written RAW, so a cell that
 * starts with "=" stays plain text and can never run as a formula.
 */
import type { ContactData } from "@/lib/server/notify";
import { envValue } from "@/lib/server/env";

const HEADERS = [
  "Date",
  "Nom, prénom",
  "Fonction",
  "Entreprise",
  "Email",
  "Téléphone",
  "Objet",
  "Message",
  "Consentement",
  "Page",
];

export const sheetConfigured = () =>
  Boolean(
    envValue("GOOGLE_CLIENT_ID") &&
      envValue("GOOGLE_CLIENT_SECRET") &&
      envValue("GOOGLE_REFRESH_TOKEN") &&
      envValue("GOOGLE_SHEET_ID")
  );

let cached: { token: string; expires: number } | null = null;
let headerChecked = false;

async function accessToken() {
  if (cached && cached.expires > Date.now() + 60_000) return cached.token;
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: envValue("GOOGLE_CLIENT_ID"),
      client_secret: envValue("GOOGLE_CLIENT_SECRET"),
      refresh_token: envValue("GOOGLE_REFRESH_TOKEN"),
      grant_type: "refresh_token",
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  });
  const json = (await res.json().catch(() => ({}))) as {
    access_token?: string;
    expires_in?: number;
    error?: string;
    error_description?: string;
  };
  if (!res.ok || !json.access_token) {
    throw new Error(`Google token ${res.status}: ${json.error ?? ""} ${json.error_description ?? ""}`.trim());
  }
  cached = { token: json.access_token, expires: Date.now() + (json.expires_in ?? 3600) * 1000 };
  return cached.token;
}

const base = () => `https://sheets.googleapis.com/v4/spreadsheets/${envValue("GOOGLE_SHEET_ID")}/values`;
const tabPrefix = () => (envValue("GOOGLE_SHEET_TAB") ? `${encodeURIComponent(envValue("GOOGLE_SHEET_TAB"))}!` : "");

async function sheets(path: string, token: string, init?: RequestInit) {
  const res = await fetch(`${base()}/${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`Sheets ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return res.json() as Promise<{ values?: string[][] }>;
}

export async function appendRow(data: ContactData, page: string) {
  const token = await accessToken();

  // Write the header row once, if the sheet is still empty.
  if (!headerChecked) {
    const first = await sheets(`${tabPrefix()}A1:J1`, token);
    if (!first.values?.length) {
      await sheets(`${tabPrefix()}A1:J1?valueInputOption=RAW`, token, {
        method: "PUT",
        body: JSON.stringify({ values: [HEADERS] }),
      });
    }
    headerChecked = true;
  }

  const paris = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
  await sheets(`${tabPrefix()}A:J:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, token, {
    method: "POST",
    body: JSON.stringify({
      values: [
        [
          paris,
          data.nom,
          data.fonction,
          data.entreprise,
          data.email,
          data.telephone,
          data.objet,
          data.message,
          data.consentement ? "Oui" : "Non",
          page,
        ],
      ],
    }),
  });
}
