/** @format */

import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import AppContext from "../../context";

export default function Orders() {
  const { onAddToFavorite, onAddToCard, items } = React.useContext(AppContext);

  const [isLoading, setisLoading] = React.useState(true);
  const [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://62d68bb849c87ff2af269c1b.mockapi.io/orders"
      );

      setOrders(data.map((obj) => obj.items).flat());
      console.log(data);
      setisLoading(false);
      console.log(data);
    })();
  }, []);

  const onDeleteOrders = (obj) => {
    // orders.find((favObj) => Number(favObj.id) === Number(obj.id));
    setOrders((prev) => prev.filter((item) => items.id !== obj.id));
    axios.delete(`https://62d68bb849c87ff2af269c1b.mockapi.io/orders/${1}`);
    // setOrders((prev) =>
    //   prev.filter((item) => Number(item.id) !== Number(obj.id))
    // );
  };

  return (
    <div className="content p-40">
      {/* <div className="d-flex align-center justify-between mb-40"> */}
      <div className="mb-40 mr-10 ml-20 d-flex align-center justify-between favHeader">
        <h1>Мои заказы</h1>
        <button onClick={onDeleteOrders} className="redButton">
          Очистить историю
        </button>
        <Link to="/">
          <button className="greenButton">На главную</button>
        </Link>
      </div>

      <div className="d-flex justify-between flex-wrap">
        {orders.map((items, index) => (
          <Card
            {...items}
            setisLoading={setisLoading}
            isLoading={isLoading}
            id={items.id}
            key={index}
            // title={item.title}
            price={items.price}
            // imageUrl={item.img}
            // allReadyAdded={getAllReadyAdded(item && items.id)}
            onPlusClick={(obj) => onAddToCard(obj)}
            onFavorite={(obj) => onAddToFavorite(obj)}
          />
        ))}
      </div>
    </div>
    // </div>
  );
}
