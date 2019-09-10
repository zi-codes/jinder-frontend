import React from "react";

// for routing
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import globalUrl from "./globalUrl";
import PreventDisplay from "./components/PreventDisplay"
import LoginDirection from "./components/LoginDirection"

// for API calls
import axiosClient from "./axiosClient";

// User (candidate) components
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import UserProfile from "./components/UserProfile";
import About from "./components/About";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import DisplayEmployerProfiles from "./components/DisplayEmployerProfiles";
import UserMatches from "./components/UserMatches";

// Employer components
import EmployerSignUp from "./components/EmployerSignUp";
import EmployerLogIn from "./components/EmployerLogin";
import EmployerProfile from "./components/EmployerProfile";
import DisplayCandidateProfiles from "./components/DisplayCandidateProfiles";
import EmployerMatches from "./components/EmployerMatches";



class App extends React.Component {
  state = {
    // to store employer details from sign up page until profile is complete
    fireRedirect: false,
    employerEmail: null,
    employerPassword: null,

    userId: sessionStorage.getItem("user_id"),
    employerId: sessionStorage.getItem("employer_id"),
  };

  // ========================
  // user (candidate) methods
  // =======================

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
    })
      .then(response => response.json())
      .then(data => this.saveUserData(data))
      .catch(error => console.error(error));

  };

  redirect = () => {
    this.setState({ fireRedirect: true }, () => {
    });
      
  }

  saveUserData = data => {
    sessionStorage.setItem("user_id", data.id)
    sessionStorage.setItem("user_email", data.email)
    this.redirect();
  };


  createSession = state => {
    fetch(`${globalUrl}/api/sessions`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          email: state.email,
          password: state.password
      })
    })
      .then(response => response.json())
      .then(data => this.saveUserId(data))
      .catch(error => console.error(error));
  };

  createEmployerSession = state => {
    fetch("https://jinder-backend.herokuapp.com/employers/sign_in", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        employer: {
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
    formData.append("profile[user_id]", sessionStorage.getItem("user_id"));
    formData.append("profile[industry]", state.industry);
    formData.append("profile[skills]", state.skills);
    formData.append("profile[personality]", state.personalityTraits);
    formData.append("profile[user_bio]", state.bio);

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

  // ========================
  // employer methods
  // =======================

  createEmployer = state => {
    sessionStorage.setItem("employer_email", state.email);
    sessionStorage.setItem("employer_password", state.password);
  };

  buildEmployerProfileFormData = state => {
    console.log(state);
    let formData = new FormData();

    formData.append("employer[first_name]", state.firstName);
    formData.append("employer[last_name]", state.surname);
    formData.append("employer[company_nane]", state.companyName);
    formData.append(
      "employer[email]",
      sessionStorage.getItem("employer_email")
    );
    formData.append(
      "employer[password]",
      sessionStorage.getItem("employer_password")
    );
    formData.append("employer[bio]", state.bio);
    formData.append("employer[company_url]", state.companyUrl);

    let images = state.images;
    for (let i = 0; i < images.length; i++) {
      let file = images[i];
      formData.append(
        `employer[employer_images_attributes][${i}][photo]`,
        file,
        file.name
      );
    }

    return formData;
  };

  createEmployerProfile = state => {
    axiosClient
      .post("/employers", this.buildEmployerProfileFormData(state))
      .then(response => this.saveEmployerId(response));
  };

  saveEmployerId = response => {
    sessionStorage.setItem("employer_id", response.data.id);
    this.setState({ employerEmail: null });
    this.setState({ employerPassword: null });
    let attributes = [
      "employer_email",
      "employer_password",
      "employer_first_name",
      "employer_surname",
      "employer_company_name",
      "employer_bio",
      "employer_website"
    ];
    attributes.forEach(attr => sessionStorage.setItem(attr, ""));
    console.log(
      "employer successfully saved with id of " +
        sessionStorage.getItem("employer_id")
    );
  };

  render() {

    const { fireRedirect } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={HomePage} />

          <Route
            exact
            path="/candidate-profiles"
            component={DisplayCandidateProfiles}
          />

          <Route
            exact
            path="/login-direction"
            component={LoginDirection}
          />

          <Route
            exact
            path="/login-or-sign-up"
            component={PreventDisplay}
          />

          <Route
            exact
            path="/employer-profiles"
            component={DisplayEmployerProfiles}
          />

          <Route
            exact
            path="/candidate-sign-up"
            render={props => <SignUp {...props} createUser={this.createUser} />}
          />

          <Route
            exact
            path="/employer-sign-up"
            render={props => (
              <EmployerSignUp {...props} createEmployer={this.createEmployer} />
            )}
          />

          <Route
            exact
            path="/candidate-login"
            render={props => (
              <LogIn {...props} createSession={this.createSession} />
            )}
          />

          <Route
            exact
            path="/employer-login"
            render={props => (
              <EmployerLogIn
                {...props}
                createEmployerSession={this.createEmployerSession}
              />
            )}
          />

          <Route
            exact
            path="/candidate-profile"
            render={props => (
              <UserProfile {...props} createProfile={this.createProfile} userID={this.state.userId} />
            )}
          />
          <Route
            exact
            path="/employer-profile"
            render={props => (
              <EmployerProfile
                {...props}
                createEmployerProfile={this.createEmployerProfile}
              />
            )}
          />

          <Route
            exact
            path="/employer-matches"
            render={props => <EmployerMatches {...props} />}
          />

          <Route
            exact
            path="/candidate-matches"
            render={props => <UserMatches {...props} />}
          />

          {fireRedirect && <Redirect to='/candidate-profile'/> } 

          <Route
            exact
            path="/about"
            render={props => <About {...props} />}
          />

        </BrowserRouter>

      </div>
    );
  }
}

export default App;
