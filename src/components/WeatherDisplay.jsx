import React from "react";

const WeatherDisplay = ({ data, status, error }) => {
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  if (status === "succeeded" && data) {
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    return (
      <div>
        <h2>{data.name}</h2>
        <p>{data.weather[0].description}</p>
        <img src={iconUrl} alt="Weather Icon" />
        <p>Temperature: {data.main.temp}°F</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind Speed: {data.wind.speed} mph</p>
      </div>
    );
  }

  return null;
};

export default WeatherDisplay;
