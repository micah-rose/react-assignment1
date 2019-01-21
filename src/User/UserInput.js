import React from "react";

const input = props => {

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "5px solid purple",
    padding: "8px",
    cursor: "pointer",
    fontSize: "20px",
    display: "block",
    width: "20%",
    margin: "auto",
    textAlign: "center"
  };

  return (
    <div className="Input">
      <input style={style} type="text" onChange={props.changed} value={props.userName} />
    </div>
  );
};

export default input;
