import React, { useState } from "react";
import "./App.css";

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const handler = () => setCounter(counter + 1);

  return (
    <div onClick={handler}>
      <h1>{counter}</h1>
      <h2>Licznik</h2>
      <p>Lorem ipsum</p>
    </div>
  );
};

export default App;
