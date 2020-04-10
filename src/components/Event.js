import React, { useEffect, useState } from "react";

function Events({ name, date, time, related_to }) {
  // custom hook
  const [days, hours, minutes, seconds] = useCountDownTimer(`${date} ${time}`);

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

function useCountDownTimer(dates) {
  const [days, setDays] = useState("-");
  const [hours, setHours] = useState("-");
  const [minutes, setMinutes] = useState("-");
  const [seconds, setSeconds] = useState("-");

  useEffect(() => {
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

    return () => {
      clearInterval(timer);
    };
  }, [dates]);

  return [days, hours, minutes, seconds];
}

export default Events;
