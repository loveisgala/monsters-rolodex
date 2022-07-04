import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        firstName: 'Gala',
        lastName: 'Koza',
      },
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.firstName} {this.state.name.lastName}
          </p>
          <button onClick={() => {
            this.setState(() => {
              return { name: { firstName: 'Galu', lastName: 'Test' } }
            },
              () => {
                return console.log(this.state)
              });
            console.log(this.state)
          }}>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
