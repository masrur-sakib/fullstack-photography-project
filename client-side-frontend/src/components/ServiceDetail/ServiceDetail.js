import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { photographyContext } from "../../App";
import Loading from "../Loading/Loading";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [selectedService, setSelectedService] = useState(null);
  const { setLoading } = useContext(photographyContext);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/services/${serviceId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedService(data[0]);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [serviceId, setSelectedService, setLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="service-detail-section">
      <div className="container">
        <h3 className="service-detail-section-title">Service Detail:</h3>
        <div className="serviceDetail-loading-section">
          <Loading />
        </div>
        {selectedService ? (
          <div>
            <div className="service-detail-img-section">
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
