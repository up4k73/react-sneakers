import React from "react";
import {

  Routes,
  Route,

} from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import Overlay from "./components/Overlay/Overlay";
import Home from "./components/Pages/Home";
import Favorites from "./components/Pages/Favorites";
import Orders from "./components/Pages/Orders";
import AppContext from "./context";

function App() {
  const [items, setItems] = React.useState([]); //сюда передаются данные от сервера из axios, далее изменяются items и передаются в компонент <Card />
  const [searchValue, setSearchValue] = React.useState("");
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setcartOpened] = React.useState(false);
  const [ordersOpened, setOrdersOpened] = React.useState(false);
  const [favoritesOpened, setFavoritesOpened] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(true);


  const getAllReadyAdded = (id) => {
    console.log(cartItems, 222)
    return cartItems.some(
      (obj) => Number(obj.parentId) === Number(id)
    )
  }


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  // const clearSearch = () => {
  //   setSearchValue("");
  // };
  const onAddToCard = (obj) => {
    (async (item) => {
      if (cartItems.find((item) => Number(obj.id) === Number(item.parentId))) {
        axios.delete(`https://62d68bb849c87ff2af269c1b.mockapi.io/cart/${obj.parentId}`)
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))

      } else {
        axios.post('https://62d68bb849c87ff2af269c1b.mockapi.io/cart', obj)
        setCartItems((prev) => [...prev, obj])
      }

    })()


  }


  const onAddToFavorite = async (obj) => {
    // console.log(obj);
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://62d68bb849c87ff2af269c1b.mockapi.io/favorites/${obj.id}`)
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
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
    axios.delete(`https://62d68bb849c87ff2af269c1b.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));
    //setCartItems([...cartItems, id]);

  }
  const onDeleteFromOrders = (id) => {
    axios.delete(`https://62d68bb849c87ff2af269c1b.mockapi.io/orders/${id}`)
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
    <AppContext.Provider value=
      {{ cartItems, setCartItems, onDeleteFromOrders, onAddToCard, favorites, items, onAddToFavorite, getAllReadyAdded, setcartOpened, setOrdersOpened, }}>

      < div className="wrapper clear" >

        <Header onClickFavorites={() => {
          setFavoritesOpened(true);
        }}
          onClickCart={() => {
            setcartOpened(true);
          }}
          onClickOrders={() => {
            setOrdersOpened(true);
          }} />
        <Routes>
          <Route path="orders" element={<Orders />} >
          </Route >

          <Route path="favorites" element={<Favorites key={favorites.id} />} >
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
          cartOpened ? (
            <div>
              <Drawer

                key={items.id}
                //В компонент дравер, передается массив CartItems, далее описание в Дравер
                delete={onDeleteFromCart}
                itemsForCart={cartItems} //В Drawer в качестве пропсов передается функция, которая изменяет значение cartOpened
                onClose={() => {
                  setcartOpened(false);
                }
                }
              />

              <Overlay
                onOverlay={() => {
                  setcartOpened(false);

                }}
              />
            </div>
          ) : null
        }

        {
          ordersOpened ? (
            <Orders />
          ) : null
        }
      </div >
    </AppContext.Provider>
  );
}

export default App;
