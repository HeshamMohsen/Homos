import React from "react";
import useCountdownTimer from "./useCountdownTimer";

function Event({ id, name, date, time, related_to, updateEvent }) {
  const [days, hours, minutes, seconds] = useCountdownTimer(`${date} ${time}`);

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
          onClick={() => updateEvent(id, { is_deleted: true })}
          title="delete event"
        ></i>
      </div>
    </div>
  );
}

export default Event;
