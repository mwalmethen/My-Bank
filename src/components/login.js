import React from "react";
import { Link } from "react-router-dom";
import { login } from "../API/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
  // Manage username and password state
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
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
        <img className="Nav-logo" src="/bank-nav-logo.jpg" />
        <h3 className="nav-text">Unity vault</h3>
      </div>
      <div className="register-image-div">
        <img className="register-image" src="/credit-card2790.jpg" />
      </div>
      <h2 className="h2">Log in to your account</h2>
      <h4 className="h2">
        if you do not have an account, <Link to="/register">register here</Link>
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
        <div className="register-button-div">
          <button type="submit" className="register-button">
            Log in
          </button>
        </div>
        <div className="forget-pass-div">
          <h3>
            If you forget your password{" "}
            <span style={{ color: "black" }}>click on</span>
          </h3>
          <h3 className="down-emoji">&#128071;</h3>
          <Link className="forget-pass">Forget password?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
