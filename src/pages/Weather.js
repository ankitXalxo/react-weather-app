import React, { useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [newCity, setNewCity] = useState("");

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      const data = await response.json();
      return {
        cityName: data.name,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };

  const addTab = async () => {
    const weatherData = await fetchWeather(newCity);
    if (weatherData) {
      const newTab = {
        id: new Date().getTime(),
        ...weatherData,
      };
      setTabs([...tabs, newTab]);
      setActiveTab(newTab.id);
      setNewCity("");
    }
  };

  const deleteTab = (tabId) => {
    const updatedTabs = tabs.filter((tab) => tab.id !== tabId);
    setTabs(updatedTabs);
    if (activeTab === tabId && updatedTabs.length > 0) {
      setActiveTab(updatedTabs[0].id);
    } else if (updatedTabs.length === 0) {
      setActiveTab(null);
    }
  };

  return (
    <div>
      <div className="weather-container">
        <input
          className="search-text"
          type="text"
          placeholder="Enter city name"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
        />
        <button className="weather-btn" onClick={addTab}>
          Search
        </button>
      </div>
      <div>
        <div>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.cityName}
              <button className="cross-btn" onClick={() => deleteTab(tab.id)}>
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`content ${activeTab === tab.id ? "active" : ""}`}
          >
            {activeTab === tab.id && (
              <>
                <h2>{tab.cityName}</h2>
                <div className="temp-data">
                  <p>Min Temp: {tab.minTemp}°C</p>
                  <p>Max Temp: {tab.maxTemp}°C</p>
                  <p>Atmospheric Pressure: {tab.pressure} hPa</p>
                  <p>Humidity: {tab.humidity}%</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
