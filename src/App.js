import "./App.css";
import React from "react";

const ADDITION = "addition";
const RESET = "reset";
const SUBTRACTION = "subtraction";

const App = (props) => {
  const [count, setCount] = React.useState(0);
  const [result, setResult] = React.useState(props.result);

  const handleMathClick = (type, number = 1) => {
    if (type === SUBTRACTION) {
      setCount(count + 1);
      setResult(result - number);
    } else if (type === "reset") {
      setCount(count + 1);
      setResult(0);
    } else {
      setCount(count + 1);
      setResult(result + number);
    }
  };

  return (
    <>
      <MathButton name="-10" number={10} type={SUBTRACTION} click={handleMathClick} />
      <MathButton name="-1" number={1} type={SUBTRACTION} click={handleMathClick} />
      <MathButton name="Reset" type={RESET} click={handleMathClick} />
      <MathButton name="1" number={1} type={ADDITION} click={handleMathClick} />
      <MathButton name="10" number={10} type={ADDITION} click={handleMathClick} />
      <ResultPanel count={count} result={result} />
    </>
  );
};

const MathButton = ({ click, name, number, type }) => {
  const handleOnClick = () => click(type, number);
  return (
    <>
      <button onClick={handleOnClick}>{name}</button>
    </>
  );
};

const ResultPanel = ({ count, result }) => {
  const addionalInformation = count > 10 ? <span>Przeciązenie procesora</span> : null;
  return (
    <>
      <h1>
        Liczba klknięć: {count}
        {addionalInformation}
      </h1>
      <h2>Wynik: {result}</h2>
    </>
  );
};

export default App;
