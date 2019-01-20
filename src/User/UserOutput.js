import React from "react";
import './UserOutput.css';

const output = props => {
  return (
    <div className="Output">
      <p onClick={props.click}>{props.userName}</p>
    </div>
  );
};

export default output;
