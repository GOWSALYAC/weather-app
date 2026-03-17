import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

 const getWeather = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=YOUR_API_KEY&units=metric"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data); 

      if (data.cod === 200) {
        setWeather(data.main.temp);
      } else {
        setWeather("Error: " + data.message);
      }
    });
};

  return (
    <div className="app">
      <div className="card">
        <h2>🌦 Weather App</h2>

        <input
          type="text"
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>Search</button>

        <h3>{weather && `Temperature: ${weather} °C`}</h3>
      </div>
    </div>
  );
}

export default App;