import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css"; // Make sure this CSS file exists in the same folder

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to TV Services</h1>
      <p>Explore our exclusive TV packages worldwide!</p>
      <Link to="/services">
        <button className="explore-btn">Explore Services</button>
      </Link>
    </div>
  );
};

export default HomePage;
