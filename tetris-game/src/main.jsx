import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Root from "./Root";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
