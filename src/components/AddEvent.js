import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function AddEvent() {
  const [name, setName] = useState("");
  const [related, setRelated] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const relatedChangeHandler = (e) => {
    setRelated(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const timeChangeHandler = (e) => {
    setTime(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!time) {
      setTime("00:00");
    }

    // submit to add event
    fetch("http://localhost:8080/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: uuid(), name, date, time, related_to: "learning" }),
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="events p-4">
      <div className="m-3 border-bottom m-0">
        <h5>Add New Event</h5>
      </div>
      <form onSubmit={submitFormHandler} className="w-50">
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            required
            autoComplete="off"
            value={name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Related to</label>
          <input
            className="form-control"
            type="text"
            name="name"
            required
            autoComplete="off"
            value={related}
            onChange={relatedChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            className="form-control"
            type="date"
            name="date"
            required
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            className="form-control"
            type="time"
            name="time"
            value={time}
            onChange={timeChangeHandler}
          />
        </div>
        <button type="submit" value="Save" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddEvent;
