import React, { Component } from 'react';
import logo from './logo.svg';
import { render } from '@testing-library/react';
import Person from './Person/Person';
import styled from 'styled-components';
import classes from './App.module.css'


const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'darkgreen': 'green'};
      border: 1px solid yellow;
      color: yellow;
      padding: 5px 20px;
      cursor: pointer;
      &:hover {
        background-color: ${props => props.alt? '#F003': 'lightgreen'};
        color: ${props => props.alt? 'red': 'green'};
      }
`;


class App extends Component {

  state = {
    persons: [
      { id: 'id1', name: "Lue", age: 20 },
      { id: 'id2', name: "Joy", age: 30 },
      { id: 'id3', name: "Jacob", age: 25 },
    ],
    showPersons: false
  };


  nameChangeHandler = (event, id) => {

    // can also use find
    const pIndex = this.state.persons.findIndex((p) => p.id == id);

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


    let persons = null;
    let toggleLabel = "Show People";

    if (this.state.showPersons) {

      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return (
              <Person
                key={p.id}
                name={p.name}
                age={p.age}
                onDelete={this.deletePerson.bind(this, index)}
                changed={(event) => this.nameChangeHandler(event, p.id)} />)
          })}
        </div>
      )

    }



    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <h1>My react app</h1>
          <img src={logo} className={classes.AppLogo} alt="logo" />
        </header>
        <div className={classes.AppBody}>
          <StyledButton alt={this.state.showPersons}
            onClick={this.togglePersons}>
            {toggleLabel}
          </StyledButton>
          {persons}
        </div>
        <footer class={classes.AppFooter}>
          <span>(c) {new Date().getFullYear()}</span>
        </footer>

      </div>
    );
  }

}


export default App;
