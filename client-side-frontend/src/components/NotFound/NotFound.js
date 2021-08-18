import React from "react";
import NotFoundImg from "../../images/notFound.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <img src={NotFoundImg} alt="not-found-img" />
    </div>
  );
};

export default NotFound;
