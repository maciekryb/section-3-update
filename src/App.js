import "./App.css";
import React from "react";

const Addsign = () => {
  const [text, setText] = React.useState("");

  const handleOnClick = () => setText(`${text}a`);

  return (
    <>
      <button onClick={handleOnClick}>Dodaj "A"</button>
      <h1>{text}</h1>
    </>
  );
};

export default Addsign;
