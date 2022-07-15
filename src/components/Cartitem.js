import React from "react";

export default function Cartitem() {
  return (
    <div className="cartItem d-flex align-center mb-20">
      <div
        className="cartItemImg"
        style={{
          backgroundImage: "url(/img/sneakers/sn.webp)",
        }}
      ></div>
      <div className="mr-20">
        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
        <b>8 499 руб.</b>
      </div>
      <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
    </div>
  );
}
