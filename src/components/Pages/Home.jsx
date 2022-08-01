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
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(10)] : filteredItems).map((item, index) => (
      <Card
        {...item}
        setisLoading={setisLoading}
        isLoading={isLoading}
        //id={item.id}
        key={index}
        // title={item.title}
        //price={item.price}
        //imageUrl={item.img}
        // allReadyAdded={getAllReadyAdded(item && items.id)}
        onPlusClick={(obj) => onAddToCard(obj)}
        onFavorite={(obj) => onAddToFavorite(obj)}
      />
    ));
  };

  return (
    <div>
      <div className="content p-40">
        <Search
          searchValue={searchValue}
          searchEvent={onChangeSearchInput}
          setSearchValue={setSearchValue}
        />
        <div className="d-flex justify-between flex-wrap">{renderItems()}</div>
      </div>
    </div>
  );
}
