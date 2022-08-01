/** @format */

import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import AppContext from "../../context.js";

export default function Favorites({ onAddToCard }) {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);
  console.log(favorites);

  return (
    <div className="content p-40">
      {/* <div className="d-flex align-center justify-between mb-40"> */}
      <div className="mb-40 mr-10 ml-20 d-flex align-center justify-between favHeader">
        <h1>Закладки</h1>
        <Link to="/">
          <button className="greenButton">На главную</button>
        </Link>
      </div>

      <div className="d-flex justify-between flex-wrap">
        {favorites.map((item) => (
          <Card
            key={item.id}
            onPlusClick={(obj) => onAddToCard(obj)}
            favorited={true}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            onFavorite={onAddToFavorite}
            //{...items}
          />
        ))}
      </div>
    </div>
    // </div>
  );
}
