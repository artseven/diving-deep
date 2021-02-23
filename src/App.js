import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from './UserOutput/UserOutput';

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  });

  const [usernameState, setUsernameState] = useState({
    username: 'artseven'
  })


  const changeUsernameHandler = (newUsername) => {
    console.log('Newusername: ', newUsername)
    setUsernameState({
      username: newUsername
    })
  }


  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: "Art", age: 25 },
        { name: "Stephanie", age: 29 },
      ]
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <UserInput userName={usernameState.username} changed={(e) => changeUsernameHandler(e.target.value)}/>
      <UserOutput userName={usernameState.username}/>
      <UserOutput userName={usernameState.username}/>

      <p>This is really working!</p>
      <button 
        style={style}
        onClick={() => switchNameHandler("Maximilian!!")}>
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        changed={nameChangedHandler}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, "Max!")}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
      <Person name="Art" age="28" />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   {className: 'App'},
  //   React.createElement("h1", null, "Does this work now")
  // );
};

export default app;
