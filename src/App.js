import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        },
          () => {
            console.log(this.state);
          }));
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((m) => m.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(e) => this.setState({ searchField: e.target.value })} />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}><h1>{monster.name}</h1></div>
          );
        })}
      </div>
    );
  }
}

export default App;
