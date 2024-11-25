import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav-container">
      <div className="logo-text-nav">
        <img className="Nav-logo" src="/bank-nav-logo.jpg" />
        <h3 className="nav-text">Unity vault</h3>
      </div>
      <div className="Nav-home-product">
        <h2>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "orange",
              };
            }}
            to="/home"
          >
            Home
          </NavLink>
        </h2>

        <h2>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "orange",
              };
            }}
            to="/transactions"
          >
            Transactions
          </NavLink>
        </h2>
        <h2>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "orange",
              };
            }}
            to="/users"
          >
            Users
          </NavLink>
        </h2>
        <h2>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "orange",
              };
            }}
            to="/profile"
          >
            Profile
          </NavLink>
        </h2>
        <Link className="nav-link-logout" to="/register">
          <button className="logout-button">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
