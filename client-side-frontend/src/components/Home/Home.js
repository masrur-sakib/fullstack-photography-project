import React, { useEffect } from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
