import React from "react";
import Cartitem from "../Cartitem";
import styles from "./Drawer.module.scss";

export default function Drawer(props) {
  console.log(props);
  // const itemsForCartSrv = (obj) => {
  //   axios.get()
  // }
  // //console.log(props);
  // const onRemoveFromCartClick = () => {
  //   console.log("asd");
  // };
  //console.log(props);
  //const [cartItems, setCartItems] = React.useState([]);

  // const onAddToCard = (obj) => {
  //   setCartItems([...cartItems, obj]);
  // };
  //console.log(cartItems);
  //Сюда прилетает функция, которая изменяет значение cartOpened
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
            id={obj.id}
            key={obj.title}
            remove={props.delete}
            title={obj.title}
            imageUrl={obj.imageUrl}
            price={obj.price}

          />
        ))}
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
  );
}
