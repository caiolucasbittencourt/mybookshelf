import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'swiper/css';
import 'swiper/css/pagination';
import "./globals.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
