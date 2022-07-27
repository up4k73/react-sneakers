import React from "react";
import {
  BrowserRouter,

} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "macro-css";
import App from "./App";



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
