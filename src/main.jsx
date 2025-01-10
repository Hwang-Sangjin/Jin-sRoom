import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { RecoilRoot } from "recoil";
import About from "./About.jsx";

createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
