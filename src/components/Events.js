import React, { useEffect } from "react";
import { connect } from "react-redux";
import Event from "./Event";
import Filters from "./Filters";

import { startSetEvents, startUpdateEvent } from "../store/actions/events";

function Events({
  startSetEvents,
  startUpdateEvent,
  events: { events, filter, searchText, activeFilterName },
}) {
  useEffect(() => {
    startSetEvents();
  }, [filter, searchText, startSetEvents]);

  const updateEvent = (id, updates) => {
    startUpdateEvent(id, updates);
  };

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
        {events?.map((event) => (
          <Event
            updateEvent={updateEvent}
            event={event}
            key={event.name}
            eventType={activeFilterName}
          />
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
  startUpdateEvent: (id, updates) => dispatch(startUpdateEvent(id, updates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
