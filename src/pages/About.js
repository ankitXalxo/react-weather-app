import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-div">
      <div>About Us</div>
      <div>
        CheckWeather provides Temperature (unit:degree Celcius), Minimum
        Temperature (unit:degree Celcius),Maximum Temperature (unit:degree
        Celcius) ,Atmospheric Pressure (unit:hectoPascal) and Humidity
        (unit:percentage) of any city of all around the world.Climatic change
        has become a global concern over the last few decades. Besides, these
        climatic changes affect life on the earth in various ways. These
        climatic changes are having various impacts on the ecosystem and
        ecology. Due to these changes, a number of species of plants and animals
        have gone extinct.Disclaimer: CheckWeather uses Weather API from
        OpenWeatherMap (https://openweathermap.org/).All the data comes from the
        API and we take no responsibilty for the data.
      </div>
    </div>
  );
};

export default About;
