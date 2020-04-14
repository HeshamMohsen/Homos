import { useState, useEffect } from "react";

export default function useCountdownTimer(dates) {
  const [days, setDays] = useState("-");
  const [hours, setHours] = useState("-");
  const [minutes, setMinutes] = useState("-");
  const [seconds, setSeconds] = useState("-");
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const date = new Date(dates).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = date - now;

      if (now >= date) {
        setEventStarted(true);
        return clearInterval(timer);
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24)); // days
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // hours from distance
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    };

    const timer = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dates]);

  return eventStarted
    ? { days: 0, hours: 0, minutes: 0, seconds: 0, eventStarted }
    : { days, hours, minutes, seconds };
}
