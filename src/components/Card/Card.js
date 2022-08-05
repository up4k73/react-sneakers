
import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader"
import AppContext from "../../context";

export default function Card({

  parentId,
  id,
  onPlusClick,
  img,
  price,
  title,
  onFavorite,
  favorited = false,
  isLoading,

}) {

  const obj = { img, price, title, id, parentId: id, }
  const { getAllReadyAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited)

  const onClickPlus = () => {
    onPlusClick(obj);

  };
  // console.log(isAdded);
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
    onFavorite(obj)
  }

  return (
    <div className={styles.card}>
      {


        isLoading ? <ContentLoader
          speed={1}
          width={210}
          height={230}
          viewBox="0 0 210 260"
          backgroundColor="#ffffff"
          foregroundColor="#e6ebf4"

        >
          <rect x="3" y="27" rx="10" ry="10" width="150" height="91" />
          <rect x="3" y="133" rx="3" ry="3" width="150" height="15" />
          <rect x="3" y="152" rx="3" ry="3" width="93" height="15" />
          <rect x="3" y="189" rx="8" ry="8" width="80" height="24" />
          <rect x="118" y="181" rx="8" ry="8" width="32" height="32" />
        </ContentLoader> : <> <div className={styles.favorite}>
          <img
            src={isFavorite ? "/img/likedHeart.svg" : "/img/heart-unliked.svg"}
            alt="Unliked"
            onClick={onClickFavorite}
          ></img>
        </div>
          <img height={135} width='100%' src={img} alt="" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price}</b>
            </div>

            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={getAllReadyAdded(id) ? "img/checkedbutton.svg" : "img/plus.svg"}
              alt="Plus"
            />
          </div></>
      }
    </div>
  );
}
