<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## HowlHub rules for AI coding assistants

Read this before writing code in this repo. Teammates are mostly new to React/Next.js and code with AI, so keep changes small and explain them.

- **Stay in your feature folder.** Each feature lives in `src/app/<feature>/`. Put feature-only components next to its `page.tsx`. Don't edit another feature's folder.
- **Get data only through `src/lib/data.ts`.** Pages call its async functions (`getDeadlines()`, `getEmailSummaries()`, ...). Today they return fake data from `src/lib/mock-data.ts`; the backend will swap in real data later without touching pages. Never fetch from Brightspace/Google/Campus Groups directly inside a page.
- **Use the shared types in `src/lib/types.ts`.** Need a new field or a new kind of data? Add it to `types.ts`, add sample items to `mock-data.ts`, add a getter to `data.ts`, and mention it in your PR so the backend owner sees it.
- **Example to copy:** the "Upcoming deadlines" card in `src/app/page.tsx` (async server component that awaits a `data.ts` function).
- **Shared UI:** reuse `Card` and `PageHeader` from `src/components/`. Dates go through `src/lib/format.ts` (New York time).
- **Styling:** Tailwind classes only. Must look fine in light and dark mode and on a phone-width screen.
- **Interactive bits** (buttons, forms, file upload): put them in a separate component file that starts with `"use client";` and keep `page.tsx` a server component.
- **No secrets in code.** Keys go in `.env.local` (git-ignored); list the variable name, empty, in `.env.example`.
- **Before you finish:** run `npm run lint` and `npm run build` and fix every error.
- Work on a branch and open a Pull Request. See `TASKS.md` for what each feature should do first.
