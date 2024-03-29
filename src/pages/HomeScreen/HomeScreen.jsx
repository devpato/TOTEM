//import { useHistory } from 'react-router-dom';
// import Navbar from '../../components/Navbar/Navabar';
import styles from './HomeScreen.module.scss';
import { BiMap, BiListUl } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
const HomeScreen = () => {
 const navigate = useNavigate();

  const handleMapButtonClick = () => {
    navigate('/mapa');
  };

  const handleGuideButtonClick = () => {
    alert('OPEN GUIDE COMPONENT')
  };

  return (
    <>
     {/* <Navbar/> */}
        <div className={`${styles['bg-image']}`}></div>
        <div className={`${styles['home-screen']}`}>
            <div className={`${styles['button-container']}`}>
            <button className={`${styles['left-button']}`} onClick={handleMapButtonClick}>
              <BiMap className="button-icon" />
                <span>Map</span>
            </button>
            <button className={`${styles['right-button']}`} onClick={handleGuideButtonClick}>
              <BiListUl className="button-icon" />
                <span>Guide</span>
            </button>
        </div>
    </div>
    </>
  );
};

export default HomeScreen;
