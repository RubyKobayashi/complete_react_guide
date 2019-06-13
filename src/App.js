import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>Its working</p>
        <Person name="Bob" age="29" />
        <Person name="Bobo" age="34"> My hobbies: Reading </Person>
        <Person name="Tron" age="36" />
      </div>
    );
  }
}

export default App;
