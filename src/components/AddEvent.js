import React from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import useFormInput from "./useFormInput";
import useLabels from "./useLabels";

import { setShowAddEvent } from "../store/actions/events";

function AddEvent(props) {
  const name = useFormInput("");
  const label = useFormInput("");
  const date = useFormInput("");
  const time = useFormInput("");

  const { labels } = useLabels();

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
        label: label.value,
        is_deleted: false,
        started: false,
      }),
    }).then(() => {
      props.showAddEvent(false);
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
          <label>Label</label>
          <select className="form-control" {...label} value={label.value}>
            <option></option>
            {labels?.map((label) => (
              <option key={label.id}>{label.name}</option>
            ))}
          </select>
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

const mapDispatchToProps = (dispatch) => ({
  setShowAddEvent: (state) => dispatch(setShowAddEvent(state)),
});

export default connect(undefined, mapDispatchToProps)(AddEvent);
