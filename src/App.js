import "./App.css";
import Register from "./components/register";
import ReactDom from "react-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./components/login";

function App() {
  return (
    // Provide the client to your App
    <Register />
  );
}

export default App;
