import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { getDeadlines } from "@/lib/data";
import { formatDateTime } from "@/lib/format";

// Dashboard / Daily Briefing. Each card will pull real data from its feature later.
// "Upcoming deadlines" is wired up as an example: an async page awaits a function
// from src/lib/data.ts and renders it. Copy this pattern for the other cards.
export default async function Dashboard() {
  const deadlines = await getDeadlines();

  return (
    <>
      <PageHeader title="Good morning 👋" description="Here's your day at Stony Brook." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Today's classes">No data yet.</Card>
        <Card title="Upcoming deadlines">
          <ul className="space-y-2">
            {deadlines.slice(0, 3).map((d) => (
              <li key={d.id}>
                <div className="font-medium text-black dark:text-white">{d.title}</div>
                <div>{formatDateTime(d.due)}</div>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Club events">No data yet.</Card>
        <Card title="Email highlights">No data yet.</Card>
      </div>
    </>
  );
}
