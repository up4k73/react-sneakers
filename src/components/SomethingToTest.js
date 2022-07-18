import React from "react";

export default function SomethingToTest() {
  const [count, setCount] = React.useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="wrapper clear">
      <center>
        {" "}
        <h1>{count}</h1>
        <div>
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
        </div>
      </center>
    </div>
  );
}
