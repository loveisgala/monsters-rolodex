import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
        },
        {
          name: 'Frank',
        },
        {
          name: 'Jacky',
        },
        {
          name: 'Andrei',
        },
      ]
    }
  }

  render() {
    let name = this.state.monsters.map((monster) => {
      return <h1>{monster.name}</h1>;
    });

    return (
      <div className="App">
        {name}
      </div>
    );
  }
}

export default App;
