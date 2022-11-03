import Link from "next/link";

function EventItemPage(props) {
  const { title, description, location, date, image, id } = props;
  const humanReadebleDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <h2>{description}</h2>
          </div>
          <div>
            <h2>{formatedAddress}</h2>
          </div>
          <div>
            <h2>{humanReadebleDate}</h2>
          </div>
        </div>
        <div>
          <Link href={exploreLink}> Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItemPage;
