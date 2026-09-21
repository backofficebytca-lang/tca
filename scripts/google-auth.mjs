#!/usr/bin/env node
/**
 * One-time Google authorisation for the contact form's Google Sheet.
 *
 *   node scripts/google-auth.mjs
 *
 * Opens Google's consent page, you sign in as backoffice.bytca@gmail.com and
 * accept; the script receives the code on a local port, exchanges it for a
 * refresh token and writes GOOGLE_REFRESH_TOKEN into .env.local. The token is
 * never printed. Reads GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET from .env.local.
 */
import fs from "node:fs";
import http from "node:http";
import crypto from "node:crypto";
import { exec } from "node:child_process";

const ENV = new URL("../.env.local", import.meta.url);
const PORT = 53682;
const REDIRECT = `http://localhost:${PORT}/oauth2callback`;
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

const env = Object.fromEntries(
  fs
    .readFileSync(ENV, "utf8")
    .split("\n")
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1).replace(/^"|"$/g, "")])
);
if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) {
  console.error("GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET are missing from .env.local");
  process.exit(1);
}

const state = crypto.randomBytes(16).toString("hex");
const url =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    client_id: env.GOOGLE_CLIENT_ID,
    redirect_uri: REDIRECT,
    response_type: "code",
    scope: SCOPE,
    access_type: "offline",
    prompt: "consent",
    login_hint: "backoffice.bytca@gmail.com",
    state,
  });

const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, REDIRECT);
  if (u.pathname !== "/oauth2callback") return res.writeHead(404).end();
  const done = (code, msg) => {
    res.writeHead(code, { "content-type": "text/html; charset=utf-8" }).end(`<p style="font:16px sans-serif">${msg}</p>`);
    setTimeout(() => process.exit(code === 200 ? 0 : 1), 300);
  };
  if (u.searchParams.get("state") !== state) return done(400, "État invalide. Relancez le script.");
  if (u.searchParams.get("error")) return done(400, `Google a refusé : ${u.searchParams.get("error")}`);

  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code: u.searchParams.get("code"),
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      redirect_uri: REDIRECT,
      grant_type: "authorization_code",
    }),
  });
  const j = await r.json();
  if (!j.refresh_token) {
    console.error("No refresh token received:", j.error ?? "", j.error_description ?? "");
    return done(500, "Aucun jeton reçu. Voir le terminal.");
  }
  let file = fs.readFileSync(ENV, "utf8");
  file = /^GOOGLE_REFRESH_TOKEN=.*$/m.test(file)
    ? file.replace(/^GOOGLE_REFRESH_TOKEN=.*$/m, `GOOGLE_REFRESH_TOKEN=${j.refresh_token}`)
    : file + `\nGOOGLE_REFRESH_TOKEN=${j.refresh_token}\n`;
  fs.writeFileSync(ENV, file);
  console.log("✓ GOOGLE_REFRESH_TOKEN saved in .env.local");
  done(200, "Autorisation enregistrée. Vous pouvez fermer cet onglet.");
});

server.listen(PORT, () => {
  console.log("Sign in as backoffice.bytca@gmail.com in the page that opens.\nIf it does not open, copy this address into your browser:\n\n" + url + "\n");
  exec(`open "${url}"`);
});
setTimeout(() => {
  console.error("Timed out after 5 minutes.");
  process.exit(1);
}, 5 * 60 * 1000);
