import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [days, setDays] = useState("-");
  const [hours, setHours] = useState("-");
  const [minutes, setMinutes] = useState("-");
  const [seconds, setSeconds] = useState("-");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
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

    // start countdowntimer
    setupCountdownTimer(`${date} ${time}`);
  };

  const setupCountdownTimer = (dates) => {
    const date = new Date(dates).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = date - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24)); // days
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // hours from distance
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (now >= date) {
        clearInterval(timer);
        setDays("-");
        setHours("-");
        setMinutes("-");
        setSeconds("-");
        alert("event is now started.");
      }
    };

    const timer = setInterval(updateTimer, 1000);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Evento</h1>
      </header>
      <div className="container mt-5">
        <form onSubmit={submitFormHandler}>
          <div className="form-group">
            <label>Event name</label>
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
            <label>Event date</label>
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
            <label>Event time</label>
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

        <div className="countdown d-flex justify-content-center align-items-center my-5">
          <span className="counter">{days}</span>
          <span className="counter">{hours}</span>
          <span className="counter">{minutes}</span>
          <span className="counter">{seconds}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
