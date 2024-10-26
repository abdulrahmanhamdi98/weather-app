import React, { useState } from 'react';
import './Weather.css';

const Weather = ({ apiKey }) => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        setError('');
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            );
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="weather-container">
            <h2>Weather App</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={fetchWeather}>Search</button>
            </div>
            {error && <p className="error">{error}</p>}
            {weatherData && (
                <div className="weather-info">
                    <h3>{weatherData.name}, {weatherData.sys.country}</h3>
                    <p>Temperature: {weatherData.main.temp} °C</p>
                    <p>Condition: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
