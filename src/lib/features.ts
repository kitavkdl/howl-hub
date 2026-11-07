// One entry per feature page. Add a new feature here and it shows up in the sidebar.
export type Feature = {
  href: string;
  label: string;
  description: string;
};

export const features: Feature[] = [
  { href: "/", label: "Dashboard", description: "Daily briefing: today's classes, deadlines, events, and email highlights in one place." },
  { href: "/calendar", label: "Calendar", description: "Brightspace deadlines + Google Calendar events." },
  { href: "/syllabus", label: "Syllabus & Grades", description: "Parse syllabi for exam dates and grade weights, plus a grade calculator." },
  { href: "/clubs", label: "Clubs & Events", description: "Campus Groups club recommendations and event alerts." },
  { href: "/gmail", label: "Gmail Summary", description: "Short summaries of important school emails." },
  { href: "/library", label: "Library Rooms", description: "A friendlier study room booking UI." },
];
