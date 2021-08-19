import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/service/:serviceId">
            <ServiceDetail />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
