import React, { useEffect, useState } from "react";
import Event from "./Event";
import TrashedEvent from "./TrashedEvent";

function Events() {
  const [events, setEvents] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    fetch("http://localhost:8080/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, [selectedFilter]);

  useEffect(() => {
    setFilteredEvents(
      events?.filter((event) => (selectedFilter === "all" ? !event.is_deleted : event.is_deleted))
    );
  }, [events, selectedFilter]);

  const updateEvent = (id, updates) => {
    fetch(`http://localhost:8080/events/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...updates }),
    }).then(() => {
      setFilteredEvents(filteredEvents.filter((event) => event.id !== id));
    });
  };

  return (
    <div className="events p-4">
      <main className="d-flex justify-content-between align-items-center m-3 border-bottom m-0">
        <h5>
          All Events
          <span className="event__related event__related--light ml-2">
            {filteredEvents?.length}
          </span>
        </h5>

        <div className="filters">
          <span
            className={
              selectedFilter === "all"
                ? "event__related mr-2"
                : "event__related event__related--light mr-2"
            }
            onClick={() => setSelectedFilter("all")}
          >
            All
          </span>
          <span
            className={
              selectedFilter === "trashed"
                ? "event__related mr-2"
                : "event__related event__related--light mr-2"
            }
            onClick={() => setSelectedFilter("trashed")}
          >
            Trashed
          </span>
        </div>
      </main>

      <div className="events__overflow d-flex justify-content-start align-items-start flex-wrap">
        {selectedFilter === "all"
          ? filteredEvents?.map((event) => (
              <Event updateEvent={updateEvent} {...event} key={event.name} />
            ))
          : filteredEvents.map((event) => (
              <TrashedEvent updateEvent={updateEvent} {...event} key={event.name} />
            ))}
      </div>
    </div>
  );
}

export default Events;
