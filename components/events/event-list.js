import EventItemPage from "../events/event-item";

function EventListPage(props) {
  const { items } = props;

  return (
    <ul>
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
