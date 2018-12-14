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
    otherperson: "Other Value"
  }

  switchNameHandler = () => {
    this.setState ({
      persons: [
        { name: "William", age: 22},
        { name: "Bob", age: 25},
        { name: "Bat", age: 47}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>      
    );
  }
}

export default App;
