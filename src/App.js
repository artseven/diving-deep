import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "asfd12", name: "Max", age: 28 },
      { id: "sdfgsdf", name: "Manu", age: 29 },
      { id: "sdfsdfa12", name: "Stephanie", age: 26 },
    ],
    showPersons: false,
  });

  const [usernameState, setUsernameState] = useState({
    username: "artseven",
  });

  const changeUsernameHandler = (newUsername) => {
    console.log("Newusername: ", newUsername);
    setUsernameState({
      username: newUsername,
    });
  };

  const nameChangedHandler = (event, id) => {
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  const deletePersonHandler = (personIndex) => {
    // same result of getting a deep copy instead of pointer
    // const persons = personsState.persons.slice();
    console.log("Removing: ", personsState.persons[personIndex]);
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({
      persons: persons,
    });
  };

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({
      showPersons: !doesShow,
      persons: [...personsState.persons],
    });
  };

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => nameChangedHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
    style.backgroundColor = "red";
  } 
  const classes = [];
  if (personsState.persons.length <= 2) {
    classes.push('red');
  }
  if (personsState.persons.length <= 1) {
    classes.push('bold');
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button style={style} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
  // return React.createElement(
  //   "div",
  //   {className: 'App'},
  //   React.createElement("h1", null, "Does this work now")
  // );
};

export default app;
