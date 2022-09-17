import {WeatherData} from '../interfaces/WeatherData'

export const DregeeSection = ({data: {temperature, icon ,description}}: {data: WeatherData}) => {
  return (
    <>
        <section className="text-5xl font-bold text-white">
            <span className="text-yellow-500">
                {temperature}
            </span>
            °C
        </section>
        <section>
            <img id="iconImg" src={icon} alt="No existe" />
        </section>
        <section className="font-bold uppercase text-4xl text-white mb-6" id="description">
            {description}
        </section>
    </>
  )
}
