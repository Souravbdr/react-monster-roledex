import React, { Component } from 'react';
import './App.css';
import { CardList } from './card-list/card-list.component';
import { SearchInput } from './search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch('https://botw-compendium.herokuapp.com/api/v1/category/monsters')
      .then(response => response.json())
      .then(monstersData => this.setState({ monsters: monstersData.data }));
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;

    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monster Roledex</h1>
        <SearchInput placeholder="Search Monster" handleChange={this.handleChange} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
