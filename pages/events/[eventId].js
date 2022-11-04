import {getEventById} from '/dummy-data';
import EventItemPage from "../../components/events/event-item";
import {useRouter} from "next/router";
import {Fragment} from "react";
import EventSummary from '/components/event-detail/event-summary';
import EventLogistics from '/components/event-detail/event-logistics';
import EventContent from '/components/event-detail/event-content';
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";



function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventId;
    console.log('====> eventId' + eventId);
    const getDetailEvent = getEventById(eventId);

    if(!getDetailEvent) {
        return <Fragment>
            <ErrorAlert>
                <p>No event found!</p>
            </ErrorAlert>
            <div className='center'>
                <Button link='/events'>Show all events</Button>
            </div>
        </Fragment>
    }

  return (
    <Fragment>
        <EventSummary title={getDetailEvent.title} />
        <EventLogistics date={getDetailEvent.date}
                        location={getDetailEvent.location}
                        image={getDetailEvent.image}
                        imageAlt={getDetailEvent.title} />
        <EventContent>
            <p>{getDetailEvent.title}</p>
        </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
