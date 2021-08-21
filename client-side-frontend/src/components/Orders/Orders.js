import React, { useContext, useEffect } from "react";
import { photographyContext } from "../../App";
import OrderCard from "../OrderCard/OrderCard";
import "./Orders.css";

const Orders = () => {
  const { orders, setOrders } = useContext(photographyContext);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/orders`)
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [setOrders]);
  return (
    <div className="orders-section">
      <div className="container">
        <h3 className="orders-section-title">Orders</h3>
        <div className="orders-lists">
          {orders.map((order, index) => (
            <OrderCard key={index} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
