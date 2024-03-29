import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div className="Header-intern">
        <p>Tuilier Thomas</p>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/projects"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Projects</li>
          </NavLink>

          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li className="black-navlink">Contact</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
