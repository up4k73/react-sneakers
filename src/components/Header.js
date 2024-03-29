import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./Hooks/useCart";



export default function Header(props) {

  const { totalPrice } = useCart()





  //в пропсы передается функция onClickCart
  return (
    <div>
      <header className="d-flex justify-between align-center p-40">
        <Link to='/'>
          <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png" alt="" />
            <div className="logoText">
              <h3 className="text-uppercase">Aviastar CORPORATION</h3>
              <p>Завод завод эх завод</p>
            </div>
          </div>
        </Link>
        <ul className="d-flex">

          <li className="cu-p favoritebutton">
            <Link to="/favorites">
              <img
                onClick={props.onClickFavorites}
                width={18}
                height={18}
                src="/img/favoriteCart.svg"
                alt="Закладки"
              />
            </Link>

          </li>
          <li className="mr-10 cu-p">

            <img
              onClick={props.onClickCart}
              width={18}
              height={18}
              src="/img/cart.svg"
              alt="Корзина"
            />

            <span onClick={props.onClickCart}>{totalPrice} руб.</span>
          </li>
          <Link to="/orders">
            <li>
              <img width={18} height={18} src="/img/user.svg" alt="Orders" />
            </li>
          </Link>
        </ul>
      </header>
    </div>
  );
}
