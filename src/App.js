import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handler = () => setCounter((prevValue) => prevValue + 1);
  const toggleVisibilityCounter = () => setIsActive((prevValue) => !prevValue);

  const counterComponent = isActive ? <Counter renderCounter={counter} /> : null;

  useEffect(() => {
    alert("Hello");
  }, []);

  return (
    <div>
      <button onClick={toggleVisibilityCounter}>Pokaz/ukryj komponent</button>
      <button onClick={handler}>Przerenderuj komponent</button>
      {counterComponent}
    </div>
  );
};

const Counter = ({ renderCounter }) => {
  const [counter, setCounter] = useState(0);

  const handleMouseMove = (event) => setCounter(event.clientX);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      alert("komponent odmontowany");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [renderCounter]);

  return (
    <div>
      <p>{counter}</p>
      <p>{renderCounter}</p>
    </div>
  );
};

export default App;
