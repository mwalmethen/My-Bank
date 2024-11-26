import React from "react";
import { Link } from "react-router-dom";
import { register } from "../API/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useState } from "react";
import img1 from "../Pics/credit-card2790.jpg";
import img2 from "../Pics/bank-nav-logo.jpg";
const Register = () => {
  // Manage username and password state
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      navigate("/home");
    },
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    mutate();
    console.log("Submitted data:", userInfo);
  };

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="main-div">
      <div className="logo-text-main-2">
        <img className="Nav-logo" src={img2} />
        <h3 className="nav-text">Unity vault</h3>
      </div>
      <div className="register-image-div">
        <img className="register-image" src={img1} />
      </div>
      <h2 className="h2">Register your account</h2>
      <h4 className="h2">
        if you do have an account, <Link to="/login">login here</Link>
      </h4>
      <form className="user-data-form" onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="label1-text">Username</label>
          <input
            type="username"
            id="username"
            name="username"
            className="username-bar"
            required
            value={userInfo.username}
            onChange={handleInputChange}
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="label1-text">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={userInfo.password}
            onChange={handleInputChange}
            className="username-bar"
            placeholder="Password"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="image">Upload profile Image</label>
        </div>
        <div className="register-button-div">
          <button type="submit" className="register-button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
