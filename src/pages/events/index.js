import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../../components/events/event-list";
import EventsSearch from "../../../components/events/event-seach";
import { getAllEvents } from "../../../helpers/api-utils";

const AllEventsPage = (props) => {
  const router = useRouter();
  const { events } = props;
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
};

export default AllEventsPage;
