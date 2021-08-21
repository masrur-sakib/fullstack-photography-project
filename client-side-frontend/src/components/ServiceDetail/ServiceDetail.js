import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/services/${serviceId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedService(data[0]);
      })
      .catch((err) => console.error(err));
  }, [serviceId, setSelectedService]);

  return (
    <div className="service-details-section">
      <div className="container">
        {selectedService ? (
          <div>
            <div className="service-details-img-section">
              <img src={selectedService.img} alt="service-detail-img"></img>
            </div>
            <p>
              <strong> {selectedService.title} </strong>Detail:
            </p>
            <p>{selectedService.description} </p>
            <p>
              Package Price: <strong> ${selectedService.price}</strong>{" "}
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
