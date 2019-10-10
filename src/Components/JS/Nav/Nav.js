import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../CSS/nav.css';

const Nav = () => {
  return (
    <nav className="row navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink exact className="navbar-brand" activeClassName="" to="/">
        Solomon Kim
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <ul className="nav navbar-nav">
          <li>
            <NavLink
              exact
              className="Nav__link tab nav-item nav-link"
              activeClassName="active"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="Nav__link tab nav-item nav-link"
              activeClassName="active"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="Nav__link tab nav-item nav-link"
              activeClassName="active"
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="Nav__link tab nav-item nav-link"
              activeClassName="active"
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="Nav__link tab nav-item nav-link"
              activeClassName="active"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
