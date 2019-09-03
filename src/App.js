import React from "react";
import SignUp from "./components/SignUp";

class App extends React.Component {
  state = {};

  createUser = state => {
    console.log("now about to post the thing");

    fetch("https://jinder-backend.herokuapp.com/users", {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({"user":
            {
              "email": state.email,
              "password": state.password
            }
          })
  })

}

  render() {
    return (
      <div className="App">
        <SignUp createUser={this.createUser}></SignUp>
      </div>
    );
  }
}

export default App;
