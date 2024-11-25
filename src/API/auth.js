// src/api/auth.js
import instance from ".";
import { setToken } from "./storage";

const register = async (formData) => {
  const data = await instance.post("/mini-project/api/auth/register", formData);
  setToken("token", data.token);
  console.log("register data", data);
  return data;
};
const login = async (formData) => {
  const data = await instance.post("/mini-project/api/auth/login", formData);
  if (data.token) {
    setToken("token", data.token);
  }
  console.log("login data", data);
  return data;
};

export { register, login };
