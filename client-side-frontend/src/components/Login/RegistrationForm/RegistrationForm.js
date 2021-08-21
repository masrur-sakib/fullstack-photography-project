import React, { useContext, useRef, useState } from "react";
import { photographyContext } from "../../../App";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [registrationInfo, setRegistrationInfo] = useState({
    email: "",
    password: "",
  });
  const { setRegisteredUser } = useContext(photographyContext);
  const registrationRef = useRef(null);

  const registrationHandler = (e) => {
    e.preventDefault();

    // Send form data to the server
    fetch(`${process.env.REACT_APP_BACKEND_API}/login/addPeople`, {
      method: "POST",
      body: JSON.stringify(registrationInfo),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        registrationRef.current.innerText = data.message;
        setTimeout(() => {
          registrationRef.current.innerText = "";
        }, 4000);
      })
      .catch((err) => console.error(err));

    //   Reset the input fields
    setRegistrationInfo({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <div className="registration-form">
        <h3>Register</h3>
        <form id="registration-form" onSubmit={registrationHandler}>
          <input
            type="email"
            id="email"
            value={registrationInfo.email}
            onChange={(e) =>
              setRegistrationInfo({
                ...registrationInfo,
                email: e.target.value,
              })
            }
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            value={registrationInfo.password}
            onChange={(e) =>
              setRegistrationInfo({
                ...registrationInfo,
                password: e.target.value,
              })
            }
            placeholder="Password"
            required
          />
          <input type="submit" value="Register" />
        </form>
        <p className="login-note">
          Already have an account?
          <span onClick={() => setRegisteredUser(true)}>Login</span>
        </p>
        <p className="registration-response-msg" ref={registrationRef}></p>
      </div>
    </div>
  );
};

export default RegistrationForm;
