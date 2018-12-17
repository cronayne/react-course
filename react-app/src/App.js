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
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, "Bill")}
                changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
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
