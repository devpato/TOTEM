import { useState, useEffect } from 'react';
import  styles from './Clock.module.scss';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();

  return (
    <div className={styles.clock}>
      <div className={styles.hour}>{hours}</div>:
      <div className={styles.minute}>{minutes}</div>
    </div>
  );
};

export default Clock;
