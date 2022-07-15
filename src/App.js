import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import Drawer from "./components/Drawer";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "5600 руб.",
    img: "/img/sneakers/sneak (1).svg",
  },
  {
    name: "Кроссовки Adidas хещельме бещельме",
    price: "7600 руб.",
    img: "/img/sneakers/sneak (2).svg",
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: "5789 руб.",
    img: "/img/sneakers/sneak (3).svg",
  },
  {
    name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: "13800 руб.",
    img: "/img/sneakers/sneak(4).svg",
  },
  {
    name: "Мужские Кроссовки Nike LeBron XVIII",
    price: "7655 руб.",
    img: "/img/sneakers/sneak (5).svg",
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
            <Card title={obj.name} price={obj.price} imageUrl={obj.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
