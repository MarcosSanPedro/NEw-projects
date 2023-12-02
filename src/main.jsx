import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/NavBarV1.jsx'
import { Hero } from './components/Hero.jsx'
import { Header } from './components/Header/Header.jsx'
import { getWeather } from './components/Api/Weather.jsx'
const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY;
const city = "miami"


const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/Header", element: <Header/>, loader: getWeather(city, apiKey)},
  {path: "/NavBar", element: <Navbar/>},
  {path: "/Hero", element: <Hero/>},

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
