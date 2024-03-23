// App.jsx
import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Loader from './components/Loader'

function App() {

    const [weather, setWeather] = useState()
    const [coords, setCoords] = useState()
    const [temp, setTemp] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const success = info => {
         setCoords({
            lat: info.coords.latitude,
            lon: info.coords.longitude
        })
    };

  


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
       }, []);

    useEffect(() => {
      if (coords) {
          const APIKEY = 'ce9064c7684790f95bb2a549e20900cd'
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`;
          axios.get(url)

          .then(res =>{
          setWeather(res.data)
          const celcius = (res.data.main.temp - 273.15). toFixed(1)
          const fanhrenheit= ((9/5 * celcius) + 32 ) .toFixed(1)
          setTemp({
          celcius,
          fanhrenheit
          })
          })
          .catch(err => console.log(err))
          .finally(() => setIsLoading(false));
          }
          }, [coords] )
  
    return (
        <div className='app'>
          { 
            isLoading
            ? <Loader />
            : (  
           <WeatherCard
            weather={weather} 
            temp={temp} />
            )
          }
          
        </div>
    )
}

export default App
