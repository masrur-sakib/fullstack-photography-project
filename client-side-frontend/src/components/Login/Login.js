import React, { useContext } from "react";
import { photographyContext } from "../../App";
import "./Login.css";
import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

const Login = () => {
  const { registeredUser, setRegisteredUser } = useContext(photographyContext);

  return (
    <div className="login-section">
      <div className="container">
        {registeredUser ? <LoginForm /> : <RegistrationForm />}
      </div>
    </div>
  );
};

export default Login;
