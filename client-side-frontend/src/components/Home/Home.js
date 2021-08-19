import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Home Banner Section */}
      <HomeBanner />

      {/* Services Section */}
      <Services />
    </div>
  );
};

export default Home;
