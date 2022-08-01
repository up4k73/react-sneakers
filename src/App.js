import React from "react";
import {

  Routes,
  Route,

} from "react-router-dom";
import axios from "axios";
//import Card from "./components/Card/Card";
import Header from "./components/Header";
//import Search from "./components/Search";
import Drawer from "./components/Drawer/Drawer";
//import SomethingToTest from "./components/SomethingToTest";
//import CommentSection from "./components/CommentSection/CommentSection";
import Overlay from "./components/Overlay/Overlay";
//import Favorites from "./components/Pages/Favorites";
//import { Link } from "react-router-dom";
import Home from "./components/Pages/Home";
import Favorites from "./components/Pages/Favorites";


function App() {
  const [items, setItems] = React.useState([]); //сюда передаются данные от сервера из axios, далее изменяются items и передаются в компонент <Card />
  const [searchValue, setSearchValue] = React.useState("");
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setcartOpened] = React.useState(false);
  const [favoritesOpened, setFavoritesOpened] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(true);
  //console.log(cartItems);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  // const clearSearch = () => {
  //   setSearchValue("");
  // };
  const onAddToCard = (obj) => {

    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post('https://62d68bb849c87ff2af269c1b.mockapi.io/cart', obj)
      setCartItems((prev) => [...prev, obj])
      // axios.post('https://62d68bb849c87ff2af269c1b.mockapi.io/cart', obj).then(res => setCartItems(prev => [...prev, res.data]))
      // console.log(obj);
    }
  }


  const onAddToFavorite = async (obj) => {
    // console.log(obj);
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://62d68bb849c87ff2af269c1b.mockapi.io/favorites/${obj.id}`)
        // setFavorites((prev) => prev.filter((item) => item.id !== obj.id))
      } else {
        const { data } = await axios.post(`https://62d68bb849c87ff2af269c1b.mockapi.io/favorites/`, obj);
        setFavorites((prev) => [...prev, data]);
      }

    }
    catch (error) {
      console.log("Не удалось добавить в Избранное")
    }

  }



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
    async function fetchData() {

      setisLoading(true)
      const itemsResponse = await axios  //умная библиотека, которая сама распознает тип данных (отправляю запрос, потом через стрелочную функцию передаю результат в setItems, который в свою очередь изменяет стейт в items, реакт понимает, что состояние изменилось и рендерит данные, которые пришли от сервера)
        .get("https://62d68bb849c87ff2af269c1b.mockapi.io/items")

      const favResponse = await axios
        .get("https://62d68bb849c87ff2af269c1b.mockapi.io/favorites")

      const cartResponse = await axios
        .get("https://62d68bb849c87ff2af269c1b.mockapi.io/cart")

      setisLoading(false)

      setCartItems(cartResponse.data);

      setFavorites(favResponse.data);

      setItems(itemsResponse.data);

    }
    fetchData()

  }, []);
  return (

    <div className="wrapper clear">

      <Header onClickFavorites={() => {
        setFavoritesOpened(true);
      }}
        onClickCart={() => {
          setcartOpened(true);
        }} />
      <Routes>

        <Route path="favorites" element={<Favorites key={favorites.id} onAddToCard={onAddToCard} items={favorites} onAddToFavorite={onAddToFavorite} />} >
        </Route >


        <Route path="/" element={<Home

          setisLoading={setisLoading}
          isLoading={isLoading}
          onChangeSearchInput={onChangeSearchInput}
          cartItems={cartItems}
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onAddToCard={onAddToCard}
          onAddToFavorite={onAddToFavorite}
          favoritesOpened={favoritesOpened}
          favorites={favorites} />} > </Route >


      </Routes >

      {
        cartOpened ? ( //Если в useState true, тогда рендерить Drawer, если false, тогда ничего не рендерится
          <Drawer


            //id={cartItems.id}
            key={items.id}
            //В компонент дравер, передается массив CartItems, далее описание в Дравер
            delete={onDeleteFromCart}
            itemsForCart={cartItems} //В Drawer в качестве пропсов передается функция, которая изменяет значение cartOpened
            onClose={() => {
              setcartOpened(false);
            }
              //setisCartOpened(false);

            }
          />
        ) : null
      }
      {
        cartOpened ? (
          <Overlay
            onOverlay={() => {
              setcartOpened(false);

            }}
          />
        ) : null
      }
    </div >
  );
}

export default App;
