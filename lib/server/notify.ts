/**
 * Sends the "new request" notification through Resend's REST API
 * (https://resend.com/docs/api-reference/emails/send-email). Plain fetch, no SDK.
 * The visitor's address goes in Reply-To, so answering the email answers them.
 */
import { envValue } from "@/lib/server/env";

export type ContactData = {
  nom: string;
  fonction: string;
  entreprise: string;
  email: string;
  telephone: string;
  objet: string;
  message: string;
  consentement: boolean;
};

export const emailConfigured = () => Boolean(envValue("RESEND_API_KEY") && envValue("CONTACT_TO_EMAIL"));

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function sendNotification(data: ContactData) {
  const from = envValue("CONTACT_FROM") || "TCA Backoffice <onboarding@resend.dev>";
  const rows: [string, string][] = [
    ["Nom, prénom", data.nom],
    ["Fonction", data.fonction || "—"],
    ["Entreprise", data.entreprise],
    ["Email", data.email],
    ["Téléphone", data.telephone || "—"],
    ["Objet", data.objet],
  ];

  const text = [...rows.map(([k, v]) => `${k} : ${v}`), "", data.message].join("\n");
  const html =
    `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:15px">` +
    rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join("") +
    `</table><p style="font-family:Arial,sans-serif;font-size:15px;white-space:pre-wrap">${escapeHtml(
      data.message
    )}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${envValue("RESEND_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [envValue("CONTACT_TO_EMAIL")],
      reply_to: data.email,
      subject: `Nouvelle demande — ${data.objet}`,
      text,
      html,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 300)}`);
}
