import React, { useContext, useEffect } from "react";
import { photographyContext } from "../../App";
import "./Login.css";
import LoginForm from "./LoginForm/LoginForm";
import Logout from "./Logout/Logout";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

const Login = () => {
  const { registeredUser, loggedInUserData } = useContext(photographyContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="login-section">
      <div className="container">
        {loggedInUserData._id ? (
          <Logout />
        ) : registeredUser ? (
          <LoginForm />
        ) : (
          <RegistrationForm />
        )}
      </div>
    </div>
  );
};

export default Login;
