import React from "react";
import Cartitem from "../Cartitem";
import styles from "./Drawer.module.scss";
import Info from "../Info";
import AppContext from "../../context";

export default function Drawer(props) {
  const { cartItems } = React.useContext(AppContext)

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

  if (props.itemsForCart.length > 0) {
    return (
      <div className={styles.drawer}>
        <h2 className="mb-40 mr-10 ml-10 d-flex justify-between">
          Корзина{" "}
          <img
            onClick={props.onClose} //здесь применяется функция, которая изменяет значение cartOpened
            className="removeBtn cu-p" //при нажатии на корзину cartOpened изменяется на false
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>
        <h1>{5 + 5}</h1>
        <div className={styles.items}>

          {props.itemsForCart.map((obj) => (
            <Cartitem
              key={obj.id}
              id={obj.id}

              remove={props.delete}
              title={obj.title}
              imageUrl={obj.img}
              price={obj.price}

            />
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{totalPrice} руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>{(totalPrice / 100 * 5).toFixed(2)} руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>

        </div>
      </div>)

  } else {
    return (
      <div className="cartTotalBlock">
        <div className={styles.drawer}>

          <Info title="Корзина пустая" description="Добавьте хотя бы одну пару кроссовок" image="/img/empty-card.svg" />
        </div>
      </div >)

  }

  ;
}

