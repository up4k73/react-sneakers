import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "macro-css";
import App from "./App";
import Favorites from "./components/Pages/Favorites";

import CommentSection from "./components/CommentSection/CommentSection";
import Header from "./components/Header";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <BrowserRouter>
      <App />
      {/* <Routes>
        <Route path="*" element={<App />} /> */}



      {/* </Routes> */}
    </BrowserRouter>
  </React.StrictMode >
);
