import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";

// Dashboard / Daily Briefing. Each card will pull real data from its feature later.
export default function Dashboard() {
  return (
    <>
      <PageHeader title="Good morning 👋" description="Here's your day at Stony Brook." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Today's classes">No data yet.</Card>
        <Card title="Upcoming deadlines">No data yet.</Card>
        <Card title="Club events">No data yet.</Card>
        <Card title="Email highlights">No data yet.</Card>
      </div>
    </>
  );
}
