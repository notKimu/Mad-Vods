import { Routes, BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import './styles/globals.css'
import MainPage from "./App";
import Vod from "./Vod";
import About from "./About";
import NotFound from "./NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/vod" element={<Vod />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
