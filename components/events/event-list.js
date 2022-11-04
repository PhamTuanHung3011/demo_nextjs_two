import EventItemPage from "../events/event-item";
import classes from './event-list.module.css'

function EventListPage(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItemPage
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          location={item.location}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
}

export default EventListPage;
