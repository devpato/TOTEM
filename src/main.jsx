import React from 'react'
import ReactDOM from 'react-dom/client'
import HomeScreen from './pages/HomeScreen/HomeScreen';
import GMap from './components/Map/Map';
import AdvertisementScreen from './pages/AdvertisementScreen/AdvertisementScreen'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdvertisementScreen/>,
  },
  {
    path: "/mapa",
    element: <GMap/>,
  },
  {
    path: "/home",
    element: <HomeScreen/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
