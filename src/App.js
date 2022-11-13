import React, { useState } from "react";
import "./App.css";

const App = (props) => {
  const [state, setState] = useState({ a: 0, b: 10 });
  // const [info, setInfo] = useState("nie łączymy w jeden state");
  const handler = () => setState({ ...state, a: state.a + 1 });

  return (
    <div onClick={handler}>
      <h1>{state.a}</h1>
      <h2>{state.b}</h2>
      <p>Lorem ipsum</p>
    </div>
  );
};

export default App;
