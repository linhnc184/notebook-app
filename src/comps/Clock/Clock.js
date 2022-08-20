import { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {
  const now = () => new Date().toLocaleString();
  const [time, setTime] = useState(now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="Clock">
      <div>{time}</div>
    </div>
  );
};

export default Clock;
