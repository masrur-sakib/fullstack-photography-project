import React from "react";
import { Link } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import "./AddServiceCard.css";

const AddServiceCard = () => {
  return (
    <Link to="/add-new-service">
      <div className="add-service-card-section">
        <div>
          <GrAddCircle className="add-service-icon" />
          <p>Add New Service</p>
        </div>
      </div>
    </Link>
  );
};

export default AddServiceCard;
