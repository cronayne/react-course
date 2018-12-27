import React, { Component } from 'react';
import appStyles from './App.css';
import Person from "./Person/Person";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      {id: 'dfdsvfv', name: "Bill", age: 22},
      {id: 'vsdsvds', name: "Bob", age: 25},
      {id: 'erefdvs', name: "Bat", age: 23}
    ],
    otherperson: "Other Value",
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ( {persons: persons} )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let btnClass = '';

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                  <Person   
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}                
                    changed={(event) => this.nameChangedHandler(event, person.id)} /></ErrorBoundary>
            })}
          </div>
      );

      btnClass = appStyles.Red;
    };

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push( appStyles.red );
    }
    if (this.state.persons.length <= 1) {
      classes.push( appStyles.bold );
    }

    return (
        <div className={appStyles.App}>
          <h1>Hi I'm a React App</h1>
          <p className={classes.join(' ')}>This is working</p>
          <button
            className = {btnClass} 
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div> 
    );
  }
}

export default App;
