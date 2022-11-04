import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from '/components/events/event-list';
import {Fragment} from "react";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";


function FilteredEventsPage() {

    const router = useRouter();
    const filterData = router.query.slug;
    console.log(filterData);


    if (!filterData) {
        return <p className='center'>Loading...</p>
    }

    const filteredYear = +filterData[0];
    const filteredMonth = +filterData[1];

    const numYear = filteredYear;
    const numMonth = filteredMonth;
    console.log(numMonth, numYear);

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2031 ||
        numYear < 2020 ||
        numMonth < 0 ||
        numMonth > 12
    ) {
        return <Fragment>
            <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
                <div className='center'>
                    <Button link='/events'> Show All Event</Button>
                </div>
            </ErrorAlert>

        </Fragment>

    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <Fragment>
            <ErrorAlert>
                <p>No events found for the chosen filter!</p>
            </ErrorAlert>
           <div className='center'>
               <Button link='/events'>Show all events</Button>
           </div>
        </Fragment>
    }
    return (
        <Fragment>
            <ResultsTitle/>
            <EventList items={filteredEvents}/>

        </Fragment>

    );
}

export default FilteredEventsPage;
