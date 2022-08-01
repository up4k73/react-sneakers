import React from "react";

export default function Search(props) {
  // console.log(props);
  return (
    <div>
      <div className="mb-40 mr-10 ml-20 d-flex align-center justify-between ">
        <h1>
          {props.searchValue
            ? `Поиск по запросу: "${props.searchValue}"`
            : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/loopa.svg" alt="Search" />
          {props.searchValue && (
            <img
              onClick={() => props.setSearchValue("")}
              className="Close"
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          )}
          <input
            onChange={props.searchEvent}
            value={props.searchValue}
            placeholder="Поиск..."
          ></input>
        </div>
      </div>
    </div>
  );
}
