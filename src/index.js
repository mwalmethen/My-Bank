import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Correct import
import reportWebVitals from "./reportWebVitals";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home";
import Transactions from "./components/transactions";
import Users from "./components/users";
import Profile from "./components/profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./Context/userContext";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Register />,
      </div>
    ),
  },

  {
    path: "/login",
    element: (
      <div>
        <Login />,
      </div>
    ),
  },

  {
    path: "/home",
    element: (
      <div>
        <Home />,
      </div>
    ),
  },
  {
    path: "/transactions",
    element: (
      <div>
        <Transactions />,
      </div>
    ),
  },
  {
    path: "/users",
    element: (
      <div>
        <Users />,
      </div>
    ),
  },
  {
    path: "/profile",
    element: (
      <div>
        <Profile />,
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
