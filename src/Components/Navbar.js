import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Sports <span className="navbar-sign">Add</span>
        </Link>
      </h1>

      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/Registation"} className="navbar-links">
            Registation
          </Link>
        </li>
        <li>
          <Link to={"/Schedule"} className="navbar-links">
          Schedule
          </Link>
        </li>
        <li>
          <Link href="#reviews" className="navbar-links">
            Donner
          </Link>
        </li>
        <li>
          <Link href="#about" className="navbar-links">
            About Us
          </Link>
        </li>
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/Registation">
              Registation
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/Schedule">
            Schedule
            </Link>
          </li>
          <li>
            <Link onClick={openNav} href="#reviews">
              Donner
            </Link>
          </li>
          <li>
            <Link onClick={openNav} href="#about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={openNav} href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
