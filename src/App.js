import Card from "./components/Card/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import Drawer from "./components/Drawer/Drawer";
import SomethingToTest from "./components/SomethingToTest";
import CommentSection from "./components/CommentSection/CommentSection";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "5600 руб.",
    img: "/img/sneakers/sneak (1).svg",
  },
  {
    title: "Кроссовки Adidas хещельме бещельме",
    price: "7600 руб.",
    img: "/img/sneakers/sneak (2).svg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "5789 руб.",
    img: "/img/sneakers/sneak (3).svg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: "13800 руб.",
    img: "/img/sneakers/sneak(4).svg",
  },
  {
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: "7655 руб.",
    img: "/img/sneakers/sneak (5).svg",
  },
  {
    title: "Кроссовки Goose Concept LeBron XVIII",
    price: "17655 руб.",
    img: "/img/sneakers/sn.webp",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <Search />
        {/* // При помощи метода arr.map из массива вытаскиваются объекты и заменяются на единицу */}
        <div className="d-flex justify-between flex-wrap">
          {arr.map((obj) => (
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
        <SomethingToTest />
      </div>
    </div>
  );
}

export default App;
