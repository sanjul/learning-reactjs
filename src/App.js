import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import { render } from '@testing-library/react';

class App extends Component {

  state = {
    persons: [
      { name: "Lue", child: 2 },
      { name: "Boo" },
      { name: "Jacob" }
    ]
  };

  switchNameHandler = (newName) => {

    const newstate = { ...this.state };
    newstate.persons[0].name = newName;

    this.setState(newstate);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <button onClick={this.switchNameHandler.bind(this, 'Batman')}>Click me</button>

          <Person onClick={() => this.switchNameHandler('Superman')}
            name={this.state.persons[0].name} />
          <Person name={this.state.persons[1].name} />
          <Person name={this.state.persons[2].name} />

          <h1>My react app</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }

}


export default App;
