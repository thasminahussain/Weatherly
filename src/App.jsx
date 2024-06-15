import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&unit=imperial`
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      setWeatherData(data);
      setStatus("succeeded");
    } catch (error) {
      setError(error.message);
      setStatus("failed");
    }
  };

  return (
    <div className="container">
      <h1>Weatherly</h1>
      <SearchBar fetchWeather={fetchWeather} />
      <WeatherDisplay data={weatherData} status={status} error={error} />
    </div>
  );
};

export default App;
