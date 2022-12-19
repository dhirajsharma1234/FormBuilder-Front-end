import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
// import Contact from "../Contact";

const Navbar = () => {
  return (
    <header className="outer_container">
      <div className="title">
        <h4>FORM BUILDER</h4>
      </div>
      <nav className="inner_container">
        <ul>
          <div className="element">
            <li>
              <Link to="/register">register</Link>
            </li>
          </div>
          <div className="element">
            <li>
              <Link to="/login">login</Link>
            </li>
          </div>
          <div className="element">
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </div>
          <div className="element">
            <li>
              <Link to="/about">about</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
