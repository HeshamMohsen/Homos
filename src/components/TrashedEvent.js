import React from "react";

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

export default TrashedEvent;
