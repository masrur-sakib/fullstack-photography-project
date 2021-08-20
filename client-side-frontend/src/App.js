import React, { createContext, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import AddServiceForm from "./components/AddServiceForm/AddServiceForm";

export const photographyContext = createContext();

function App() {
  const [services, setServices] = useState([
    {
      id: 1,
      img: "https://i.ibb.co/bNn1CZy/family-photography.jpg",
      title: "Family Photography",
      description: "3 Photographer, 300 Copies Photograph, 3 Hour Contract.",
      price: "300",
    },
    {
      id: 2,
      img: "https://i.ibb.co/Rh20pn4/wedding-photography.jpg",
      title: "Wedding Photography",
      description: "4 Photographer, 400 Copies Photograph, 4 Hour Contract.",
      price: "400",
    },
    {
      id: 3,
      img: "https://i.ibb.co/0sJwNjD/corporate-photography.jpg",
      title: "Corporate Photography",
      description: "5 Photographer, 500 Copies Photograph, 5 Hour Contract.",
      price: "500",
    },
  ]);
  return (
    <photographyContext.Provider value={{ services, setServices }}>
      <Router>
        {/* Header/Navbar Section */}
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/service-detail/:serviceId">
            <ServiceDetail />
          </Route>
          <Route path="/add-new-service">
            <AddServiceForm />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {/* Footer Section */}
        <Footer />
      </Router>
    </photographyContext.Provider>
  );
}

export default App;
