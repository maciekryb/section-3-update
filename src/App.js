import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    items1: 'ogorki',
    items2: 'sok',
    items3: 'cos do picia',
  };

  render() {
    return (
      <>
        <h1>Lista zakupow</h1>
        <ul>
          <ItemList name={this.state.items1} examplge={2 + 2} />
          <ItemList name={this.state.items2} />
          <ItemList name={this.state.items3} />
        </ul>
      </>
    );
  }
}

class ItemList extends React.Component {
  render() {
    return (
      <li>
        {this.props.name} - {this.props.examplge}
      </li>
    );
  }
}

export default App;
