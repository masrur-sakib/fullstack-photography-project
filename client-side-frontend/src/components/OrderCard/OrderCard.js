import React, { useContext, useState } from "react";
import { photographyContext } from "../../App";
import "./OrderCard.css";

const OrderCard = (props) => {
  const { loggedInUserData } = useContext(photographyContext);
  const [order, setOrder] = useState(props.order);

  const updateOrderStatus = (e) => {
    const changedStatus = e.target.value.toLowerCase();

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
        setOrder(data);
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
            <div className="update-order-status-section">
              <label htmlFor="update-status-dropdown">Update Status:</label>
              <select
                id="update-status-dropdown"
                name="orderStatus"
                onChange={updateOrderStatus}
                value={order.status}
              >
                <option value="pending">pending</option>
                <option value="inprogress">inprogress</option>
                <option value="done">done</option>
              </select>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
