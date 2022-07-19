import React from "react";

export default function Header(props) {
  //в пропсы передается функция onClickCart
  return (
    <div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div className="logoText">
            <h3 className="text-uppercase">Aviastar CORPORATION</h3>
            <p>Завод завод эх завод</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30 cu-p">
            <img
              onClick={props.onClickCart}
              width={18}
              height={18}
              src="/img/cart.svg"
              alt=""
            />
            <span onClick={props.onClickCart}>750000 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
    </div>
  );
}
