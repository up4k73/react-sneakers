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
  const [cartOpened, setcartOpened] = React.useState(false);
  //const [isCartOpened, setisCartOpened] = React.useState(false); //закрытие|открытие Overlay, нужно будет подумать, как реализовать по-другому. Повторяющиеся действия.
  fetch("https://62d68bb849c87ff2af269c1b.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      setItems(res);
    });
  return (
    <div className="wrapper clear">
      {cartOpened ? ( //Если в useState true, тогда рендерить Drawer, если false, тогда ничего не рендерится
        <Drawer //В Drawer в качестве пропсов передается функция, которая изменяет значение cartOpened
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
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.img}
              onPlusClick={() => console.log("Нажатие на плюс")}
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
