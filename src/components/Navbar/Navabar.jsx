import Clock from '../Clock/Clock';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Clock/>
    </nav>
  );
};

export default Navbar;
