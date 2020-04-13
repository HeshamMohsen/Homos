import React, { useEffect, useState } from "react";
import Event from "./Event";
import Filters from "./Filters";

function Events() {
  const [events, setEvents] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [activeFilterName, setActiveFilterName] = useState("upcoming");
  const [filter, setFilter] = useState("?is_deleted=false&started=false");

  useEffect(() => {
    // cancel prev request, each time fires new one
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`http://localhost:8080/events${filter}&q=${searchText}`, { signal: signal })
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });

    return () => {
      // prevent race conditions
      controller.abort();
    };
  }, [filter, searchText]);

  const updateEvent = (id, updates) => {
    fetch(`http://localhost:8080/events/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...updates }),
    }).then(() => {
      setEvents(events.filter((event) => event.id !== id));
    });
  };

  const handleSelectedFilter = (active, filter) => {
    setActiveFilterName(active);
    setFilter(filter);
  };

  return (
    <div className="events p-4">
      <main className="d-flex justify-content-between align-items-center border-bottom my-3 pb-3">
        <h5 className="flex-grow-1">
          Events
          <span className="event__related event__related--light ml-2">{events?.length}</span>
        </h5>
        <Filters
          activeFilterName={activeFilterName}
          handleSelectedFilter={handleSelectedFilter}
          searchText={searchText}
          setSearchText={setSearchText}
        />
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

export default Events;
