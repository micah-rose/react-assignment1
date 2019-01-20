import React from "react";
//import './UserInput.css';

const input = props => {
  return (
    <div className="Input">
      <input type="text" onChange={props.changed} value={props.userName} />
    </div>
  );
};

export default input;
