import React, { useContext, useEffect } from "react";
import { photographyContext } from "../../App";
import AddService from "../AddServiceCard/AddServiceCard";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {
  const { services, setServices } = useContext(photographyContext);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => console.error(err));
  }, [setServices]);
  return (
    <div className="services-section">
      <div className="container">
        <h3 className="services-section-title">Services</h3>
        <div className="services-lists">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
          <AddService />
        </div>
      </div>
    </div>
  );
};

export default Services;
