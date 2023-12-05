import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Hero } from './components/Hero.jsx'
import { Header } from './components/Header/Header.jsx'
import { getWeather } from './components/Api/Weather.jsx'
import Navbar from './components/NavBarV1.jsx'
import PrivateApp from './PrivateApp.jsx'
const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY;
const city = "miami"

const withAuthProvider = (Component, requireAuth = false,) => {
  return (
    <AuthProvider>
      {requireAuth
      ? (
        <RequireAuth>
          <Component/>
        </RequireAuth>
      ):(
        <Component/>
      )}
    </AuthProvider>
  )
}

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/Header", element: <Header/>, loader: getWeather(city, apiKey)},
  {path: "/Hero", element: <Hero/>, loader: getWeather(city, apiKey)},
  {path:  "/NavBar", element: <Navbar/>},
  {path: "/PrivateApp", element: <PrivateApp/>},

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
