import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddServiceForm.css";

const AddServiceForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
    price: "",
  });
  const history = useHistory();

  const formDataHandler = (e) => {
    e.preventDefault();

    // Send form data to the server
    fetch(`${process.env.REACT_APP_BACKEND_API}/services/addService`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        history.push("/");
      })
      .catch((err) => console.error(err));

    //   Reset the input fields
    setFormData({
      title: "",
      description: "",
      img: "",
      price: "",
    });
  };
  return (
    <div className="add-service-form-section">
      <div className="container">
        <div className="add-service-form">
          <h3>Add New Service</h3>
          <form id="add-service-form" onSubmit={formDataHandler}>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Service Title"
              required
            />
            <input
              type="text"
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Service Description"
              required
            />
            <input
              type="text"
              id="img"
              value={formData.img}
              onChange={(e) =>
                setFormData({ ...formData, img: e.target.value })
              }
              placeholder="Service Image Online Link"
              required
            />
            <input
              type="number"
              id="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              placeholder="Service Price"
              required
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServiceForm;
