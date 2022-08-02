/** @format */

import React from "react";
import AppContext from "../context";
import styles from "./Drawer/Drawer.module.scss";

const Info = ({ title, description, image }) => {
  const { setcartOpened } = React.useContext(AppContext);

  return (
    <div className={styles.drawer}>
      <h2 className="mb-40 mr-10 ml-10 d-flex justify-between">
        Корзина{" "}
        <img
          onClick={() => setcartOpened(false)} //здесь применяется функция, которая изменяет значение cartOpened
          className="removeBtn cu-p" //при нажатии на корзину cartOpened изменяется на false
          src="/img/btn-remove.svg"
          alt="Close"
        />
      </h2>

      <div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img
          className="mb-20"
          width="120px"
          height="120px"
          src={image}
          alt="Empty"
        />

        <h2>{title}</h2>
        <p className="opacity-6">{description}</p>
        <button
          onClick={() => setcartOpened(false)}
          className="greenEmptyButton greenButton"
        >
          Вернуться назад
          <img src="/img/arrow.svg" alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Info;
