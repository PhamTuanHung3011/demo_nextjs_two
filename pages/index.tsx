import {getFeaturedEvents}  from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
  const getFeatureEvent = getFeaturedEvents();
  return (
    <div>
      <EventList items={getFeatureEvent} />
    </div>
  );
}

export default HomePage;
