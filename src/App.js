import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import UserProfile from "./components/UserProfile";
import DisplayProfiles from "./components/DisplayProfiles";

class App extends React.Component {
  state = {};

  createUser = state => {
    fetch("https://jinder-backend.herokuapp.com/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email: state.email,
          password: state.password
        }
      })
    });
  };

  createSession = state => {
    fetch("https://jinder-backend.herokuapp.com/api/sessions", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email: state.email,
          password: state.password
        }
      })
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={props => <SignUp {...props} createUser={this.createUser} />}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <LogIn {...props} createSession={this.createSession} />
            )}
          />
          <Route exact path="/profiles" component={DisplayProfiles} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
