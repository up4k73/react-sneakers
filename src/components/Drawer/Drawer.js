import React from "react";
import Cartitem from "../Cartitem";
import styles from "./Drawer.module.scss";

export default function Drawer(props) {
  //Сюда прилетает функция, которая изменяет значение cartOpened
  return (
    <div className="overlay">
      <div className={styles.drawer}>
        <h2 className="mb-40 mr-10 ml-10 d-flex justify-between">
          Корзина{" "}
          <img
            onClick={props.onCloseCart} //здесь применяется функция, которая изменяет значение cartOpened
            className="removeBtn cu-p" //при нажатии на корзину cartOpened изменяется на false
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>
        <h1>{5 + 5}</h1>
        <div className={styles.items}>
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>23321 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>23166 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
