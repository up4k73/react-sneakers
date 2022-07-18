import React from "react";
import styles from "./Card.module.scss";

console.log(styles);

export default function Card(props) {
  console.log(props);

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked"></img>
      </div>
      <img height={112} width={133} src={props.imageUrl} alt="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img width={11} height={11} src="img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
