// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import fp1 from "../../assets/BRAND-ELEMENTS/fp1.png";
import logo from "../../assets/LOGO/logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar-body">
        <img className="navbar-img" src={logo}></img>

        <div className="navbar-contents">
          <div>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </div>
          <div>
            <Link to="/register" className="nav-link">
              Register Now
            </Link>
          </div>
          <div>
            <Link to="/sports" className="nav-link">
              Sports
            </Link>
          </div>
          <div>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </div>
        </div>
        <div>
          {" "}
          <img source={fp1} className="img"></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
