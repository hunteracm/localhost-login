import React from "react";
import logo from "./DarkLightACMLogo.svg";
import "./App.css";
import CheckIn from "./components/checkIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Calendar from "./components/calendar";

function App() {
  return (
    <Router>
      <nav>
        <div className="navBar">
          <span>
            {/* <img className="logo" src=""/> */}
            <Link to="/">
              <img src={logo} alt="Hunter ACM" className="logoImg" />
            </Link>
          </span>
          <span>
            <Link to="/about" className="navElement">
              About Us
            </Link>
          </span>
          <span>
            <Link to="/calendar" className="navElement">
              Calendar
            </Link>
          </span>
          <span>
            <Link to="/checkIn" className="navElement">
              Check In
            </Link>
          </span>
          <span>
            <Link to="/" className="navElement">
              Home
            </Link>
          </span>
        </div>
      </nav>
      <Switch>
        <Route path="/checkIn">
          <CheckIn />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/">
          {/* Home */}
          <div style={{ textAlign: "center" }} className="content">Home</div>
        </Route>
      </Switch>
      <div className="footer">
        <div className="links">
          <Link className="footerLink" to="/">
            Home
          </Link>
          <Link className="footerLink" to="/about">
            About
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
