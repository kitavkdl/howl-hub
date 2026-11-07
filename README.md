# HowlHub

helping SBU students — one place for Brightspace, Google Calendar, Campus Groups, syllabi, Gmail, and more.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Supabase](https://supabase.com) for database and auth
- Web first; a mobile app can wrap the website later

New to React/Next.js? Start with [react.dev/learn](https://react.dev/learn) and the [Next.js Learn course](https://nextjs.org/learn).

## Getting started

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
git clone https://github.com/kitavkdl/howl-hub.git
cd howl-hub
npm install
cp .env.example .env.local   # optional for now, only needed once we use Supabase
npm run dev
```

Open http://localhost:3000. Pages reload automatically when you save a file.

Before pushing, run `npm run lint` and `npm run build` to catch errors.

## Where things go

```
src/
  app/                  one folder per page (the folder name is the URL)
    page.tsx            Dashboard / Daily Briefing  ->  /
    calendar/page.tsx   Brightspace + Google Calendar  ->  /calendar
    syllabus/page.tsx   Syllabus parsing + grade calculator  ->  /syllabus
    clubs/page.tsx      Campus Groups  ->  /clubs
    gmail/page.tsx      Gmail summary  ->  /gmail
    library/page.tsx    Library study rooms  ->  /library
    layout.tsx          shared page shell (sidebar + main area)
  components/           shared UI pieces (Card, PageHeader, Sidebar, ...)
  lib/
    features.ts         list of pages shown in the sidebar
    supabase.ts         Supabase client
```

- Working on a feature? Edit that feature's `page.tsx` and put feature-only components next to it (e.g. `src/app/clubs/ClubList.tsx`).
- Something used on more than one page goes in `src/components/`.
- Adding a new page: create `src/app/<name>/page.tsx` and add one line to `src/lib/features.ts`.

## Working together

1. Pull the latest `main`: `git pull`
2. Make a branch: `git checkout -b clubs-event-list`
3. Commit and push your branch, then open a Pull Request on GitHub
4. Someone else takes a quick look, then merge

Never commit API keys or `.env.local`. Ask in Discord if you need a key.
