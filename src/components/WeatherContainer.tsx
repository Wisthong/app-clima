import { useEffect, useState } from "react";
import { Location } from "./Location";
import { DetailsTable } from "./DetailsTable";
import { DregeeSection } from "./DregeeSection";

export const WeatherContainer = ({
  fetchData,
  error,
}: {
  //TODO: Interface
  fetchData: any;
  error: string;
}) => {
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    description: "",
    icon: "",
    humidity: "",
    feels: "",
    visibility: "",
    longitude: "",
    latitude: "",
    windSpeed: "",
    pressure: "",
  });

  useEffect(() => {
    if (fetchData) {
      setWeather({
        city: fetchData.name,
        country: fetchData.sys.country,
        temperature: Math.floor(fetchData.main.temp - 273),
        description: fetchData.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${fetchData.weather[0].icon}@2x.png`,
        humidity: fetchData.main.humidity,
        feels: Math.floor(fetchData.main.feels_like - 273) + "°C",
        visibility: fetchData.visibility + "m",
        pressure: fetchData.main.pressure + "hPa",
        longitude: fetchData.coord.lon,
        latitude: fetchData.coord.lat,
        windSpeed: fetchData.wind.speed + "m/s",
      });
    }
  }, []);

  return (
    <main className="w-96 rounded-3xl bg-gradient-to-b from-gray-700 shadow-lg">
      <div className="flex w-full items-center flex-col p-8">
        <Location data={weather} />
        <DregeeSection data={weather}/>
        <DetailsTable data={weather} />
      </div>
    </main>
  );
};
