import React from "react";
import Cartitem from "../Cartitem";
import styles from "./Drawer.module.scss";
import Info from "../Info";
import axios from "axios";
import { useCart } from "../Hooks/useCart";



export default function Drawer(props) {

  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false)

  const opened = props.opened
  const { setCartItems, cartItems, totalPrice } = useCart()
  const [orderId, setOrderId] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)


  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post('https://62d68bb849c87ff2af269c1b.mockapi.io/orders', { items: cartItems })
      setOrderId(data.id)
      setIsOrderCompleted(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        axios.delete(`https://62d68bb849c87ff2af269c1b.mockapi.io/cart/` + item.id)

      }

    } catch (error) {
      alert('Не удалось создать заказ')
    }
    setIsLoading(false)
  }






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
          <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>

        </div>
      </div>)

  } else {
    return (
      <div className="cartTotalBlock">
        <div className={styles.drawer}>

          <Info title={isOrderCompleted ? "Спасибо за заказ" : "Корзина пустая"}
            description={isOrderCompleted ? `Ваш заказ №${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок"}
            image={isOrderCompleted ? "/img/complete-order.svg" : "/img/empty-card.svg"} />
        </div>
      </div >)

  }

  ;
}

