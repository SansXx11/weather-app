// WeatherCard.jsx
import React, { useState } from 'react';
import '../styles/WeatherCard.css';

const WeatherCard = ({ weather, temp }) => {
    const [isCelcius, setIsCelcius] = useState(true);

    const ChangeTemperature = () => {
        setIsCelcius(!isCelcius);
    };

    const celcius = temp?.celcius;
    const fanhrenheit = temp?.fanhrenheit;

    return (
        <article className='weather'>
            <h1 className='weather__title'>Weather App </h1>
            <h2 className='weather__country'>{weather?.name}, {weather?.sys.country}</h2>
            <section className='weather__body'>
                <header className='weather__img'>
                <img className="weather__icon" src={'https://openweathermap.org/img/wn/10d@4x.png'} alt="" />
                </header>
                <article className='weather__condition'>
                    <h3 className='weather__description'>{weather?.weather[0].description}</h3>
                    <ul className='weather__list'>
                        <li className='weather__item'><span className='weather__label'>Wind speed </span><span className='weather_value'>{weather?.wind.speed}m/s</span></li>
                        <li className='weather__item'><span className='weather__label'>Clouds</span><span className='weather_value'>{weather?.clouds.all}%</span></li>
                        <li className='weather__item'><span className='weather__label'>Pressure</span><span className='weather_value'>{weather?.main.pressure}hPa</span></li>
                    </ul>
                </article>
            </section>
                                    <section className='weather__principal'>
                    <h2 className='weather__temp'>
                        {isCelcius ? `${temp?.celcius}°C` : `${temp?.fanhrenheit}°  F`}
                    </h2>
            </section>

            <footer className='weather__footer'>
                <button className="wether__button" onClick={ChangeTemperature}>Change to F° / C°</button>
            </footer>
        </article>
    );
};

export default WeatherCard;
