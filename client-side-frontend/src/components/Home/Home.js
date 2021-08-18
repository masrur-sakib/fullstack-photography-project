import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Home Banner Section */}
      <div className="home-banner-section">
        <div className="container">
          <p className="banner-tagline-01">
            Welcome to our Photography Website
          </p>
          <p className="banner-tagline-02">
            A good snapshot keeps a moment from running away.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="container">
          <h3 className="services-section-title">Services</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
