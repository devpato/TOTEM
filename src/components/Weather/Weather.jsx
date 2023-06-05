import { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi';
import styles from './Weather.module.scss';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
            'https://api.openweathermap.org/data/2.5/weather?q=new+york+city&appid=0e295817b6994915407460ad629e1a66&units=metric'
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    getWeather();
  }, []);

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case '01d':
        return <WiDaySunny />;
      case '01n':
        return <WiDaySunny />;
      case '02d':
        return <WiCloudy />;
      case '02n':
        return <WiCloudy />;
      case '03d':
      case '03n':
        return <WiCloudy />;
      case '04d':
      case '04n':
        return <WiCloudy />;
      case '09d':
      case '09n':
        return <WiRain />;
      case '10d':
      case '10n':
        return <WiRain />;
      case '11d':
      case '11n':
        return <WiRain />;
      case '13d':
      case '13n':
        return <WiSnow />;
      default:
        return null;
    }
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { weather } = weatherData;

  return (
    <>
          <div className={styles.icon}>
            {getWeatherIcon(weather[0].icon)}
            <span className={styles.temp}>{Math.trunc(weatherData.main.temp_max)}</span>
            <span className={styles.units}>°C</span>
          </div>
    </>
  );
};

export default Weather;
