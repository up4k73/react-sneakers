/** @format */

import React from "react";
import Search from "../Search";
import Card from "../Card/Card";

export default function Home({
  items,
  searchValue,
  onAddToCard,
  onAddToFavorite,
  onChangeSearchInput,
}) {
  return (
    <div>
      <div className="content p-40">
        <Search
          searchValue={searchValue}
          searchEvent={onChangeSearchInput}
          //   setSearchValue={setSearchValue}
          //clearSearch={clearSearch}
        />
        {/* <Link to="/testing" exact>Home</Link> */}
        {/* <Switch>
      <Route path="/test">"Тестовая информация"</Route>
    </Switch> */}
        {/* <Link to="/favorites"> фыдлвофыдлво</Link > */}
        <div className="d-flex justify-between flex-wrap">
          {items //после того, как реакт понял, что данные изменились, он рендерит их в указанном объекте <Card
            //далее применяется фильтр, который на вход получает данные (item), приводит их к нижнему регистру
            //далее, все, что включает в себя searchValue, в нижнем регистре передается в Card через метод map
            //searchValue
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                id={item.id}
                key={item.key}
                title={item.title}
                price={item.price}
                imageUrl={item.img}
                onPlusClick={(obj) => onAddToCard(obj)}
                onFavorite={(obj) => onAddToFavorite(obj)}
              />
            ))}
        </div>
        {/* <CommentSection /> */}
        {/* <SomethingToTest /> */}
      </div>
    </div>
  );
}
