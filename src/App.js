import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import { render } from '@testing-library/react';
import person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'id1', name: "Lue", child: 2 },
      { id: 'id2', name: "Joy" },
      { id: 'id3', name: "Jacob" },
    ],
    showPersons: false
  };


  nameChangeHandler = (event, id) => {

    // can also use find
    const pIndex = this.state.persons.findIndex((p) => p.id == id);
    
    // using spread operator to clone the person object
    // we can also use following to clone
    // newobj = Object.assign({}, orig)
    const person = {...this.state.persons[pIndex]};
    person.name = event.target.value;

    // clone the array
    const persons = [...this.state.persons];
    persons[pIndex] = person;

    // this will merge with old state
    this.setState({persons:persons});

  }

  togglePersons = () => {
    // remember, setState() merges properties
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }


  render() {

    // properties can also be snake case, just quote it
    // for example 'background-color' is valid
    const buttonStyle = {
      backgroundColor: 'green',
      border: '1px solid yellow',
      color: 'yellow',
      padding: '5px 20px',
      cursor: 'pointer'
    };

    let persons = null;
    let toggleLabel = "Show People";

    if (this.state.showPersons) {

      toggleLabel = "Hide people";

      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return (
              <Person
                key={person.id}
                name={p.name}
                onDelete={this.deletePerson.bind(this, index)}
                changed={(event) => this.nameChangeHandler(event,p.id)} />)
          })}
        </div>
      )

      // persons = (
      //   <div>
      //     <Person onClick={() => this.switchNameHandler('Superman')}
      //       name={this.state.persons[0].name} />
      //     <Person name={this.state.persons[1].name} />
      //     <Person changed={this.nameChangeHandler} name={this.state.persons[2].name} />
      //   </div>

      // )
    }



    return (
      <div className="App">
        <header className="App-header">

          <button style={buttonStyle}
            onClick={this.togglePersons}>
            {toggleLabel}
          </button>
          {persons}
          <h1>My react app</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }

}


export default App;
