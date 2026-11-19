# Google sign-in (Gmail + Google Calendar)

Status: **planned**, set up by the mentor. Feature pages keep using fake data until this is done.

## Plan

- One Google Cloud project for HowlHub with an OAuth consent screen.
- The consent screen stays in **Testing** mode for v0. In Testing mode Google doesn't require app verification, but only accounts listed as **test users** (up to 100) can sign in, and their sign-in expires every 7 days. That's enough for the team and a demo.
- Sign-in goes through **Supabase Auth's Google provider** (we already use Supabase). Supabase stores the client ID/secret in its dashboard, so the app itself doesn't need Google secrets in `.env.local`.
- Scopes we ask for, read-only:
  - `https://www.googleapis.com/auth/gmail.readonly` — Gmail Summary
  - `https://www.googleapis.com/auth/calendar.readonly` — Calendar
- After sign-in, Supabase gives the backend a Google access token (`provider_token`) to call the Gmail and Calendar APIs. Only the backend (`src/lib/data.ts` and server code) uses it; pages don't.
- Going public later (more than 100 users) requires Google's verification. Gmail read access is a "restricted" scope and needs a security review, so we only start that once v0 works.

Brightspace isn't a Google service: its calendar can be read from Brightspace's iCal subscription link, handled separately by the backend.

## Checklist (mentor)

- [ ] Create the Google Cloud project, enable Gmail API and Google Calendar API
- [ ] OAuth consent screen: External, Testing, add the two scopes above
- [ ] Add every teammate's Google account as a test user
- [ ] Create the OAuth client (Web), add the Supabase callback URL as an authorized redirect URI
- [ ] Turn on the Google provider in Supabase with that client ID/secret
- [ ] Share the Supabase URL/anon key with the team privately (never in Git)

Want to be a test user? Post the Google account you'll test with in Discord (DM the mentor).
