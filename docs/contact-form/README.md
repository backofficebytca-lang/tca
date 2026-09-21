# Contact form → email + Google Sheet

The form on `/rendez-vous` posts to `POST /api/contact` (`app/api/contact/route.ts`).
After validating the message (required fields, email format, consent, honeypot,
5-per-10-minutes throttle) the route runs two independent jobs:

1. **Email** — `lib/server/notify.ts` sends the request to `CONTACT_TO_EMAIL`
   (backoffice.bytca@gmail.com) through Resend. Reply-To is the visitor, so
   "Reply" answers them.
2. **Google Sheet** — `lib/server/sheet.ts` appends one row (RAW values, so no
   formula injection) using an OAuth refresh token.

The visitor sees the confirmation if at least one job succeeds; failures are
logged on the server. With neither configured the form shows its error message.

## Environment variables

See `.env.example`. Set them in `.env.local` locally and in the hosting
provider (Vercel → Project → Settings → Environment Variables) for production.

| Name | What |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Inbox that receives the notifications |
| `CONTACT_FROM` | Sender. Keep `onboarding@resend.dev` until a domain is verified in Resend |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | The OAuth client |
| `GOOGLE_REFRESH_TOKEN` | Written by `scripts/google-auth.mjs` |
| `GOOGLE_SHEET_ID` | The long id in the sheet's URL: `docs.google.com/spreadsheets/d/<ID>/edit` |
| `GOOGLE_SHEET_TAB` | Optional tab name (default: first tab) |

## Google Sheet — one-time setup (as backoffice.bytca@gmail.com)

1. **Enable the Sheets API** in the Google Cloud project that owns the OAuth
   client: APIs & Services → Library → "Google Sheets API" → Enable.
2. **Redirect address.** If the OAuth client is of type *Web application*, add
   `http://localhost:53682/oauth2callback` to its Authorised redirect URIs
   (a *Desktop app* client needs nothing).
3. **Consent screen.** Keep `backoffice.bytca@gmail.com` as a test user. While
   the app stays in "Testing", Google expires refresh tokens after **7 days** and
   the sheet stops receiving rows: set Publishing status to **In production**
   (an unverified app used only by its owner works; you click through Google's
   "unverified app" warning once).
4. **Create the sheet** and copy its id into `GOOGLE_SHEET_ID`.
5. Run `node scripts/google-auth.mjs`, sign in as backoffice.bytca@gmail.com and
   accept. It writes `GOOGLE_REFRESH_TOKEN` into `.env.local`.
6. Restart `npm run dev`, submit the form: the header row is created on first use
   and the row appears; an email arrives in the inbox.

## Resend limits

With the shared sender `onboarding@resend.dev`, Resend only delivers to the
address the Resend account was created with. To send to other addresses or
from your own domain, verify a domain in Resend and change `CONTACT_FROM`.

## Security

Never commit `.env.local`. If a key or secret has been shared in a chat or a
ticket, rotate it: Resend → API Keys; Google Cloud → Credentials → the OAuth
client → add a new secret, then delete the old one.
