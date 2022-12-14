import {WeatherData} from '../interfaces/WeatherData'

export const Location = ({data: {city, country}}: {data: WeatherData}) => {
  return (
    <header className="flex text-white text-4xl font-bold p-4 mt-12 animate__animated animate__jello animate__slower">
        <p className="mr-2" id="city">
            {city}
        </p>
        <span className="text-cyan-300 capitalize text-base mt-4" id="country">
            {country}
        </span>
    </header>
  )
}
