import React from "react";
import axiosClient from "../axiosClient";
import { Card } from "react-bootstrap";

class UserMatches extends React.Component {
  state = {
    matches: []
  };
  componentDidMount() {
    let current_user_id = sessionStorage.getItem("user_id");
    console.log("current user id is " + current_user_id);
    Promise.all([
      axiosClient.get("/users/" + current_user_id),
      axiosClient.get("/employers")
    ]).then(response => this.findMatches(response));
  }

  findMatches = response => {
    let current_user_id = sessionStorage.getItem("user_id");
    let employerIdsTheyLike = response[0].data.accepted_employers.map(str =>
      parseInt(str, 10)
    );
    let allEmployers = response[1].data;
    console.log(employerIdsTheyLike);
    console.log(allEmployers);
    let employersTheyLike = allEmployers.filter(employer =>
      employerIdsTheyLike.includes(employer.id)
    );
    console.log(employersTheyLike);
    let matches = employersTheyLike.filter(employer =>
      employer.accepted_profiles.includes(current_user_id)
    );
    console.log(matches);
    this.setState({ matches: matches });
  };

  renderMatch = match => {
    return (
      <Card key={match.id}>
        <Card.Body>
          <Card.Title>
            {match.first_name} {match.last_name}
          </Card.Title>
          Contact them @ {match.email}
        </Card.Body>
      </Card>
    );
  };
  render() {
    return (
      <div>
        <h2>Here are the Employers you have matched with:</h2>

        <div>{this.state.matches.map(match => this.renderMatch(match))}</div>
      </div>
    );
  }
}

export default UserMatches;
