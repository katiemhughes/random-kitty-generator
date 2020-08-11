import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    kitty: null,
  }

  handleFetch = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => this.setState({ kitty: data[0] }))
  };

  render () {
    const { kitty } = this.state
    return (
      <div className="App">
        <h1>Random Kitty Generator</h1>
        {kitty && <img src={kitty.url} />}
        <button onClick={this.handleFetch}>Next picture</button>
      </div>
    )
  }

}

const Kitty = ({ kitty }) => (
  <div>
    <h3>{kitty.value}</h3>
  </div>
)

export default App;
