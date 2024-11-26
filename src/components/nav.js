import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteToken } from "../API/storage";
import UserContext from "../Context/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { setUser } = useContext(UserContext); // Access the setUser function from context
  const navigate = useNavigate(); // For navigating after logout

  const logout = () => {
    // Clear the token from localStorage
    deleteToken();

    // Also remove user data from localStorage (if stored)
    localStorage.removeItem("user");

    // Clear user context (if using context)
    setUser(null);

    // Redirect to the login page
    navigate("/login");
  };
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
        <button className="nav-link-logout" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Nav;
