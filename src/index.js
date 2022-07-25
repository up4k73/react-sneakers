import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "macro-css";
import App from "./App";
import Favorites from "./components/Pages/Favorites";

import CommentSection from "./components/CommentSection/CommentSection";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/comments" element={<CommentSection />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
