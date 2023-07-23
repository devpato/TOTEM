import { GoogleMap, useLoadScript, Marker,MarkerF, InfoWindowF } from "@react-google-maps/api";
import styles from './Map.module.scss';
import { useState } from "react";
import { useMemo } from "react";
import demoFancyMapStyles from "./demoFancyMapStyles.json";
import visa from "../../assets/icons/visa.png";
import res from "../../assets/icons/restaurant.png";
import { FaStar } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navabar';

const center = { lat: 20.214788 , lng: -87.430588};
function GMap() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyByVGlyxbZOCXx-J_sTzSIFp6klHQX7XB4",
  });
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  const markers = [
    { 
      name: "Vagalume",
      address: "QROO 15, Tulum Beach, 77776 Q.R., Mexico",
      lat: 20.1516, lng: -87.4577,
      icon: visa
     },
    { 
      name: "Bonbonniere",
      address: "Carretera estatal Tulum - Boca Paila, Parcela 1744-A", 
      lat: 20.199970953321724, lng: -87.45409545990833,
      icon: res
     }
  ];

  const onMapLoad = (map) => {
    setMapRef(map);
    // const bounds = new google.maps.LatLngBounds();
    // markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    // map.fitBounds(bounds);
  };

  const handleMarkerClick = (id, lat, lng, address, name) => {
    setInfoWindowData({ id, address, name });
    setIsOpen(true);
  };  

  return (
    <div className="App">
      <Navbar/>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          zoom={14}
          center={center}
          mapTypeControl= {false}
          onLoad={onMapLoad}
          onClick={() => setIsOpen(false)}
          mapContainerStyle={{width: "100%", height: "100vh"}}
          options={{ 
            styles: demoFancyMapStyles,
            disableDefaultUI: true,
            fullscreenControl: true,
            maxZoom:24,
            minZoom:14,
           }}
        >
          {markers.map(({ address, lat, lng, name, icon }, ind) => (
            <MarkerF
              key={ind}
              position={{ lat, lng }}
              onClick={() => {
                handleMarkerClick(ind, lat, lng, address, name);
              }}
              icon={{
                url: icon,
                scaledSize: new google.maps.Size(50, 50)
              }}
            >
              {isOpen && infoWindowData?.id === ind && (
                <InfoWindowF
                  onCloseClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <div className={styles.infoWindow}>
                    <h3>{infoWindowData.name}</h3>
                    <div className={styles.stars}>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                    </div>
                    <p>Address: {infoWindowData.address}</p>
                    <a href="https://www.google.com/search?q=bonbonniere+tulum">Website</a>
                    <a href="https://www.google.com/search?q=bonbonniere+tulum">Tel: +1-229-460--9903</a>
                    <a href="https://www.google.com/search?q=bonbonniere+tulum">Search On Google</a>
                  </div>
                </InfoWindowF>
              )}
            </MarkerF>
          ))}
        </GoogleMap>
      )}
    </div>
  );

}

export default GMap;
