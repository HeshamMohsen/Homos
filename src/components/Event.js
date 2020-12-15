import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import useCountdownTimer from "./useCountdownTimer";
import { updateEvent } from "../store/actions/events";

function UpcomingEvent({ id, name, date, time, label, updateEvent }) {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(5);
  const { days, hours, minutes, seconds, eventStarted } = useCountdownTimer(`${date} ${time}`);

  useEffect(() => {
    // start update event
    const startAnimate =
      eventStarted &&
      setInterval(() => {
        if (count === 0) {
          updateEvent(id, { started: true });
          return clearInterval(startAnimate);
        }

        setCount(count - 1);
        setFlag(!flag);
      }, 500);

    return () => {
      clearInterval(startAnimate);
    };
  }, [eventStarted, id, updateEvent, count, flag]);

  return (
    <div className={`event mb-3 event--${flag}`}>
      <div className="event__header d-flex justify-content-between align-items-center">
        <div className="event__time">{date}</div>
        <div className="event__label">{label}</div>
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

function StartedEvent({ name, date, label }) {
  return (
    <div className="event mb-3 w-100">
      <div className="event__header d-flex justify-content-between align-items-center">
        <div className="event__time">{date}</div>
        <div className="event__label">{label}</div>
      </div>
      <div className="event__name my-3">
        <h2 title={name}>{name}</h2>
      </div>
    </div>
  );
}

function TrashedEvent({ id, name, date, label, updateEvent }) {
  return (
    <div className="event mb-3 w-100">
      <div className="event__header d-flex justify-content-between align-items-center">
        <div className="event__time">{date}</div>
        <div className="event__label">{label}</div>
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

function Event({ event, updateEvent, eventType }) {
  const view = {
    upcoming: () => <UpcomingEvent {...event} updateEvent={updateEvent} />,
    started: () => <StartedEvent {...event} />,
    trashed: () => <TrashedEvent {...event} updateEvent={updateEvent} />,
  };

  return view[eventType]();
}

const mapDispatchToProps = (dispatch) => ({
  updateEvent: (id, updates) => dispatch(updateEvent(id, updates)),
});

export default connect(undefined, mapDispatchToProps)(Event);
