import React, { useContext, useEffect } from "react";
import { photographyContext } from "../../App";
import Loading from "../Loading/Loading";
import OrderCard from "../OrderCard/OrderCard";
import "./Orders.css";

const Orders = () => {
  const { orders, setOrders, loggedInUserData, setLoading } =
    useContext(photographyContext);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/orders`)
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [setOrders, setLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="orders-section">
      <div className="container">
        <h3 className="orders-section-title">Orders</h3>
        <div className="orders-loading-section">
          <Loading />
        </div>
        <div className="orders-lists">
          {orders.map((order, index) =>
            order.email === loggedInUserData.email ? (
              <OrderCard key={index} order={order} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
