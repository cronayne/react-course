import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Bill", age: 22},
      { name: "Bob", age: 25},
      { name: "Bat", age: 23}
    ],
    otherperson: "Other Value",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState ({
      persons: [
        { name: newName, age: 22 },
        { name: "Robert", age: 25 },
        { name: "Bat", age: 47 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState ({
      persons: [
        { name: "Bill", age: 22 },
        { name: event.target.value, age: 25 },
        { name: "Bat", age: 47 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map(person => {
              return <Person 
                        name={person.name} 
                        age={person.age} />
            })}
          </div>
      )      
    }
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>      
    );
  }
}

export default App;
