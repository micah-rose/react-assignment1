import React, { Component } from "react";
import "./App.css";
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";

class App extends Component {
  state = {
    userName: "Lucas"
  };

  userNameChangeHandler = event => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {

    return (
      <div className="App">
        <UserOutput userName={this.state.userName} />
        <UserInput
          userName={this.state.userName}
          changed={this.userNameChangeHandler}
        />
      </div>
    );
  }
}

export default App;
