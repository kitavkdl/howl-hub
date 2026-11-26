"use client";

import { useState } from "react";
import Card from "@/components/Card";
import { formatDateTime } from "@/lib/format";
import type { ClubEvent } from "@/lib/types";

type ClubEventListProps = {
  events: ClubEvent[];
};

export default function ClubEventList({ events }: ClubEventListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const tags = [...new Set(events.flatMap((event) => event.tags))].sort((a, b) =>
    a.localeCompare(b),
  );
  const filteredEvents = selectedTag
    ? events.filter((event) => event.tags.includes(selectedTag))
    : events;

  return (
    <div>
      <div
        aria-label="Filter club events by tag"
        className="mb-5 flex flex-wrap gap-2"
        role="group"
      >
        <button
          aria-pressed={selectedTag === null}
          className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
            selectedTag === null
              ? "border-blue-700 bg-blue-700 text-white dark:border-blue-400 dark:bg-blue-400 dark:text-black"
              : "border-black/15 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          }`}
          onClick={() => setSelectedTag(null)}
          type="button"
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            aria-pressed={selectedTag === tag}
            className={`rounded-full border px-3 py-1.5 text-sm capitalize transition-colors ${
              selectedTag === tag
                ? "border-blue-700 bg-blue-700 text-white dark:border-blue-400 dark:bg-blue-400 dark:text-black"
                : "border-black/15 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
            }`}
            key={tag}
            onClick={() => setSelectedTag(tag)}
            type="button"
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredEvents.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredEvents.map((event) => (
            <Card key={event.id} title={event.title}>
              <div className="space-y-3">
                <p className="font-medium text-black dark:text-white">
                  {event.club}
                </p>
                <p>{formatDateTime(event.start)}</p>
                <p>{event.location ?? "Location not listed"}</p>
                <div className="flex flex-wrap gap-1.5">
                  {event.tags.map((tag) => (
                    <span
                      className="rounded-full bg-black/5 px-2 py-1 text-xs capitalize dark:bg-white/10"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {event.url && (
                  <a
                    className="inline-block font-medium text-blue-700 underline underline-offset-2 dark:text-blue-300"
                    href={event.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Event details
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-black/20 p-6 text-center text-black/60 dark:border-white/20 dark:text-white/60">
          {events.length === 0
            ? "There are no upcoming club events right now."
            : `No upcoming events match the "${selectedTag}" tag.`}
        </p>
      )}
    </div>
  );
}
