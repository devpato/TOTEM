import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { useState } from "react";
// import { useMemo } from "react";
import demoFancyMapStyles from "./demoFancyMapStyles.json";
// import { FaStar } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navabar';
import styles from './Map.module.scss';
// LOGOS
import visa from "../../assets/icons/visa.png";
// import res from "../../assets/icons/restaurant.png";
import sel from "../../assets/icons/selina.png";
// import zorba from "../../assets/icons/zorba.png";
// import umo from "../../assets/icons/umo.png";
import rdt from "../../assets/icons/rdt.png";

const center = { lat: 20.214788 , lng: -87.430588};
function GMap() {

  const childLabel = document.querySelector('div .gmnoprint');
  const label = childLabel?.parentNode;
  if(label?.style?.display) {
    label.style.display = "none";
  }
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyByVGlyxbZOCXx-J_sTzSIFp6klHQX7XB4",
  });
  // eslint-disable-next-line no-unused-vars
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
      name: "Reporte Diario Tulum",
      address: "Carretera estatal Tulum - Boca Paila, Parcela 1744-A", 
      lat: 20.199970953321724, lng: -87.45409545990833,
      icon: rdt
     },
     { 
      name: "Selina Tulum",
      address: "Carr. Tulum-Boca Paila Km. 7.5, Tulum Beach, Zona Hotelera", 
      lat: 20.155614402054113, lng: -87.45663926179229,
      icon: sel
     },
    //  { 
    //   name: "Zorba Tulum",
    //   address: "Carr. Tulum-Boca Paila Km. 9, Tulum Beach, Zona Hotelera", 
    //   lat: 20.13848611253323, lng: -87.4618182046472,
    //   icon: zorba
    //  },
    //  { 
    //   name: "UMO Smoke Shop (Bagatelle)",
    //   address: "Carr. Tulum-Boca Paila Km 7, Tulum Beach", 
    //   lat: 20.15376227521633, lng: -87.45752236705873,
    //   icon: umo
    //  }
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
                // eslint-disable-next-line no-undef
                scaledSize: new google.maps.Size(100, 100)
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
                    <div 
                    className={styles.stars} 
                    style={
                        {
                          color: "goldenrod",
                          ["fontSize"]: "24px"
                        }
                      }>
                      {/* <FaStar style={
                        {
                          color: "goldenrod",
                          ["font-size"]: "24px"
                        }
                      }/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/> */}
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
