import React from "react";
import useCountdownTimer from "./useCountdownTimer";

function UpcomingEvents({ id, name, date, time, related_to, started, updateEvent }) {
  const [days, hours, minutes, seconds] = useCountdownTimer(`${date} ${time}`);

  if (days === "0" && started === false) {
    updateEvent(id, { started: true });
  }

  return (
    <div className="event mb-3">
      <div className="event__header d-flex justify-content-between align-items-center">
        <div className="event__time">{date}</div>
        <div className="event__related">{related_to}</div>
      </div>
      <div className="event__name my-3">
        <h2 title={name}>{name}</h2>
      </div>
      <div className="event__timer my-3">
        <div className="d-flex justify-content-center align-items-center">
          <span className="counter">{days}</span>
          <span className="counter">{hours}</span>
          <span className="counter">{minutes}</span>
          <span className="counter">{seconds}</span>
        </div>
      </div>
      <div className="text-right">
        <i
          className="fas fa-trash-alt item-icon item-icon--fancy"
          onClick={() =>
            updateEvent(id, {
              is_deleted: true,
            })
          }
          title="delete event"
        ></i>
      </div>
    </div>
  );
}

function StartedEvent({ name, date, related_to }) {
  return (
    <div className="event mb-1 w-100">
      <div className="event__header d-flex justify-content-between align-items-center">
        <div className="event__time">{date}</div>
        <div className="event__related">{related_to}</div>
      </div>
      <div className="event__name my-3">
        <h2 title={name}>{name}</h2>
      </div>
    </div>
  );
}

function TrashedEvent({ id, name, date, related_to, updateEvent }) {
  return (
    <div className="event mb-1 w-100">
      <div className="event__header d-flex justify-content-between align-items-center">
        <div className="event__time">{date}</div>
        <div className="event__related">{related_to}</div>
      </div>
      <div className="event__name my-3">
        <h2 title={name}>{name}</h2>
      </div>
      <div className="text-right m-0">
        <i
          className="fas fa-undo item-icon item-icon--fancy"
          onClick={() => updateEvent(id, { is_deleted: false })}
          title="undo event"
        ></i>
      </div>
    </div>
  );
}

export default function Event({ event, updateEvent, eventType }) {
  const view = {
    upcoming: () => <UpcomingEvents {...event} updateEvent={updateEvent} />,
    started: () => <StartedEvent {...event} />,
    trashed: () => <TrashedEvent {...event} updateEvent={updateEvent} />,
  };

  return view[eventType]();
}
