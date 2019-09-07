import React from "react";

// for routing
import { BrowserRouter, Route } from "react-router-dom";

// for API calls
import axiosClient from "./axiosClient";

// User (candidate) components
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import UserProfile from "./components/UserProfile";

// Employer components
import EmployerProfile from "./components/EmployerProfile";
import DisplayProfiles from "./components/DisplayProfiles";

import Header from "./components/Header";
import globalUrl from "./globalUrl";

class App extends React.Component {
  state = {};

  // user (candidate) methods

  createUser = state => {
    fetch(`${globalUrl}/users`, {
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
    fetch(`${globalUrl}/api/sessions`, {
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

  buildUserProfileFormData = state => {
    let formData = new FormData();
    formData.append("profile[first_name]", state.firstName);
    formData.append("profile[last_name]", state.surname);
    formData.append("profile[user_id]", 1);
    formData.append("profile[industry]", state.industry);
    formData.append("profile[skills]", state.skills);

    let images = state.images;
    for (let i = 0; i < images.length; i++) {
      let file = images[i];
      formData.append(
        `profile[images_attributes][${i}][photo]`,
        file,
        file.name
      );
    }

    return formData;
  };

  createProfile = state => {
    axiosClient.post("/api/profiles", this.buildUserProfileFormData(state));
  };

  // employer methods

  buildEmployerProfileFormData = state => {
    let formData = new FormData();
    formData.append("employer[first_name]", state.firstName);
    formData.append("employer[last_name]", state.surname);
    formData.append("employer[user_id]", 1);
    formData.append("employer[email]", state.email);
    formData.append("employer[bio]", state.bio);
    formData.append("employer[company_url]", state.companyUrl);

    let images = state.images;
    for (let i = 0; i < images.length; i++) {
      let file = images[i];
      formData.append(
        `employer[images_attributes][${i}][photo]`,
        file,
        file.name
      );
    }

    return formData;
  };

  createEmployerProfile = state => {
    axiosClient.post(
      "/api/employers",
      this.buildEmployerProfileFormData(state),
      {
        headers: {
          "X-User-Token": "uBEf4-XyHQmyGRkK3hyu",
          "X-User-Email": "123456@123456"
        }
      }
    );
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route exact path="/profiles" component={DisplayProfiles} />
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
          <Route
            exact
            path="/profile"
            render={props => (
              <UserProfile {...props} createProfile={this.createProfile} />
            )}
          />
          <Route
            exact
            path="/employer_profile"
            render={props => (
              <EmployerProfile
                {...props}
                createProfile={this.createEmployerProfile}
              />
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
