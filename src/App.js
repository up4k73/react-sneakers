import React from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import Drawer from "./components/Drawer/Drawer";
//import SomethingToTest from "./components/SomethingToTest";
import CommentSection from "./components/CommentSection/CommentSection";
import Overlay from "./components/Overlay/Overlay";
import Favorites from "./components/Pages/Favorites";
import { Link } from "react-router-dom";


function App() {
  const [items, setItems] = React.useState([]); //сюда передаются данные от сервера из axios, далее изменяются items и передаются в компонент <Card />
  const [searchValue, setSearchValue] = React.useState("");
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setcartOpened] = React.useState(false);
  const [favoritesOpened, setFavoritesOpened] = React.useState(false);
  //console.log(cartItems);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  // const clearSearch = () => {
  //   setSearchValue("");
  // };
  const onAddToCard = (obj) => {
    axios.post('https://62d68bb849c87ff2af269c1b.mockapi.io/cart', obj).then(res => setCartItems(prev => [...prev, res.data]))
    console.log(obj);
  };


  const onAddToFavorite = (obj) => {
    setFavorites((prev) => [...prev, obj]);
    axios.post("https://62d68bb849c87ff2af269c1b.mockapi.io/favorites", obj);
    // console.log(obj);
  };

  const onDeleteFromCart = (id) => {
    console.log(id)
    axios.delete(`https://62d68bb849c87ff2af269c1b.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id));
    //setCartItems([...cartItems, id]);

  }
  // const onDeleteFromCart = (obj) => {
  //   setCartItems(cartItems.filter((obj) => obj !== cartItems));
  // };

  //console.log(cartItems);

  //const [isCartOpened, setisCartOpened] = React.useState(false); //закрытие|открытие Overlay, нужно будет подумать, как реализовать по-другому. Повторяющиеся действия.
  React.useEffect(() => {
    axios //умная библиотека, которая сама распознает тип данных (отправляю запрос, потом через стрелочную функцию передаю результат в setItems, который в свою очередь изменяет стейт в items, реакт понимает, что состояние изменилось и рендерит данные, которые пришли от сервера)
      .get("https://62d68bb849c87ff2af269c1b.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://62d68bb849c87ff2af269c1b.mockapi.io/cart")
      .then((res) => {

        setCartItems(res.data);
        // console.log(res.data.id);
      });

  }, []);
  return (
    <div className="wrapper clear">
      {cartOpened ? ( //Если в useState true, тогда рендерить Drawer, если false, тогда ничего не рендерится
        <Drawer

          //id={cartItems.id}

          //В компонент дравер, передается массив CartItems, далее описание в Дравер
          delete={onDeleteFromCart}
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
      {/* <Route path="/test">"Тестовая информация"</Route> */}
      <Header
        onClickFavorites={() => {
          setFavoritesOpened(true);

        }}
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
        {/* <Link to="/testing" exact>Home</Link> */}
        {/* <Switch>
          <Route path="/test">"Тестовая информация"</Route>
        </Switch> */}
        {/* <Link to="/favorites"> фыдлвофыдлво</Link > */}
        <div className="d-flex justify-between flex-wrap">

          {items //после того, как реакт понял, что данные изменились, он рендерит их в указанном объекте <Card
            //далее применяется фильтр, который на вход получает данные (item), приводит их к нижнему регистру
            //далее, все, что включает в себя searchValue, в нижнем регистре передается в Card через метод map
            //searchValue
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
                onFavorite={(obj) => onAddToFavorite(obj)}
              />
            ))}
        </div>
        {/* <CommentSection /> */}
        {/* <SomethingToTest /> */}
      </div>
    </div >
  );
}

export default App;
