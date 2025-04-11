import React from "react";
import WeatherWheel from "./components/WeatherWheel.jsx";
import WeatherDetails from "./components/WeatherDetails.jsx";
import WeeklyForecast from "./components/WeeklyForecast.jsx";

const mockForecast = [
  { day: "Tuesday", condition: "Sunny", high: 50, low: 34 },
  { day: "Wednesday", condition: "Rainy", high: 50, low: 37 },
  { day: "Thursday", condition: "Snowy", high: 20, low: -5 },
  { day: "Friday", condition: "Cloudy", high: 45, low: 20 },
];

function App() {
  const todayWeather = {
    description: "Cloudy 53°",
    temp : 53,
    humidity: 72,
    rainChance: 45,
    stormTime: "12am",
  };

  return (
    <div className="App">
      <h1>Mon, Feb 3 9:04</h1>
      <WeatherWheel />
      <WeatherDetails weather={todayWeather} />
      <WeeklyForecast forecast={mockForecast} />
    </div>
  );
}

export default App;
