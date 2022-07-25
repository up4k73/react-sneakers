/** @format */

import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
const Favorites = () => {
  return (
    <div className="wrapper clear">
      <Header />
      <div className="content p-40">
        <div className="mb-40 mr-10 ml-20 d-flex align-center justify-between ">
          <h1>Все кроссовки</h1>
          <Link to="/">
            <button className="greenButton">На главную</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
