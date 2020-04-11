import React, { useEffect, useState } from "react";
import Event from "./Event";

function Events() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <div className="events p-4">
      <main className="m-3 border-bottom m-0">
        <h5>
          All Events <span className="event__related event__related--light">{events?.length}</span>
        </h5>
      </main>

      <div className="events__overflow d-flex justify-content-start align-items-start flex-wrap">
        {events && events.map((event) => <Event {...event} key={event.name} />)}
      </div>
    </div>
  );
}

export default Events;
