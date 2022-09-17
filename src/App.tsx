import { useEffect, useState } from 'react';
import { getWeatherByCoords } from './api/fetchWeather';
import {WeatherContainer} from './components/WeatherContainer';

export const App = () => {

  const [fetchData, setFetchData] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position)=> {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;

      try {
        const resp = await getWeatherByCoords(LAT,LON);
        setFetchData(resp);
        console.log(resp);
        
      } catch (err) {
        setError(`🔴🔴🔴Error inesperado🔴🔴🔴 ${err}`)
        console.log('🔴🔴🔴Error inesperado🔴🔴🔴', err);
        
      }
    })
  }, [])
  

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <WeatherContainer fetchData={fetchData} error={error}  />
    </div>
  );
};
