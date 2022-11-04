import {getAllEvents} from '/dummy-data';
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import {useRouter} from "next/router";


function AllEventsPage() {
    const route = useRouter();
    const getAllEvent = getAllEvents();


    function findEventHandler(year, month) {
        const fullPath = `/events/${year}/${month}`
        route.push(fullPath).then(() => null);
    }

    return (
        <div>
            <EventsSearch onSearch={findEventHandler}/>
            <EventList items={getAllEvent}/>
        </div>
    );
}

export default AllEventsPage;
