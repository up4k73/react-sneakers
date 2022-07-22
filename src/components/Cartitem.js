import React from "react";

export default function Cartitem(props) {
  console.log(props);
  //let id = props.id

  return (
    <div className="cartItem d-flex align-center mb-20">
      <div
        className="cartItemImg"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
          // backgroundImage: `url:${props.img}`,
        }}
      ></div>
      {/* console.log(`url(${props.imageUrl})`); */}
      <div className="mr-20">
        {/* <img src={props.img}></img> */}
        <p className="mb-5">{props.title}</p>
        <b>{props.price} руб.</b>
        <b>ID ==`{props.id}` </b>
        {/* //console.log({props.price}); */}
      </div>
      {console.log(props.id)};
      <img
        onClick={() => props.remove(props.id)}
        className="removeBtn"
        src="/img/btn-remove.svg"
        alt="Remove"
      />
    </div>
  );
}
