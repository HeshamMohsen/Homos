import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Event from "./Event";
import Filters from "./Filters";

import { startSetEvents } from "../store/actions/events";

function Events({ startSetEvents, events: { events, activeFilterName } }) {
  const [filteredEvents, setFilteredEvents] = useState(events);
  useEffect(() => {
    startSetEvents();
  }, [startSetEvents]);

  useEffect(() => {
    setFilteredEvents(
      events &&
        events.filter((event) => {
          if (activeFilterName === "upcoming") {
            return !event.is_deleted && !event.started;
          } else if (activeFilterName === "started") {
            return event.started;
          } else {
            return event.is_deleted;
          }
        })
    );
  }, [events, activeFilterName]);

  return (
    <div className="events p-4">
      <main className="d-flex justify-content-between align-items-center border-bottom my-3 pb-3">
        <h5 className="flex-grow-1">
          Events
          <span className="event__label event__label--light ml-2">{events?.length}</span>
        </h5>
        <Filters />
      </main>

      <div className="events__overflow d-flex justify-content-start align-items-start flex-wrap">
        {filteredEvents?.map((event) => (
          <Event event={event} key={event.name} eventType={activeFilterName} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  events: state.events,
});

const mapDispatchToProps = (dispatch) => ({
  startSetEvents: (signal) => dispatch(startSetEvents(signal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
