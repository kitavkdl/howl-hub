import PageHeader from "@/components/PageHeader";
import { getClubEvents } from "@/lib/data";
import ClubEventList from "./ClubEventList";

export default async function ClubsPage() {
  const events = await getClubEvents();

  return (
    <>
      <PageHeader
        title="Clubs & Events"
        description="Find upcoming events hosted by Stony Brook clubs."
      />
      <ClubEventList events={events} />
    </>
  );
}
