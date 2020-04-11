import React from "react";
import useCountdownTimer from "./useCountdownTimer";

function Events({ name, date, time, related_to }) {
  const [days, hours, minutes, seconds] = useCountdownTimer(`${date} ${time}`);

  return (
    <div className="event mb-4">
      <div className="event__header d-flex justify-content-between align-items-center">
        <div className="event__time">{date}</div>
        <div className="event__related">{related_to}</div>
      </div>
      <div className="event__name my-3">
        <h2 title={name}>{name}</h2>
      </div>
      <div className="event__timer">
        <div className="d-flex justify-content-center align-items-center my-4">
          <span className="counter">{days}</span>
          <span className="counter">{hours}</span>
          <span className="counter">{minutes}</span>
          <span className="counter">{seconds}</span>
        </div>
      </div>
    </div>
  );
}

export default Events;
