import Clock from '../Clock/Clock';
import Weather from '../Weather/Weather';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Weather/>
        <Clock/>
    </nav>
  );
};

export default Navbar;
