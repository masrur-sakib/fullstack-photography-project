import React, { useRef, useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const checkoutRef = useRef(null);

  const userInfoHandler = (e) => {
    e.preventDefault();

    // Send form data to the server
    fetch("http://localhost:5000/orders/addOrder", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.message);
        checkoutRef.current.innerText = data.message;
        setTimeout(() => {
          checkoutRef.current.innerText = "";
        }, 3000);
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
