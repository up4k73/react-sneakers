
import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader"

export default function Card({
  allReadyAdded = false,

  id,
  onPlusClick,
  imageUrl,
  price,
  title,
  onFavorite,
  favorited = false,
  isLoading = false

}) {

  const [isFavorite, setIsFavorite] = React.useState(favorited)
  const [isAdded, setIsAdded] = React.useState(allReadyAdded);
  const onClickPlus = () => {
    onPlusClick({ imageUrl, price, title, id });
    setIsAdded(!isAdded);
  };
  // console.log(isAdded);
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
    onFavorite({ id, imageUrl, price, title })
  }

  return (
    <div className={styles.card}>
      {
        isLoading ? <ContentLoader
          speed={1}
          width={210}
          height={260}
          viewBox="0 0 210 260"
          backgroundColor="#ffffff"
          foregroundColor="#e6ebf4"

        >
          <rect x="30" y="37" rx="10" ry="10" width="150" height="91" />
          <rect x="30" y="143" rx="3" ry="3" width="150" height="15" />
          <rect x="30" y="162" rx="3" ry="3" width="93" height="15" />
          <rect x="30" y="199" rx="8" ry="8" width="80" height="24" />
          <rect x="148" y="191" rx="8" ry="8" width="32" height="32" />
        </ContentLoader> : <> <div className={styles.favorite}>
          <img
            src={isFavorite ? "/img/likedHeart.svg" : "/img/heart-unliked.svg"}
            alt="Unliked"
            onClick={onClickFavorite}
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
          </div></>
      }
    </div>
  );
}
