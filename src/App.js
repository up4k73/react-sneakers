import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="wrapper clear">
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <h2 className="mb-40 mr-10 ml-10 d-flex justify-between">
            Корзина{" "}
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </h2>
          <h1>{5 + 5}</h1>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                className="cartItemImg"
                style={{
                  backgroundImage: "url(/img/sneakers/sn.webp)",
                }}
              ></div>
              <div className="mr-30">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>8 499 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                className="cartItemImg"
                style={{
                  backgroundImage: "url(/img/sneakers/sn.webp)",
                }}
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>8 499 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div
                className="cartItemImg"
                style={{
                  backgroundImage: "url(/img/sneakers/sn.webp)",
                }}
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>8 499 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>23321 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>23166 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ
              <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
      <Header />
      <div className="content p-40">
        <Search />
        <div className="d-flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
