import React from "react";
import styles from "./Card.module.scss";

export default function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
  // console.log(isAdded);

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src="/img/heart-unliked.svg"
          alt="Unliked"
          onClick={props.onFavoriteClick}
        ></img>
      </div>
      <img height={112} width={133} src={props.imageUrl} alt="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "img/checkedbutton.svg" : "img/plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}
