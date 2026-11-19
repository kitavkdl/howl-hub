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

// Dates are relative to today so pages like "next 7 days" always have something to show.
// at(2, "23:59") = two days from now at 11:59 PM (server's local time).
function at(daysFromToday: number, time: string): string {
  const [h, m] = time.split(":").map(Number);
  const d = new Date();
  d.setDate(d.getDate() + daysFromToday);
  d.setHours(h, m, 0, 0);
  return d.toISOString();
}

export const courses: Course[] = [
  { id: "cse214", code: "CSE 214", name: "Data Structures" },
  { id: "ams151", code: "AMS 151", name: "Applied Calculus I" },
  { id: "wrt102", code: "WRT 102", name: "Intermediate Writing Workshop" },
];

export const deadlines: Deadline[] = [
  { id: "d1", title: "Homework 5", due: at(0, "23:59"), type: "assignment", courseId: "cse214", source: "brightspace" },
  { id: "d2", title: "Quiz 4", due: at(1, "10:00"), type: "quiz", courseId: "ams151", source: "brightspace" },
  { id: "d3", title: "Essay draft", due: at(2, "23:59"), type: "assignment", courseId: "wrt102", source: "manual" },
  { id: "d4", title: "Final exam", due: at(14, "08:00"), type: "exam", courseId: "cse214", source: "syllabus" },
];

export const calendarEvents: CalendarEvent[] = [
  { id: "e1", title: "CSE 214 Lecture", start: at(0, "10:00"), end: at(0, "11:20"), location: "Frey Hall 102", source: "class" },
  { id: "e2", title: "AMS 151 Recitation", start: at(0, "13:00"), end: at(0, "13:53"), location: "Physics P117", source: "class" },
  { id: "e3", title: "Study group", start: at(0, "18:00"), end: at(0, "19:30"), location: "Melville Library", source: "google" },
];

export const syllabi: SyllabusInfo[] = [
  {
    courseId: "cse214",
    exams: [
      { id: "s1", title: "Midterm", due: at(-30, "10:00"), type: "exam", courseId: "cse214", source: "syllabus" },
      { id: "s2", title: "Final exam", due: at(14, "08:00"), type: "exam", courseId: "cse214", source: "syllabus" },
    ],
    grading: [
      { name: "Homework", weight: 30, score: 92 },
      { name: "Midterm", weight: 30, score: 81 },
      { name: "Final exam", weight: 40 },
    ],
  },
  {
    courseId: "ams151",
    exams: [
      { id: "s3", title: "Midterm 2", due: at(-10, "20:30"), type: "exam", courseId: "ams151", source: "syllabus" },
      { id: "s4", title: "Final exam", due: at(16, "11:15"), type: "exam", courseId: "ams151", source: "syllabus" },
    ],
    grading: [
      { name: "WebAssign homework", weight: 15, score: 95 },
      { name: "Quizzes", weight: 10, score: 88 },
      { name: "Midterm 1", weight: 20, score: 74 },
      { name: "Midterm 2", weight: 20, score: 80 },
      { name: "Final exam", weight: 35 },
    ],
  },
  {
    courseId: "wrt102",
    exams: [],
    grading: [
      { name: "Essays", weight: 60 },
      { name: "Participation", weight: 20, score: 100 },
      { name: "Portfolio", weight: 20 },
    ],
  },
];

export const clubEvents: ClubEvent[] = [
  { id: "c1", club: "Computing Society", title: "Resume workshop", start: at(1, "18:00"), location: "SAC 302", tags: ["career", "cs"] },
  { id: "c2", club: "Korean Student Association", title: "Winter social", start: at(3, "19:00"), location: "SAC Ballroom A", tags: ["social", "food"] },
  { id: "c3", club: "Chess Club", title: "Weekly meetup", start: at(2, "17:00"), location: "Union 201", tags: ["games"] },
];

export const emailSummaries: EmailSummary[] = [
  { id: "m1", from: "CSE 214 Instructor", subject: "Homework 5 deadline extended", receivedAt: at(-1, "09:12"), summary: "Homework 5 is now due tonight at 11:59 PM instead of yesterday.", important: true, courseId: "cse214" },
  { id: "m2", from: "Registrar", subject: "Final exam schedule posted", receivedAt: at(-2, "14:00"), summary: "The fall final exam schedule is online. Check your exam times and rooms.", important: true },
  { id: "m3", from: "Campus Dining", subject: "Holiday hours", receivedAt: at(-3, "11:30"), summary: "Dining halls have reduced hours during the last week of classes.", important: false },
];

export const studyRooms: StudyRoom[] = [
  {
    id: "r1",
    library: "Melville Library",
    name: "Room 2045",
    capacity: 4,
    slots: [
      { start: at(0, "14:00"), end: at(0, "15:00"), available: true },
      { start: at(0, "15:00"), end: at(0, "16:00"), available: false },
    ],
  },
  {
    id: "r2",
    library: "Health Sciences Library",
    name: "Room L3-112",
    capacity: 6,
    slots: [{ start: at(0, "14:00"), end: at(0, "16:00"), available: true }],
  },
];
