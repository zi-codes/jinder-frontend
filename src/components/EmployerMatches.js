import React from "react";
import axiosClient from "../axiosClient";
import { Card } from "react-bootstrap";

class EmployerMatches extends React.Component {
  state = {
    matches: []
  };
  componentDidMount() {
    let current_employer_id = sessionStorage.getItem("employer_id");
    console.log("current employer id is " + current_employer_id);
    Promise.all([
      axiosClient.get("/employers/" + current_employer_id),
      axiosClient.get("/api/profiles")
    ]).then(response => this.findMatches(response));
  }

  findMatches = response => {
    let current_employer_id = sessionStorage.getItem("employer_id");
    let profileIdsTheyLike = response[0].data.accepted_profiles.map(str =>
      parseInt(str, 10)
    );
    let allProfiles = response[1].data;
    console.log(profileIdsTheyLike);
    console.log(allProfiles);
    let profilesTheyLike = allProfiles.filter(profile =>
      profileIdsTheyLike.includes(profile.id)
    );
    console.log(profilesTheyLike);
    let matches = profilesTheyLike.filter(profile =>
      profile.user.accepted_employers.includes(current_employer_id)
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
          Contact them @ {match.user.email}
        </Card.Body>
      </Card>
    );
  };
  render() {
    return (
      <div>
        <h2>Here are the users you have matched with:</h2>

        <div>{this.state.matches.map(match => this.renderMatch(match))}</div>
      </div>
    );
  }
}

export default EmployerMatches;
