import React, { Component } from "react";
import "./App.css";
import { CardList } from "./card-list/card.list.component"


class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch(`https://api.magicthegathering.io/v1/cards`)
      .then(response => response.json())
      .then(cards => this.setState({cards: cards }))
  }
  

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search cards"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
      </div>
    );
  }
}

export default App;
