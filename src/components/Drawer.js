import React from "react";
import Cartitem from "./Cartitem";

export default function Drawer() {
  return (
    <div style={{ display: "box" }} className="overlay">
      <div className="drawer">
        <h2 className="mb-40 mr-10 ml-10 d-flex justify-between">
          Корзина{" "}
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </h2>
        <h1>{5 + 5}</h1>
        <div className="items">
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
