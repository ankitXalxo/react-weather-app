import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="left-con">
        <div>WELCOME TO CHECKWEATHER.COM</div>
        <div>Get The Latest Weather Updates Of Any City</div>
        <Link className="hero-btn" to="/weather">
          Check Now!
        </Link>
      </div>
      <div className="righ-con">
        <img src="Images/hero-img.svg" alt="hero img" />
      </div>
    </div>
  );
};

export default Home;
