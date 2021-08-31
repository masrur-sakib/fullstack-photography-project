import React, { useContext, useRef } from "react";
import { photographyContext } from "../../App";
import "./OrderCard.css";

const OrderCard = ({ order }) => {
  const { loggedInUserData } = useContext(photographyContext);
  const updateStatusRef = useRef(null);

  const changeOrderStatus = (e) => {
    const changedStatus = e.target.innerText.toLowerCase();

    // Login
    fetch(`${process.env.REACT_APP_BACKEND_API}/orders/updateOrderStatus`, {
      method: "PATCH",
      body: JSON.stringify({
        id: order._id,
        status: changedStatus,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        updateStatusRef.current.innerText = data.message;
        setTimeout(() => {
          updateStatusRef.current.innerText = "";
        }, 2000);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="order-card-section">
      <div className="order-card-content-section">
        <p className="order-id">
          Order Id: <strong>{order._id}</strong>
        </p>
        <div className="ordered-service-info-section">
          <h5 className="ordered-service-title">Ordered Service Info:</h5>
          <p>Service Name: {order.serviceInfo.title}</p>
          <p>Service Price: ${order.serviceInfo.price}</p>
        </div>
        <div className="shipping-info-section">
          <h5 className="shipping-info-title">Order Info:</h5>
          <p>Name: {order.name}</p>
          <p>Email: {order.email}</p>
          <p>Address: {order.address}</p>
          <p>Phone: {order.phone}</p>
        </div>
        <div className="order-status-section">
          <h5 className="shipping-info-title">Order Status:</h5>
          <p className="order-status">
            Order Status:{" "}
            <strong className="order-current-status">{order.status}</strong>
          </p>
          {loggedInUserData.role === "admin" ? (
            <div>
              <p>Change Order Status to:</p>
              <div className="order-status-update-buttons-section">
                <button onClick={changeOrderStatus}>inprogress</button>
                <button onClick={changeOrderStatus}>done</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="update-status-response-msg" ref={updateStatusRef}></p>
      </div>
    </div>
  );
};

export default OrderCard;
