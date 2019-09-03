import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

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
    });
  };

  createSession = state => {
    console.log("now about to post the thing");

    fetch("https://jinder-backend.herokuapp.com/api/sessions", {
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
    });
  };

  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Route exact path= "/" render={(props) => <SignUp {...props} createUser={this.createUser} />} />
            <Route exact path= "/login" render={(props) => <LogIn {...props} createSession={this.createSession} />} />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
