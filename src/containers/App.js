import React, { useState } from "react";
import classes from "./App.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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

  const style = {};

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        <Persons
          persons={personsState.persons}
          clicked={deletePersonHandler}
          changed={nameChangedHandler}
        />
      </div>
    );
    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: "salmon",
      color: "black",
    };
  }

  return (
    <div className={classes.App}>
      <Cockpit title={props.appTitle}onToggle={togglePersonsHandler} persons={personsState.persons} />
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
