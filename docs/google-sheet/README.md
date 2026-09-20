# Contact form → Google Sheet

The form on `/rendez-vous` posts to the site's own route `POST /api/contact`
(`app/api/contact/route.ts`). The route validates the message (required fields,
email format, consent, honeypot, throttle) and forwards it to a Google Apps
Script web app, which appends a row to a Google Sheet and sends a notification
email to `backoffice.bytca@gmail.com`.

## One-time setup (signed in as backoffice.bytca@gmail.com)

1. Create a new Google Sheet (any name, e.g. "TCA Backoffice — Demandes").
2. **Extensions → Apps Script.** Delete the sample code and paste the whole of
   `docs/google-sheet/Code.gs`. Save.
3. **Project Settings (gear) → Script properties → Add script property**
   - Property: `SECRET`
   - Value: the same value as `GOOGLE_SCRIPT_SECRET` in the site's `.env.local`
     (and in the hosting provider's environment variables).
4. **Deploy → New deployment → type "Web app"**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy, then authorise when Google asks (the script needs the Sheet and
     the permission to send mail).
5. Copy the **Web app URL** (ends in `/exec`) and put it in `.env.local`:
   `GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/.../exec`
6. Restart the site (`npm run dev`). Submit the form once: a "Demandes" tab
   with a header row is created automatically and the first row appears, and an
   email arrives in the inbox.

Opening the `/exec` URL in a browser should show `{"ok":true,"service":"tca-contact-form"}`.

## Environment variables

| Name | Where | What |
| --- | --- | --- |
| `GOOGLE_SCRIPT_URL` | `.env.local` + hosting | Web app URL from step 5 |
| `GOOGLE_SCRIPT_SECRET` | `.env.local` + hosting + script property `SECRET` | Shared secret; requests without it are refused |

`.env.local` is not committed. Set both variables again in Vercel before
deploying (Project → Settings → Environment Variables).

## After changing Code.gs

Apps Script keeps serving the old version until you publish a new one:
**Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy.**
The URL stays the same.

## Notes

- Answers land in the sheet in the order received; the first column is the
  server time of the script.
- Cells that would start with `=`, `+`, `-` or `@` are prefixed with `'` so a
  visitor cannot inject a spreadsheet formula.
- Personal data is stored in Google Sheets and Gmail, not on a server hosted in
  the EU — see the note in the project report about the cahier des charges.
