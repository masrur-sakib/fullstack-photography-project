import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [currentService, setCurrentService] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentService(data[0]);
      })
      .catch((err) => console.error(err));
  }, [serviceId, setCurrentService]);

  return (
    <div className="service-details-section">
      <div className="container">
        {currentService ? (
          <div>
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
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
