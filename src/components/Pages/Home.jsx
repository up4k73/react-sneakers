/** @format */

import React from "react";
import Search from "../Search";
import Card from "../Card/Card";

export default function Home({
  items,
  cartItems,
  searchValue,
  onAddToCard,
  onAddToFavorite,
  onChangeSearchInput,
  isLoading,
  setisLoading,
  setSearchValue,
}) {
  return (
    <div>
      <div className="content p-40">
        <Search
          searchValue={searchValue}
          searchEvent={onChangeSearchInput}
          setSearchValue={setSearchValue}
        />
        <div className="d-flex justify-between flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                setisLoading={setisLoading}
                isLoading={isLoading}
                id={item.id}
                key={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.img}
                allReadyAdded={cartItems.some(
                  (obj) => Number(obj.id) === Number(item.id)
                )}
                onPlusClick={(obj) => onAddToCard(obj)}
                onFavorite={(obj) => onAddToFavorite(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
