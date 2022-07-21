import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import Drawer from "./components/Drawer/Drawer";
//import SomethingToTest from "./components/SomethingToTest";
import CommentSection from "./components/CommentSection/CommentSection";
import Overlay from "./components/Overlay/Overlay";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setcartOpened] = React.useState(false);
  console.log(cartItems);

  const onAddToCard = (obj) => {
    setCartItems([...cartItems, obj]);
  };
  //console.log(cartItems);

  //const [isCartOpened, setisCartOpened] = React.useState(false); //закрытие|открытие Overlay, нужно будет подумать, как реализовать по-другому. Повторяющиеся действия.
  React.useEffect(() => {
    fetch("https://62d68bb849c87ff2af269c1b.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItems(res);
      });
  }, []);
  return (
    <div className="wrapper clear">
      {cartOpened ? ( //Если в useState true, тогда рендерить Drawer, если false, тогда ничего не рендерится
        <Drawer //В компонент дравер, передается массив CartItems, далее описание в Дравер
          itemsForCart={cartItems} //В Drawer в качестве пропсов передается функция, которая изменяет значение cartOpened
          onClose={() => {
            setcartOpened(false);
            //setisCartOpened(false);
          }}
        />
      ) : null}
      {cartOpened ? (
        <Overlay
          onOverlay={() => {
            setcartOpened(false);
            //setisCartOpened(false);
          }}
        />
      ) : null}
      <Header
        onClickCart={() => {
          setcartOpened(true);
          //setisCartOpened(true);
        }}
      />
      <div className="content p-40">
        <Search />

        <div className="d-flex justify-between flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.img}
              onPlusClick={(obj) => onAddToCard(obj)}
              onFavoriteClick={() => console.log("Нажатие на Favorite")}
            />
          ))}
        </div>
        <CommentSection />
        {/* <SomethingToTest /> */}
      </div>
    </div>
  );
}

export default App;
