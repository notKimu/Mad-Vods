import { Routes, BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import './styles/globals.css'
import MainPage from "./App";
import Vod from "./Vod";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route
        exact
        path="/"
        element={<MainPage title="MAD VODS" />}
      />
      <Route path="/vod" element={<Vod/>} />
    </Routes>
  </BrowserRouter>
);
