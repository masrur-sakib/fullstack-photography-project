import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import "./Checkout.css";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const { serviceId } = useParams();
  const [selectedService, setSelectedService] = useState(null);
  const checkoutRef = useRef(null);

  const userInfoHandler = (e) => {
    e.preventDefault();

    // Send form data to the server
    fetch(`${process.env.REACT_APP_BACKEND_API}/orders/addOrder`, {
      method: "POST",
      body: JSON.stringify({ ...userInfo, serviceInfo: selectedService }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        checkoutRef.current.innerText = data.message;
        setTimeout(() => {
          checkoutRef.current.innerText = "";
        }, 4000);
      })
      .catch((err) => console.error(err));

    //   Reset the input fields
    setUserInfo({
      name: "",
      email: "",
      address: "",
      phone: "",
    });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/services/${serviceId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedService(data[0]);
      })
      .catch((err) => console.error(err));
  }, [serviceId, setSelectedService]);

  return (
    <div className="add-order-form-section">
      <div className="container">
        <div className="add-order-form">
          <h3>Fill the Form to Place Order</h3>
          <form id="add-order-form" onSubmit={userInfoHandler}>
            <input
              type="text"
              id="name"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
              placeholder="Name"
              required
            />
            <input
              type="email"
              id="email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              placeholder="Email"
              required
            />
            <input
              type="text"
              id="address"
              value={userInfo.address}
              onChange={(e) =>
                setUserInfo({ ...userInfo, address: e.target.value })
              }
              placeholder="Address"
              required
            />
            <input
              type="text"
              id="phone"
              value={userInfo.phone}
              onChange={(e) =>
                setUserInfo({ ...userInfo, phone: e.target.value })
              }
              placeholder="Phone Number"
              required
            />
            <input type="submit" value="Submit" />
          </form>
          <p className="checkout-response-msg" ref={checkoutRef}></p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
