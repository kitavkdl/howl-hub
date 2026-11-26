# Getting Campus Groups / SB Engaged event data

## What is available

Stony Brook's SB Engaged site publishes a [school-wide ICS calendar](https://sbengaged.stonybrook.edu/ical/stonybrook/ical_stonybrook.ics) containing public events from groups. Its [calendar subscription page](https://sbengaged.stonybrook.edu/ics_helper?modal=true&embed=1&mode=set&width=850&height=550) also lists individual group calendars. An ICS event can provide its title, start/end time, location, description, and event-details URL. A group-specific feed is a better fit when the app needs to identify the hosting club.

The subscription page says the personal feed requires sign-in. It may include members-only events for groups the signed-in user belongs to, so it should not be treated as a public feed. Do not collect a user's password or reuse their login session.

Stony Brook's [SBEngaged information page](https://it.stonybrook.edu/services/sbengaged) links to the platform's help center, but does not document a public Campus Groups API. No public RSS feed is listed on the calendar subscription page either. Ask Stony Brook DoIT or the SB Engaged administrators whether an approved API or export is available before relying on one.

## Recommended approach

For a first real-data integration, use the public ICS feed. A scheduled server-side job can fetch it periodically, parse the events with an iCalendar parser, and upsert them into Supabase. The `/clubs` page can continue reading normalized `ClubEvent` records through `src/lib/data.ts`. Keep the feed request and credentials, if any, on the server.

An official API would generally be preferable if it is made available: it can provide structured fields and stable identifiers, and may offer richer group/event metadata. ICS is simpler and already published, but may omit fields, is designed for calendar synchronization, and needs careful handling of time zones, updates, and recurring events. RSS was not found and, if offered, may expose only a limited event summary. Scraping the website is the least reliable option: its markup and login flow can change, and automated access may conflict with site policies. Avoid scraping authenticated or member-only content unless Stony Brook explicitly authorizes it.

The current Clubs & Events page uses mock data. This document describes the researched options; it does not configure a live feed or Supabase sync.
