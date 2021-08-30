import React, { useContext, useEffect } from "react";
import { photographyContext } from "../../App";
import AddService from "../AddServiceCard/AddServiceCard";
import Loading from "../Loading/Loading";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {
  const { services, setServices, loggedInUserData, setLoading } =
    useContext(photographyContext);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/services`)
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [setServices, setLoading]);
  return (
    <div className="services-section">
      <div className="container">
        <h3 className="services-section-title">Services</h3>
        <div className="services-loading-section">
          <Loading />
        </div>
        <div className="services-lists">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
          {loggedInUserData.role === "admin" ? <AddService /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Services;
