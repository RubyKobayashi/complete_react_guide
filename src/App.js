import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bob', age: 28 },
      { name: 'Bobo', age: 31 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = () => {
    // DONT DO THIS: this.state.persons[0].name = "Borbon";
    this.setState( {
      persons: [
        { name: 'Bob', age: 44 },
        { name: 'Bobonda', age: 99 },
        { name: 'Stephanie', age: 29 }
      ]
      })
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>Its working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Reading </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
