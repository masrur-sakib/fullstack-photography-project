import React, { createContext, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import AddServiceForm from "./components/AddServiceForm/AddServiceForm";

export const photographyContext = createContext();

function App() {
  const [registeredUser, setRegisteredUser] = useState(true);
  const [loggedInUserData, setLoggedInUserData] = useState({});
  const [services, setServices] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <photographyContext.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        loggedInUserData,
        setLoggedInUserData,
        services,
        setServices,
        orders,
        setOrders,
        loading,
        setLoading,
      }}
    >
      <Router>
        {/* Header/Navbar Section */}
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/orders">
            {loggedInUserData._id ? <Orders /> : <Redirect to="/login" />}
          </Route>
          <Route path="/service-detail/:serviceId">
            <ServiceDetail />
          </Route>
          <Route exact path="/add-new-service">
            <AddServiceForm />
          </Route>
          <Route path="/checkout/:serviceId">
            {loggedInUserData._id ? <Checkout /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login">
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
