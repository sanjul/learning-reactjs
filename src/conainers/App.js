import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';
import Cockpit from './Cockpit/Cockpit';
import DisplayToggle from '../components/DisplayToggle/DisplayToggle';




class App extends Component {

  state = {
    persons: [
      { id: 'id1', name: "Lue", age: 20 },
      { id: 'id2', name: "Joy", age: 30 },
      { id: 'id3', name: "Jacob", age: 25 },
    ]
  };


  nameChangeHandler = (event, id) => {

    // can also use find
    const pIndex = this.state.persons.findIndex((p) => p.id === id);

    // using spread operator to clone the person object
    // we can also use following to clone
    // newobj = Object.assign({}, orig)
    const person = { ...this.state.persons[pIndex] };
    person.name = event.target.value;

    // clone the array
    const persons = [...this.state.persons];
    persons[pIndex] = person;

    // this will merge with old state
    this.setState({ persons: persons });

  }


  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }


  render() {
    return (
      <div className={classes.App}>
        <Cockpit>
          <DisplayToggle objname="Persons">
            <Persons persons={this.state.persons}
              onDelete={this.deletePerson}
              onChange={this.nameChangeHandler} />
          </DisplayToggle>

        </Cockpit>
      </div>
    );
  }

}


export default App;
