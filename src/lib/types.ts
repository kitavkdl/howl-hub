// Shared data shapes for every feature.
// Frontend pages and the backend agree on these. If you need a new field,
// add it here (and tell the backend owner) instead of inventing a local shape.
// Dates are ISO 8601 strings, e.g. "2026-12-04T23:59:00-05:00".

export type Course = {
  id: string; // e.g. "cse214"
  code: string; // e.g. "CSE 214"
  name: string; // e.g. "Data Structures"
};

export type DeadlineType = "assignment" | "exam" | "quiz" | "other";

export type Deadline = {
  id: string;
  title: string;
  due: string;
  type: DeadlineType;
  courseId?: string;
  source: "brightspace" | "syllabus" | "manual";
  url?: string;
};

export type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  end: string;
  location?: string;
  source: "google" | "brightspace" | "class";
};

// One line of a syllabus grading table. weight is a percent (0-100).
export type GradeComponent = {
  name: string; // e.g. "Midterm 1"
  weight: number;
  score?: number; // percent the student got, if known
};

export type SyllabusInfo = {
  courseId: string;
  exams: Deadline[];
  grading: GradeComponent[];
};

export type ClubEvent = {
  id: string;
  club: string;
  title: string;
  start: string;
  location?: string;
  url?: string;
  tags: string[];
};

export type EmailSummary = {
  id: string;
  from: string;
  subject: string;
  receivedAt: string;
  summary: string; // 1-3 sentences
  important: boolean;
  courseId?: string;
};

export type StudyRoomSlot = {
  start: string;
  end: string;
  available: boolean;
};

export type StudyRoom = {
  id: string;
  library: string; // e.g. "Melville Library"
  name: string;
  capacity: number;
  slots: StudyRoomSlot[];
};
