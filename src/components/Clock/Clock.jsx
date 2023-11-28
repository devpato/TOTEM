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
      <span className={styles.hour}>{hours <10 ? `0${hours}` : hours}</span>:
      <span className={styles.minute}>{minutes <10 ? `0${minutes}` : minutes}</span>
      <span>{hours >= 12 ? 'PM' : 'AM'}</span>
    </div>
  );
};

export default Clock;
