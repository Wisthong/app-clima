import { FormEvent, useEffect, useState } from "react";
import { getWeatherByCoords, getWeatherBySearch } from "./api/fetchWeather";
import { WeatherContainer } from "./components/WeatherContainer";
import { SearchBox } from "./components/SearchBox";

export const App = () => {
  const [fetchData, setFetchData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;

      try {
        const data = await getWeatherByCoords(LAT, LON);
        setFetchData(data);
        console.log(data);
      } catch (err) {
        setError(`🔴🔴Error, ocurrio algo inesperado🔴🔴`);
        console.log('🔴🔴Error, ocurrio algo inesperado🔴🔴');
      }
    });
  }, []);

  //TODO: Buscador
  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault();
    try {
      const resp = await getWeatherBySearch(CITY);
      if (resp === 404) {
        setError(`No se encontro la ciudad`)
      }else if (resp === 400) {
        setError(`Ingrese el nombre de la ciudad`)
      }else{
        setFetchData(resp);
      }
    } catch (err) {
      setError(`🔴🔴Error, ocurrio algo inesperado🔴🔴`);
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <SearchBox handleSearch={handleSearch}/>
      <WeatherContainer fetchData={fetchData} error={error} />
    </div>
  );
};
