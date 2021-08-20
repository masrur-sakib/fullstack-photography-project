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
  const [services, setServices] = useState([]);
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
