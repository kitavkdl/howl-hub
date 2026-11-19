// Fake data so every page can be built before the backend exists.
// Feel free to add more items. Don't import this file from pages directly:
// go through src/lib/data.ts so the backend can swap in real data later.
import type {
  CalendarEvent,
  ClubEvent,
  Course,
  Deadline,
  EmailSummary,
  StudyRoom,
  SyllabusInfo,
} from "./types";

export const courses: Course[] = [
  { id: "cse214", code: "CSE 214", name: "Data Structures" },
  { id: "ams151", code: "AMS 151", name: "Applied Calculus I" },
  { id: "wrt102", code: "WRT 102", name: "Intermediate Writing Workshop" },
];

export const deadlines: Deadline[] = [
  { id: "d1", title: "Homework 5", due: "2026-12-01T23:59:00-05:00", type: "assignment", courseId: "cse214", source: "brightspace" },
  { id: "d2", title: "Quiz 4", due: "2026-12-02T10:00:00-05:00", type: "quiz", courseId: "ams151", source: "brightspace" },
  { id: "d3", title: "Essay draft", due: "2026-12-03T23:59:00-05:00", type: "assignment", courseId: "wrt102", source: "manual" },
  { id: "d4", title: "Final exam", due: "2026-12-14T08:00:00-05:00", type: "exam", courseId: "cse214", source: "syllabus" },
];

export const calendarEvents: CalendarEvent[] = [
  { id: "e1", title: "CSE 214 Lecture", start: "2026-12-01T10:00:00-05:00", end: "2026-12-01T11:20:00-05:00", location: "Frey Hall 102", source: "class" },
  { id: "e2", title: "AMS 151 Recitation", start: "2026-12-01T13:00:00-05:00", end: "2026-12-01T13:53:00-05:00", location: "Physics P117", source: "class" },
  { id: "e3", title: "Study group", start: "2026-12-01T18:00:00-05:00", end: "2026-12-01T19:30:00-05:00", location: "Melville Library", source: "google" },
];

export const syllabi: SyllabusInfo[] = [
  {
    courseId: "cse214",
    exams: [
      { id: "s1", title: "Midterm", due: "2026-10-15T10:00:00-04:00", type: "exam", courseId: "cse214", source: "syllabus" },
      { id: "s2", title: "Final exam", due: "2026-12-14T08:00:00-05:00", type: "exam", courseId: "cse214", source: "syllabus" },
    ],
    grading: [
      { name: "Homework", weight: 30, score: 92 },
      { name: "Midterm", weight: 30, score: 81 },
      { name: "Final exam", weight: 40 },
    ],
  },
];

export const clubEvents: ClubEvent[] = [
  { id: "c1", club: "Computing Society", title: "Resume workshop", start: "2026-12-02T18:00:00-05:00", location: "SAC 302", tags: ["career", "cs"] },
  { id: "c2", club: "Korean Student Association", title: "Winter social", start: "2026-12-04T19:00:00-05:00", location: "SAC Ballroom A", tags: ["social", "food"] },
  { id: "c3", club: "Chess Club", title: "Weekly meetup", start: "2026-12-03T17:00:00-05:00", location: "Union 201", tags: ["games"] },
];

export const emailSummaries: EmailSummary[] = [
  { id: "m1", from: "CSE 214 Instructor", subject: "Homework 5 deadline extended", receivedAt: "2026-11-30T09:12:00-05:00", summary: "Homework 5 is now due Tuesday 12/1 at 11:59 PM instead of Monday.", important: true, courseId: "cse214" },
  { id: "m2", from: "Registrar", subject: "Final exam schedule posted", receivedAt: "2026-11-29T14:00:00-05:00", summary: "The fall final exam schedule is online. Check your exam times and rooms.", important: true },
  { id: "m3", from: "Campus Dining", subject: "Holiday hours", receivedAt: "2026-11-28T11:30:00-05:00", summary: "Dining halls have reduced hours during the last week of classes.", important: false },
];

export const studyRooms: StudyRoom[] = [
  {
    id: "r1",
    library: "Melville Library",
    name: "Room 2045",
    capacity: 4,
    slots: [
      { start: "2026-12-01T14:00:00-05:00", end: "2026-12-01T15:00:00-05:00", available: true },
      { start: "2026-12-01T15:00:00-05:00", end: "2026-12-01T16:00:00-05:00", available: false },
    ],
  },
  {
    id: "r2",
    library: "Health Sciences Library",
    name: "Room L3-112",
    capacity: 6,
    slots: [{ start: "2026-12-01T14:00:00-05:00", end: "2026-12-01T16:00:00-05:00", available: true }],
  },
];
