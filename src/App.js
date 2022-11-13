import './App.css';
import React from 'react';

const App = () => {
  const [items] = React.useState({
    items1: 'ogorki',
    items2: 'sok',
    items3: 'cos do picia',
  });

  return (
    <>
      <h1>Lista zakupow</h1>
      <ul>
        <ItemList name={items.items1} examplge={2 + 2} />
        <ItemList name={items.items2} />
        <ItemList name={items.items3} />
      </ul>
    </>
  );
};

const ItemList = ({ name, examplge }) => (
  <li>
    {name} - {examplge}
  </li>
);

export default App;
