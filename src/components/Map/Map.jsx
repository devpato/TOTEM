import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { useState } from "react";
// import { useMemo } from "react";
import demoFancyMapStyles from "./demoFancyMapStyles.json";
// import { FaStar } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navabar';
import styles from './Map.module.scss';
// LOGOS
import selinaTulum from '../../assets/icons/22.png';
import italdo from '../../assets/icons/15.png';
import GBO from '../../assets/icons/9.png';
import umo from '../../assets/icons/2.png';
import zorba from '../../assets/icons/8.png';
import guadalupe from '../../assets/icons/26.png';
import valise from '../../assets/icons/16.png';
import mahayana from '../../assets/icons/20.png';
import pink from '../../assets/icons/22.png';
import persianas from '../../assets/icons/21.png';
import nu from '../../assets/icons/7.png';
import nana from '../../assets/icons/25.png';
import amor from '../../assets/icons/1.png';
import mezzannie from '../../assets/icons/31.png';
import studio from '../../assets/icons/23.png';
import nest from '../../assets/icons/19.png';
import maru from '../../assets/icons/29.png';
import panamera from '../../assets/icons/3.png';
import straw from '../../assets/icons/5.png';
import crossfit from '../../assets/icons/11.png';
import sabio from '../../assets/icons/13.png';
import billy from '../../assets/icons/24.png';
import layla from '../../assets/icons/6.png';
import caleta from '../../assets/icons/17.png';
import amigos from '../../assets/icons/18.png';
import clinica from '../../assets/icons/27.png';

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
      name: "Selina Tulum",
      address: "Carr. Tulum-Boca Paila Km. 7.5, Tulum Beach, Zona Hotelera, 77780 Tulum, Q.R., Mexico",
      lat: 20.1554432, lng: -87.4566221,
      icon: selinaTulum
     },
     { 
      name: "Italdo",
      address: "AV. 5 Sur Manzana 892 Lote 6, Local 7, La Veleta, 77760 Tulum, Q.R., Mexico",
      lat: 20.205352, lng: -87.479378,
      icon: italdo
     },
     { 
      name: "GOOD BIKES ONLY",
      address: "KM7.7, Carr. Tulum-Boca Paila, Tulum Beach, 77780 Tulum, Q.R., Mexico",
      lat: 20.155207, lng: -87.457025,
      icon: GBO
     },
     { 
      name: "GOOD BIKES ONLY",
      address: "Andador kanbul manzana 12 lote 12 77760 Andador kanbul manzana 12 lote 12 77760, Aldea Zama, 77760 Tulum, Q.R.,Mexico",
      lat: 20.198653, lng: -87.458229,
      icon: GBO
     },
     { 
      name: "UMO Smoke Shop (Bagatelle)",
      address: "Carr. Tulum-Boca Paila Km 7, Tulum Beach, 77766 Tulum, Q.R., Mexico",
      lat: 20.198653, lng: -87.458229,
      icon: umo
     },
     { 
      name: "UMO Smoke Shop (Aldea Zamá Tulum)",
      address: "Aldea Zama, 77760 Tulum, Q.R., Mexico",
      lat: 20.199094, lng: -87.4584367,
      icon: umo
     },
     { 
      name: "UMO Smoke Shop HUNAB",
      address: "avenida cobá, Aldea Zama, 77760 Tulum, Q.R., Mexico",
      lat: 20.2039819, lng: -87.449957,
      icon: umo
     },
     { 
      name: "UMO Smoke Shop Centro Tulum",
      address: "Calle polar poniente, Géminis nte 77760, Tulum Centro, centro, 77760 Tulum, Q.R., Mexico",
      lat: 20.213882, lng: -87.457250,
      icon: umo
     },
     { 
      name: "NÜ Tulum",
      address: "Carr. Tulum-Boca Paila KM 8.7, Tulum Beach, Zona Hotelera, 77760 Tulum, Q.R., Mexico",
      lat: 20.14052639, lng: -87.4618068,
      icon: nu,
      phone: "+52 984 134 3954",
      website: "www.nutulum.com"
     },
     { 
      name: "Zorba Tulum Beach Homes",
      address: "Carr. Tulum-Boca Paila Km. 9, Tulum Beach, Zona Hotelera, 77780 Tulum, Q.R., Mexico",
      lat: 20.138274, lng: -87.462376,
      icon: zorba,
      phone: "+1 250-354-9002",
      website: "www.zorbatulum.com"
     },
     { 
      name: "Los Bowls de Guadalupe",
      address: "Km 9.5, Carr. Tulum-Boca Paila, Tulum Beach, Zona Hotelera, 77780 Tulum, Q.R., Mexico",
      lat: 20.13777690, lng: -87.46311139,
      icon: guadalupe,
      phone: "",
      website: ""
     },
     { 
      name: "La Valise Tulum",
      address: "Carr. Tulum-Boca Paila Km 8.7, Tulum Beach, 77760 Tulum, Q.R., Mexico",
      lat: 20.14027210, lng: -87.461344899,
      icon: valise,
      phone: "+1 386-301-4831",
      website: "www.lavalisetulum.com"
     },
     { 
      name: "Radhoo Tulum",//falta logo
      address: "Carr. Tulum-Boca Paila km 8.7, Tulum Beach, 77780 Tulum, Q.R., Mexico",
      lat: 20.14117199, lng: -87.4613043,
      icon: valise,
      phone: "+1 386-675-0695",
      website: "www.radhootulum.com"
     },
     { 
      name: "Mahayana Tulum Beach Homes",
      address: "Carr. Tulum-Boca Paila Km. 8, Tulum Beach, Zona Hotelera, 77780 Tulum, Q.R., Mexico",
      lat: 20.1465104, lng: -87.45946969,
      icon: pink,
      phone: "+1 250-354-9002",
      website: "www.mahayanatulum.com"
     },
     { 
      name: "Pink Revolver",
      address: "Av. Boca Paila km 9.7, Zona Hotelera, 77760 Tulum, Q.R., Mexico",
      lat: 20.21422960, lng: -87.46893749,
      icon: mahayana,
      phone: "+52 33 3253 7994",
      website: "www.pinkrevolver.com.mx"
     },
     { 
      name: "Persianas Tulum S.A de C.V.",
      address: "C. 7 Sur Mz 735-local 3, La Veleta, 77760 Tulum, Q.R., Mexico",
      lat: 20.20328809, lng: -87.4719616,
      icon: persianas,
      phone: "+52 984 231 7866",
      website: "persianastulum.com"
     },
     { 
      name: "Naná Rooftop Bar",
      address: "Calle Polar Oriente Lote 004, Rooftop, Tulum Centro, Centro, 77760 Tulum, Q.R., Mexico",
      lat: 20.21450010, lng: -87.455380499,
      icon: nana,
      phone: "+52 984 256 4107",
      website: "persianastulum.com"
     },
     { 
      name: "Mi Amor",
      address: "Carr. Tulum-Boca Paila Km. 4.1, Zona Hotelera Tulum, Zona Costera, 77780 Tulum, Q.R., Mexico",
      lat: 20.1942341, lng: -87.4393165,
      icon: amor,
      phone: "+52 984 115 4728",
      website: "www.tulumhotelmiamor.com"
     },
     { 
      name: "Mezzanine Hotel Tulum",
      address: "km 4.1, Carr. Tulum-Boca Paila, Zona Hotelera Tulum, Zona Hotelera, 77780 Tulum, Q.R., Mexico",
      lat: 20.1974159, lng: -87.4374390,
      icon: mezzannie,
      phone: "+1 303-952-0595",
      website: "www.mezzaninetulum.com"
     },
     { 
      name: "Polf.studio",
      address: "Avenida Ook’ot S/N, colonia Maya, 77780 Tulum, Q.R., Mexico",
      lat: 20.21918680, lng: -87.4570301,
      icon: studio,
      phone: "+52 984 100 2915",
      website: ""
     },
     { 
      name: "Interior Market Tulum",//falta logo
      address: "Avenida Ook’ot S/N-Local 67, colonia Maya, 77780 Tulum, Q.R., Mexico",
      lat: 20.21918339, lng: -87.4570349,
      icon: studio,
      phone: "+52 984 238 3699",
      website: "www.theinteriormarket.com"
     },
     { 
      name: "Nest Tulum",
      address: "Carr. Tulum-Boca Paila Km 9.5, Tulum Beach, Zona Hotelera, 77760 Tulum, Q.R., Mexico",
      lat: 20.1381632, lng: -87.46302329,
      icon: nest,
      phone: "+1 386-317-2993",
      website: "nesttulum.com"
     },
     { 
      name: "Maru Nails Salón",
      address: "Itzamna Manzana 12 Lote 27, 77760 Tulum, Q.R., Mexico",
      lat: 20.198946399, lng: -87.460491299,
      icon: maru,
      phone: "+52 984 208 4998",
      website: ""
     },
     { 
      name: "Distrito Panamera: Restaurant, Rooftop, Beachclub & Art",
      address: "CARRETERA TULUM-BOCAPAILA, EJIDO JOSE MARIA, Pino Suárez KM 8.5, Tulum Beach, 77760 Tulum, Q.R., Mexico",
      lat: 20.14117199, lng: -87.46130430,
      icon: panamera,
      phone: "+52 998 109 2540",
      website: "www.distritopanamera.com"
     },
     { 
      name: "Straw Hat Hostel & Roof Top Bar",
      address: "Av. Tulum 89, Tulum Centro, Centro, 77860 Tulum, Q.R., Mexico",
      lat: 20.21269830, lng: -87.4589457,
      icon: straw,
      phone: "+52 984 202 4327",
      website: "hotels.cloudbeds.com"
     },
     { 
      name: "Tulum CrossFit Gym",
      address: "Avenida Tulum (the 307), Calle 8 Sur Across from Mini Bodega warehouse, La Veleta, 77760 Tulum, Q.R., Mexico",
      lat: 20.20605560, lng: -87.4772101,
      icon: crossfit,
      phone: "+52 984 202 4327",
      website: "tulumcrossfit.mx"
     },
     { 
      name: "Sabio MX",
      address: "C. 5 Sur, La Veleta, 77760 Tulum, Q.R., Mexico",
      lat: 20.20223839, lng: -87.478600399,
      icon: sabio,
      phone: "+52 984 270 5056",
      website: ""
     },
     { 
      name: "Billy Bob Tulum",
      address: "C. 5 Sur, La Veleta, 77760 Tulum, Q.R., Mexico",
      lat: 20.202235899, lng: -87.47858430,
      icon: billy,
      phone: "+52 984 270 5056",
      website: ""
     },
     { 
      name: "Layla Tulum Boutique Hotel & Restaurant",
      address: "C. Centauro Sur Lote 13, entre Venus Oriente y Neptuno Oriente, Tulum Centro, 77760 Tulum, Q.R., Mexico",
      lat: 20.2100163, lng: -87.45862,
      icon: layla,
      phone: "+52 984 196 5278",
      website: "www.laylatulum.com"
     },
     { 
      name: "Caleta Tankah Hotel",
      address: "Km. 233+400, México 307, 77780 Tulum, Q.R., Mexico",
      lat: 20.23177670, lng: -87.418399,
      icon: caleta,
      phone: "+52 984 156 5551",
      website: "www.caletatankah.com"
     },
     { 
      name: "Caleta Tankah Hotel",
      address: "C. 2 Pte. 1911, entre calle Mega Nte y Calle Jupiter Nte, Tulum Centro, 77760 Tulum, Q.R., Mexico",
      lat: 20.21260269, lng: -87.46522310,
      icon: amigos,
      phone: "",
      website: "adlemx.org"
     },
     { 
      name: "Clínica Veterinaria Alma Animal Tulum",
      address: "Okot 881, Tulum Centro, 77760 Tulum, Q.R., Mexico",
      lat: 20.21459040, lng: -87.46530279,
      icon: clinica,
      phone: "+52 984 137 9032",
      website: ""
     },
     
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
          zoom={12}
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
            minZoom:12,
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
                scaledSize: new google.maps.Size(80, 80)
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
