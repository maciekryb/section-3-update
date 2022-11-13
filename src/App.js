import "./App.css";
import React from "react";

const App = () => {
  const [value, setValue] = React.useState("");

  const handleOnChange = (event) => setValue(event.target.value);
  const handleClick = () => setValue("");
  return (
    <>
      <input
        value={value}
        placeholder="wpisz tekst..."
        onChange={handleOnChange}
        type="text"
      />
      <button onClick={handleClick}>Reset</button>
      <h1 className="title">{value.toUpperCase()}</h1>
    </>
  );
};

export default App;
