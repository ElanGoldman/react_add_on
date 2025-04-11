import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = ({ weather }) => (
    <div className="weather-details">
      <p>{weather.description}</p>
      <p>{weather.temp}° | {weather.humidity}% Humidity</p>
      <p>Chance of Rain: {weather.rainChance}%</p>
      <p>Storms Expected: {weather.stormTime}</p>
    </div>
  );

export default WeatherDetails;
  