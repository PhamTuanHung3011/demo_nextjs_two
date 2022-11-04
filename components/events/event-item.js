
import classes from './event-item.module.css'
import Button from '../ui/button';
import ArrowRightIcon from "../icon/arrow-right-icon";


function EventItemPage(props) {
  const { title, description, location, date, image, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div >
          <div className={classes.content}>
            <h2>{title}</h2>
          </div>
          <div >
            <h2>{description}</h2>
          </div>
          <div className={classes.address}>
            <h2>{formattedAddress}</h2>
          </div>
          <div className={classes.date}>
            <h2>{humanReadableDate}</h2>
          </div>
        </div>
        <div className={classes.actions}>
         <Button link={exploreLink}>
           Explore Event
           <span className={classes.icon}> <ArrowRightIcon /> </span>
         </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItemPage;
