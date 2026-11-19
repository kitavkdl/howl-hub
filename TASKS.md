# v0 tasks — goal for Fri Dec 4

Every feature ships **one working page with fake data, merged into `main` through a Pull Request.**
Real data (Brightspace, Google, Campus Groups, Supabase) comes later from the backend; you don't need it yet.

## How to work with AI

1. Set up once (see README "Getting started"), then `git checkout -b <feature>-v0`.
2. Open the repo in your AI tool (Claude Code, Cursor, Copilot, ...). Most of them read `AGENTS.md` automatically; if yours doesn't, paste it in first.
3. Paste the prompt for your feature below. Read what it changed, run `npm run dev`, click around.
4. `npm run lint && npm run build`, commit, push your branch, open a PR, and post the link in Discord.

Ask the AI to explain anything you don't understand. You should be able to describe your own PR.

---

## Calendar — `/calendar`

Done when: the page lists upcoming deadlines and calendar events together, grouped by day.

```text
Read AGENTS.md. Build the Calendar page in src/app/calendar/page.tsx.
Use getDeadlines() and getCalendarEvents() from src/lib/data.ts.
Show the next 7 days grouped by day; under each day list events (time, title, location)
and deadlines (title, course, type badge). Use Card and formatDateTime.
Keep it to files inside src/app/calendar/. Run npm run lint and npm run build at the end.
```

## Syllabus & Grades — `/syllabus`

Done when: you can pick a course, see its grading table and exam dates, type in scores, and see your current grade.

```text
Read AGENTS.md. Build the Syllabus & Grades page in src/app/syllabus/.
Use getCourses() and getSyllabi() from src/lib/data.ts.
For a selected course show the exam dates and the grading table (component, weight %).
Add a grade calculator as a "use client" component: the user types a score for each
component and sees the weighted grade so far, plus what they need on remaining items
to reach a target grade. Then add a textarea where the user pastes syllabus text and a
button that tries to pull out "name — weight%" lines with simple rules (no AI API yet),
filling the table. Run npm run lint and npm run build at the end.
```

## Clubs & Events — `/clubs`

Done when: the page lists upcoming club events with tag filters, and `docs/campus-groups.md` says how we could get real data.

```text
Read AGENTS.md. Build the Clubs & Events page in src/app/clubs/.
Use getClubEvents() from src/lib/data.ts. Show events as cards (club, title, date, place)
and add tag filter buttons in a "use client" component. Add a few more fake events to
src/lib/mock-data.ts so filtering is visible. Run npm run lint and npm run build at the end.
```

Also write `docs/campus-groups.md` (half a page): does Campus Groups / SB Engage have an API, an iCal/RSS feed, or would we need to scrape? What would each give us?

## Gmail Summary — `/gmail`

Done when: the page shows summarized emails, important ones first, with an "important only" toggle and a course filter.

```text
Read AGENTS.md. Build the Gmail Summary page in src/app/gmail/.
Use getEmailSummaries() and getCourses() from src/lib/data.ts.
Show each email as a card: subject, sender, received time, and the 1-3 sentence summary.
Important emails first, with an "important only" toggle and a course filter
in a "use client" component. Add more fake emails to src/lib/mock-data.ts so the filters
are visible. Run npm run lint and npm run build at the end.
```

Real Gmail access needs Google sign-in; see `docs/google-oauth.md`. Don't add Google code yet.

## Dashboard / Daily Briefing — `/`

Done when: every card on the dashboard shows real-looking fake data, and you've written down what 3-5 students said they'd actually use.

```text
Read AGENTS.md. In src/app/page.tsx the "Upcoming deadlines" card already shows data.
Wire up the other cards the same way: "Today's classes" from getCalendarEvents()
(class events only), "Club events" from getClubEvents() (next 3), "Email highlights"
from getEmailSummaries() (important only). Each card links to its feature page.
Run npm run lint and npm run build at the end.
```

Also add `docs/user-research.md`: who you talked to (no full names), what they use every day, what they'd want first.

## Library Rooms — `/library`

Done when: the page shows rooms by library with free/booked time slots and a mock "book" button.

```text
Read AGENTS.md. Build the Library Rooms page in src/app/library/.
Use getStudyRooms() from src/lib/data.ts. Group rooms by library; for each room show
capacity and its time slots as buttons (free = clickable, booked = greyed out).
Clicking a free slot opens a confirm step in a "use client" component; booking is
fake for now (just show "Booked!"). Run npm run lint and npm run build at the end.
```

## Design

Done when: colors, fonts, and mockups of the Dashboard plus two feature pages are shared (Figma link in Discord), and `src/components/Card.tsx` / `globals.css` match them.

## Backend

Replace the insides of `src/lib/data.ts` with real data sources one function at a time, keeping the same function names and return types. Agree on any change to `src/lib/types.ts` with the page owner.
