import React from "react";
import styles from "./Card.module.scss";

export default function Card({
  onFavoriteClick,
  onPlusClick,
  imageUrl,
  price,
  title,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlusClick({ imageUrl, price, title });
    setIsAdded(!isAdded);
  };
  // console.log(isAdded);

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src="/img/heart-unliked.svg"
          alt="Unliked"
          onClick={onFavoriteClick}
        ></img>
      </div>
      <img height={112} width={133} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
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
