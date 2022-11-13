import './App.css';
import React from 'react';

class Addsign extends React.Component {
  state = {
    text: 'a',
  };

  handleAdd = () => {
    const letter = 'a';
    this.setState({
      text: this.state.text + letter,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleAdd}>Dodaj a</button>
        <br />
        {this.state.text}
      </>
    );
  }
}

export default Addsign;
