/**
 * TCA Backoffice — reception of the site's contact form.
 *
 * Paste this file in the Apps Script editor of the Google Sheet (Extensions →
 * Apps Script), set the script property SECRET, then deploy as a web app.
 * Steps: docs/google-sheet/README.md
 */
const SHEET_NAME = "Demandes";
const NOTIFY_EMAIL = "backoffice.bytca@gmail.com";
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

function doPost(e) {
  try {
    const p = JSON.parse(e.postData.contents);
    const secret = PropertiesService.getScriptProperties().getProperty("SECRET");
    if (!secret || p.secret !== secret) return reply({ ok: false, error: "unauthorized" });

    const sheet = getSheet();
    sheet.appendRow([
      new Date(),
      safe(p.nom),
      safe(p.fonction),
      safe(p.entreprise),
      safe(p.email),
      safe(p.telephone),
      safe(p.objet),
      safe(p.message),
      p.consentement ? "Oui" : "Non",
      safe(p.page),
    ]);

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      replyTo: p.email,
      subject: "Nouvelle demande — " + p.objet,
      body: [
        "Nom, prénom : " + p.nom,
        "Fonction : " + (p.fonction || "—"),
        "Entreprise : " + p.entreprise,
        "Email : " + p.email,
        "Téléphone : " + (p.telephone || "—"),
        "Objet : " + p.objet,
        "",
        p.message,
        "",
        "Enregistré dans la feuille « " + SHEET_NAME + " ».",
      ].join("\n"),
    });

    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  }
}

// Answers a plain visit to the URL, so the deployment can be checked in a browser.
function doGet() {
  return reply({ ok: true, service: "tca-contact-form" });
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  return sheet;
}

// A cell that starts with = + - @ would be run as a formula: neutralise it.
function safe(value) {
  const s = String(value == null ? "" : value);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
