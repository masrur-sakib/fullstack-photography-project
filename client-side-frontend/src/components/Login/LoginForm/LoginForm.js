import React, { useContext, useRef, useState } from "react";
import { photographyContext } from "../../../App";

import "./LoginForm.css";

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const { setLoggedInUserData, setRegisteredUser } =
    useContext(photographyContext);
  const loginRef = useRef(null);

  const loginHandler = (e) => {
    e.preventDefault();

    // Login
    fetch(`${process.env.REACT_APP_BACKEND_API}/login`, {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoggedInUserData(data.userData);
        // loginRef.current.innerText = data.message;
        // setTimeout(() => {
        //   loginRef.current.innerText = "";
        // }, 4000);
      })
      .catch((err) => console.error(err));

    // Reset the input fields
    setLoginInfo({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <div className="login-form" onSubmit={loginHandler}>
        <h3>Login</h3>
        <form id="login-form">
          <input
            type="email"
            id="email"
            value={loginInfo.email}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            placeholder="Password"
            required
          />
          <input type="submit" value="Submit" />
        </form>
        <p className="login-note">
          Don't have an account?{" "}
          <span onClick={() => setRegisteredUser(false)}>Register</span>
        </p>
        <p className="login-response-msg" ref={loginRef}></p>
      </div>
    </div>
  );
};

export default LoginForm;
