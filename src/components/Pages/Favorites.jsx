/** @format */

import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
export default function Favorites({ items }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Закладки</h1>
        <Link to="/">
          <button className="greenButton">На главную</button>
        </Link>
      </div>

      <div className="d-flex flex-wrap">
        {console.log(items)};
        {items.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            // onPlusClick={(obj) => onAddToCard(obj)}
            // onFavorite={(obj) => onAddToFavorite(obj)}
          />
        ))}
      </div>
    </div>
  );
}
