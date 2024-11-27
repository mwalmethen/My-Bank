// src/api/auth.js
import instance from ".";
import { setToken } from "./storage";

const register = async (formData) => {
  const data = await instance.post("/mini-project/api/auth/register", formData);
  // setToken("token", data.token);
  localStorage.setItem("token", data.token);
  console.log("register data", data);
  return data;
};
const login = async (formData) => {
  const data = await instance.post("/mini-project/api/auth/login", formData);
  if (data.token) {
    localStorage.setItem("token", data.token);
  }
  console.log("login data", data);

  // Ensure to return the user data
  return data.user; // Assuming the API response contains the user object
};
const deposit = async (amount) => {
  const data = await instance.put("/mini-project/api/transactions/deposit", {
    amount,
  });
  console.log("deposit data", data);
  return data;
};
const withdraw = async (amount) => {
  const data = await instance.put("/mini-project/api/transactions/withdraw", {
    amount,
  });
  console.log("withdraw data", data);
  return data;
};

const getProfile = async () => {
  const response = await instance.get("/mini-project/api/auth/me");
  return response;
};

async function getAllUsers() {
  const response = await instance.get("/mini-project/api/auth/users");
  console.log(response);
  return response;
}
const getTransactions = async () => {
  try {
    const data = await instance.get("/mini-project/api/transactions/my");
    return data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error; // Rethrow to handle it in the component
  }
};

export {
  register,
  login,
  deposit,
  withdraw,
  getAllUsers,
  getProfile,
  getTransactions,
};
