import { useState, useEffect } from 'react'
import axios from 'axios'
import CardTemp from './CardTemp';

const CardsWeather = ({ lat, lon }) => {
    console.log({ lat, lon });
    const [weather, setWeather] = useState({})
    useEffect(() => {
        if (lat) {
            const APIKey = 'c0ddcf52067936481afc8a0836ca2b76'
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
            axios.get(URL)
                .then(res => setWeather(res.data))
                .catch(err => console.log(err))
        }
    }, [lat, lon])
    console.log(weather);

    return (
        <article className='cardCountry'>
            <h2>Weather</h2>

            <section className='clouds'>
                <h3>Clouds</h3>
                <div className="clouds__content">
                    {weather.clouds?.all}%
                </div>
            </section>

            <section className="location">
                <h3>Location</h3>
                <div className="location__content">
                    {weather.sys?.country} {weather.name}
                </div>
            </section>
            <CardTemp temperature={weather.main?.temp}></CardTemp>
        </article>
    )
}

export default CardsWeather