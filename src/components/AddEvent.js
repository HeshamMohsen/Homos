import React from "react";
import { v4 as uuid } from "uuid";
import useFormInput from "./useFormInput";

function AddEvent(props) {
  const name = useFormInput("");
  const related = useFormInput("");
  const date = useFormInput("");
  const time = useFormInput("");

  const submitFormHandler = (e) => {
    e.preventDefault();

    // submit to add event
    fetch("http://localhost:8080/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuid(),
        name: name.value,
        date: date.value,
        time: time.value === "" ? "00:00" : time.value,
        related_to: related.value,
        is_deleted: false,
        started: false,
      }),
    }).then(() => {
      props.showAddEventComponentHandler();
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
            autoFocus
            required
            autoComplete="off"
            {...name}
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
            {...related}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            className="form-control"
            type="date"
            name="date"
            required
            value={
              new Date(
                `${new Date().getFullYear()}-${parseInt(
                  new Date().getMonth() + 1
                )}-${new Date().getDate()}`
              ).getTime() > new Date(date.value).getTime()
                ? ""
                : date.value
            }
            onChange={date.onChange}
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            className="form-control"
            type="time"
            name="time"
            value={
              new Date().getTime() > new Date(`${date.value} ${time.value}`).getTime()
                ? ""
                : time.value
            }
            onChange={time.onChange}
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
