import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import UserProfile from "./components/UserProfile";

class App extends React.Component {
  state = {};

  createUser = state => {

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

  createProfile = state => {
    fetch("https://jinder-backend.herokuapp.com/api/profiles", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        // 'X-User-Email': '',
        // 'X-User-Token': ''

      },
      body:  JSON.stringify({"profile":
        {
          "user_id": 1,
          "first_name": state.firstName,
          "last_name": state.surname,
          "industry": state.industry,
          "skills": state.skills
        }
      })
    });
  }

  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Route exact path= "/" render={(props) => <SignUp {...props} createUser={this.createUser} />} />
            <Route exact path= "/login" render={(props) => <LogIn {...props} createSession={this.createSession} />} />
            <Route exact path= "/profile" render={(props) => <UserProfile {...props} createProfile={this.createProfile} />} />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
