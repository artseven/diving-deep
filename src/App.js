import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person  name="Max" age="27" />
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Art" age="28"/>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   {className: 'App'},
    //   React.createElement("h1", null, "Does this work now")
    // );
  }
}

export default App;
