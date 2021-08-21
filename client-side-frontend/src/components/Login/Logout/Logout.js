import React, { useContext } from "react";
import { photographyContext } from "../../../App";
import "./Logout.css";

const Logout = () => {
  const { loggedInUserData, setLoggedInUserData } =
    useContext(photographyContext);
  return (
    <div className="logout-form">
      {loggedInUserData._id ? (
        <div>
          <h4>You are Logged In.</h4>
          <p>Your Email: {loggedInUserData.email}</p>
          <p>Your Role: {loggedInUserData.role}</p>
          <button
            className="logout-button"
            onClick={() => setLoggedInUserData({})}
          >
            Logout
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Logout;
