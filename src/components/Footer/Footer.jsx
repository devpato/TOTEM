import styles from './Footer.module.scss';
import tapIcon from '../../assets/tap.png';
import qrCode from '../../assets/qr-code.png';
import pyramid from '../../assets/pyramid.png';

const Footer = () => {
  return (
    <footer className={styles.grid}>
        <div className={styles['item']}>
            <img src={pyramid}/>
            <p className={styles['text']}>totem.mx</p>
        </div>
        <div className={styles['item']}>
            <img src={tapIcon}/>
            <p className={styles['text']}>Touch screen to start</p>
        </div>
        <div className={styles['item']}>
            <img src={qrCode}/>
            <p className={styles['text']}>Open TOTEM on your phone</p>
        </div>
    </footer>
  );
};

export default Footer;
