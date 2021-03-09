import React, { PureComponent } from "react";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";
import AuthContext from "../../context/auth-context";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] should component update");
    if (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    ) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("[Persons.js] componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return (
      <AuthContext.Consumer>
        {(context) => this.props.persons.map((person, index) => {
          return (
            <ErrorBoundary key={person.id}>
              <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                isAuth={this.props.isAuthenticated}
              />
            </ErrorBoundary>
          );
        })}
      </AuthContext.Consumer>
    );
  }
}

export default Persons;
