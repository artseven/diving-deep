import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <label>UserInput</label>
      <p></p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default UserInput;
