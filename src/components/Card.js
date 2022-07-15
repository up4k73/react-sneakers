import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked"></img>
      </div>
      <img height={112} width={133} src={props.imageUrl} alt="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Стоимость:</span>
          <b>{props.price}</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
