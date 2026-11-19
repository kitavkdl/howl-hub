// The only place pages get data from.
// Right now every function returns fake data from mock-data.ts.
// The backend owner will replace the insides with real API / Supabase calls,
// so keep using these functions and your page won't need to change.
// They are async on purpose: real data will come over the network.
import * as mock from "./mock-data";
import type {
  CalendarEvent,
  ClubEvent,
  Course,
  Deadline,
  EmailSummary,
  StudyRoom,
  SyllabusInfo,
} from "./types";

export async function getCourses(): Promise<Course[]> {
  return mock.courses;
}

export async function getDeadlines(): Promise<Deadline[]> {
  return [...mock.deadlines].sort((a, b) => a.due.localeCompare(b.due));
}

export async function getCalendarEvents(): Promise<CalendarEvent[]> {
  return [...mock.calendarEvents].sort((a, b) => a.start.localeCompare(b.start));
}

export async function getSyllabi(): Promise<SyllabusInfo[]> {
  return mock.syllabi;
}

export async function getClubEvents(): Promise<ClubEvent[]> {
  return [...mock.clubEvents].sort((a, b) => a.start.localeCompare(b.start));
}

export async function getEmailSummaries(): Promise<EmailSummary[]> {
  return mock.emailSummaries;
}

export async function getStudyRooms(): Promise<StudyRoom[]> {
  return mock.studyRooms;
}
