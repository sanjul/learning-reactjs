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

  nameChangeHandler = (event) => {
    const newState = {...this.state};
    newState.persons[2].name = event.target.value;

    this.setState(newState);

  }


  render() {

    // properties can also be snake case, just quote it
    // for example 'background-color' is valid
    const buttonStyle = {
      backgroundColor: 'green',
      border : '1px solid yellow',
      color : 'yellow',
      padding: '5px 20px',
      cursor: 'pointer'
    };


    return (
      <div className="App">
        <header className="App-header">

          <button style={buttonStyle}
            onClick={this.switchNameHandler.bind(this, 'Batman')}>Click me</button>

          <Person onClick={() => this.switchNameHandler('Superman')}
            name={this.state.persons[0].name} />
          <Person name={this.state.persons[1].name} />
          <Person changed={this.nameChangeHandler} name={this.state.persons[2].name} />

          <h1>My react app</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }

}


export default App;
