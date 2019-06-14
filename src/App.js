import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Bob', age: 28 },
      { name: 'Bobo', age: 31 },
      { name: 'Stephanie', age: 26 }
    ],
  });

  const [otherState, setOtherState ] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // DONT DO THIS: personsState.persons[0].name = "Borbon";
    setPersonsState( {
      persons: [
        { name: 'Bob', age: 44 },
        { name: 'Bobonda', age: 99 },
        { name: 'Stephanie', age: 29 }
      ]
    });
  };


  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>Its working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobbies: Reading </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;
