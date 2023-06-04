import { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
import './AdverstisementScreen.module.scss'
import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.jpeg'
import PictureSlider from '../../components/PictureSlider/PictureSlider';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navabar';

const AdvertisementScreen = () => {

    const images = [
        image1,
        image2
    ];
  //const history = useHistory();
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    let timeout;

    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowCarousel(true), 1000); // 5 minutes (300000 milliseconds)
    };

    // const handleUserActivity = () => {
    //   setShowCarousel(false);
    //   resetTimeout();
    // };

    resetTimeout();

    // document.addEventListener('mousemove', handleUserActivity);
    // document.addEventListener('keydown', handleUserActivity);
    // document.addEventListener('mousedown', handleUserActivity);
    // document.addEventListener('touchstart', handleUserActivity);

    return () => {
      clearTimeout(timeout);
    //   document.removeEventListener('mousemove', handleUserActivity);
    //   document.removeEventListener('keydown', handleUserActivity);
    //   document.removeEventListener('mousedown', handleUserActivity);
    //   document.removeEventListener('touchstart', handleUserActivity);
    };
  }, []);

  const handleClick = () => {
    alert('HI')
    //history.push('/home'); // Redirect to the home component
  };

  return (
    <div onClick={handleClick}>   
        {showCarousel && (
            <>
                <Navbar/>
                <PictureSlider images={images}/>
                <Footer/>
            </>
        )}
        
    </div>
  );
};

export default AdvertisementScreen;
