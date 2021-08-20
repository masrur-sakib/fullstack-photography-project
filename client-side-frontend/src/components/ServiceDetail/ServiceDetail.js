import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { photographyContext } from "../../App";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { services } = useContext(photographyContext);
  const currentService = services.find((service) => service._id === serviceId);

  return (
    <div className="service-details-section">
      <div className="container">
        <div className="service-details-img-section">
          <img src={currentService.img} alt="service-detail-img"></img>
        </div>
        <p>
          <strong> {currentService.title} </strong>Detail:
        </p>
        <p>{currentService.description} </p>
        <p>
          Package Price: <strong> ${currentService.price}</strong>{" "}
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default ServiceDetail;
