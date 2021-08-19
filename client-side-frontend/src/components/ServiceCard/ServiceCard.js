import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card-section">
      <img src={service.img} alt="photography-img"></img>
      <div className="service-card-content-section">
        <h3 className="photography-title">{service.title}</h3>
        <p>{service.description}</p>
        <h4>Price: ${service.price}</h4>
        <div className="service-card-buttons-section">
          <Link to={"/service-detail/" + service.id}>View More</Link>
          <Link to="/checkout">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
