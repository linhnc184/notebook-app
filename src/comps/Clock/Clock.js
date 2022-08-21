import { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {
  const now = () =>
    new Date().toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

  const [time, setTime] = useState(now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="clock">{time}</div>;
};

export default Clock;
