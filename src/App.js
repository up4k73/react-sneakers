import React from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import Drawer from "./components/Drawer/Drawer";
//import SomethingToTest from "./components/SomethingToTest";
import CommentSection from "./components/CommentSection/CommentSection";
import Overlay from "./components/Overlay/Overlay";

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartItems, setCartItems] = React.useState([]);

  const [cartOpened, setcartOpened] = React.useState(false);
  //console.log(cartItems);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  // const clearSearch = () => {
  //   setSearchValue("");
  // };
  const onAddToCard = (obj) => {
    setCartItems([...cartItems, obj]);
  };
  // const onDeleteFromCart = (obj) => {
  //   setCartItems(cartItems.filter((obj) => obj !== cartItems));
  // };

  //console.log(cartItems);

  //const [isCartOpened, setisCartOpened] = React.useState(false); //закрытие|открытие Overlay, нужно будет подумать, как реализовать по-другому. Повторяющиеся действия.
  React.useEffect(() => {
    axios
      .get("https://62d68bb849c87ff2af269c1b.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
  }, []);
  return (
    <div className="wrapper clear">
      {cartOpened ? ( //Если в useState true, тогда рендерить Drawer, если false, тогда ничего не рендерится
        <Drawer
          //В компонент дравер, передается массив CartItems, далее описание в Дравер
          //delete={onDeleteFromCart}
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
        <Search
          searchValue={searchValue}
          searchEvent={onChangeSearchInput}
          setSearchValue={setSearchValue}
          //clearSearch={clearSearch}
        />

        <div className="d-flex justify-between flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.title}
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
