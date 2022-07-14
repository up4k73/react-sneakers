import React from "react";

export default function Search() {
  return (
    <div>
      <div className="mb-40 mr-10 ml-20 d-flex align-center justify-between ">
        <h1>Заголовок H1</h1>
        <div className="search-block d-flex">
          <img src="/img/loopa.svg" alt="Search" />
          <input placeholder="Поиск..."></input>
        </div>
      </div>
    </div>
  );
}
