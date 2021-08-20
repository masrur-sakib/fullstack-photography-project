import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="container header-section">
        <div className="header-left-section">
          <a href="/">[ELITE]</a>
        </div>
        <div className="header-right-section">
          <Link to="/">Home</Link>
          <Link to="/#orders">Orders</Link>
          <Link to="/#login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
