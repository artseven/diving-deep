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
    otherState: "some other value",
    showPersons: true,
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
    setPersonsState({ showPersons: !doesShow });
  };

  const style = {
    backgroundColor: "white",
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
  } else {
    persons = (
      <div>
        <p>Ooops...we hit the road bump</p>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      {/* <UserInput userName={usernameState.username} changed={(e) => changeUsernameHandler(e.target.value)}/>
      <UserOutput userName={usernameState.username}/>
      <UserOutput userName={usernameState.username}/> */}

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
