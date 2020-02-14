import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CheckIn from "./components/checkIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <div className="navBar">
          <span>
            {/* <img className="logo" src=""/> */}
            <Link to="/" className="logo">
              Hunter ACM Chapter
            </Link>
          </span>
          <span>
            <Link to="/" className="navElement">
              Home
            </Link>
          </span>
          <span>
            <Link to="/checkIn" className="navElement">
              Check In
            </Link>
          </span>
          <span>
            <Link to="/calendar" className="navElement">
              Calendar
            </Link>
          </span>
          <span>
            <Link to="/calendar" className="navElement">
              About Us
            </Link>
          </span>
        </div>
      </nav>
      <Switch>
        <Route path="/checkIn">
          <CheckIn />
        </Route>
        <Route path="/calendar">{/* Calendar */}</Route>
        <Route path="/">
          {/* Home */}
          <div style={{ textAlign: "center" }}>Home</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
