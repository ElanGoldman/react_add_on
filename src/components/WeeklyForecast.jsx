import React from 'react';
import './WeeklyForecast.css';

const WeeklyForecast = ({ forecast }) => (
    <div className="forecast-scroll">
      {forecast.map((day, index) => (
        <div key={index} className="forecast-card">
          <h3>{day.day}</h3>
          <p>{day.condition}</p>
          <p>High: {day.high}°</p>
          <p>Low: {day.low}°</p>
        </div>
      ))}
    </div>
  );

export default WeeklyForecast;
  