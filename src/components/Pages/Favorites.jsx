/** @format */

import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
export default function Favorites({
  items,
  onAddToFavorite,

  onAddToCard,
}) {
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
        {/* {console.log(items)}; */}
        {items.map((items) => (
          <Card
            key={items.id}
            onPlusClick={(obj) => onAddToCard(obj)}
            favorited={true}
            id={items.id}
            title={items.title}
            price={items.price}
            imageUrl={items.imageUrl}
            onFavorite={onAddToFavorite}
            //{...items}
          />
        ))}
      </div>
    </div>
    // </div>
  );
}
