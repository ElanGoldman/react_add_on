import React from 'react';
import './WeatherWheel.css';

const segments = [
  'Sunny',
  'Rainy',
  'Snowy',
  'Cloudy',
  'Partly Cloudy',
  'Stormy',
  'Windy',
  'Foggy',
];

const colors = [
    '#FFD700', // Sunny - gold
    '#00BFFF', // Rainy - deep sky blue
    '#ADD8E6', // Snowy - light blue
    '#A9A9A9', // Cloudy - dark gray
    '#B0C4DE', // Partly Cloudy - light steel blue
    '#800080', // Stormy - purple
    '#40E0D0', // Windy - turquoise
    '#708090', // Foggy - slate gray
  ];

const WeatherWheel = () => {
  const numSegments = segments.length;
  const angle = 360 / numSegments;

  return (
    <div className="wheel-container">
      <div className="wheel">
        {segments.map((segment, i) => (
          <div
            key={i}
            className="segment"
            style={{
              transform: `rotate(${i * angle}deg)`,
              clipPath: `polygon(0% 100%, 100% 0, 100% 100%)`,
              backgroundColor: colors[i % colors.length]
            }}
          >
            <span
              className="label"
              style={{
                transform: `rotate(${angle *3}deg) translateY(-90%)`,
              }}
            >
              {segment}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWheel;
