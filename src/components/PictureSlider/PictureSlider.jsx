import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import styles from './PictureSlider.module.scss';

const PictureSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Transition every 10 seconds
    console.log("CI", currentIndex)
    return () => {
      clearInterval(interval);
    };
  }, [images.length, currentIndex]);

  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.item} ${index === currentIndex ? styles.active : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default PictureSlider;

PictureSlider.propTypes = {
    images: PropTypes.node.isRequired,
};
