import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import Drawer from "./components/Drawer";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12999 руб.",
  },
  {
    name: "Кроссовки adidas",
    price: "18999 руб.",
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: "20999 руб.",
  },
  {
    name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: "28999 руб.",
  },
  {
    name: "Мужские Кроссовки Nike LeBron XVIII",
    price: "38999 руб.",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <Search />
        <div className="d-flex justify-center flex-wrap">
          {arr.map(
            (
              val // При помощи метода arr.map из массива вытаскиваются объекты и заменяются на единицу
            ) => (
              <b>1</b>
            )
          )}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
