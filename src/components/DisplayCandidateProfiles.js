import React from "react";
import axiosClient from "../axiosClient";
import SwipeCard from "./SwipeCard";
import { Card, Container, Row, Button } from "react-bootstrap";
import Swipeable from "react-swipy";
import DefaultPicture from "./default.jpeg";
import Filter from "./Filter";
import globalUrl from "../globalUrl";
import {
  appStyles,
  imgStyle,
  wrapperStyles,
  actionsStyles
} from "./swipeStyling";

class DisplayCandidateProfiles extends React.Component {
  state = {
    originalProfiles: [],
    profiles: [] //filtered profiles
  };

  componentDidMount = () => {
    axiosClient.get("/api/profiles").then(response => {
      this.setState({ profiles: response.data.reverse() });
      this.setState({ originalProfiles: response.data.reverse() });
    });
  };

  handleSwipe = dir => {
    console.log(dir);
    console.log(
      "handling swipe for employer with id " +
        sessionStorage.getItem("employer_id")
    );
    if (dir === "left") {
      this.handleLeft();
    } else {
      this.handleRight();
    }
  };

  handleRight = () => {
    let swipedProfile = this.state.profiles[0];
    console.log(swipedProfile);
    let data = {
      accepted_profiles: swipedProfile.user_id,
      id: sessionStorage.getItem("employer_id")
    };
    axiosClient.patch("/employers/update_matches", data);
  };

  handleLeft = () => {
    let swipedProfile = this.state.profiles[0];
    console.log(swipedProfile);
    let data = {
      rejected_profiles: swipedProfile.user_id,
      id: sessionStorage.getItem("employer_id")
    };
    axiosClient.patch("/employers/update_matches", data);
  };

  remove = () => {
    this.setState(({ profiles }) => ({
      profiles: profiles.slice(1, profiles.length)
    }));
  };

  showImg = (profileIndex, profiles) => {
    if (profiles[profileIndex].image_photos[0]) {
      return globalUrl + profiles[profileIndex].image_photos[0].url;
    } else {
      return DefaultPicture;
    }
  };

  filterCards = keywords => {
    let profiles = this.state.originalProfiles;
    keywords.forEach(keyword => {
      profiles = this.filteredByKeyword(keyword, profiles);
    });

    this.setState({ profiles: profiles });
  };

  filteredByKeyword = (keyword, profiles) => {
    let filteredProfiles = profiles.filter(
      profile =>
        profile.industry.toLowerCase().match(new RegExp(keyword)) ||
        profile.skills.toLowerCase().match(new RegExp(keyword))
    );
    return filteredProfiles;
  };

  render() {
    const { profiles } = this.state;
    return (
      <Container>
        <Row className="justify-content-center">
          <Filter filterCards={this.filterCards}></Filter>
        </Row>
        <div style={appStyles}>
          <div style={wrapperStyles}>
            {profiles.length > 0 && (
              <div style={wrapperStyles}>
                <Swipeable
                  buttons={({ right, left }) => (
                    <div style={actionsStyles}>
                      <Button variant="danger" onClick={left}>
                        Reject
                      </Button>
                      <Button variant="success" onClick={right}>
                        Accept
                      </Button>
                    </div>
                  )}
                  onSwipe={dir => this.handleSwipe(dir)}
                  onAfterSwipe={this.remove}
                >
                  <SwipeCard>
                    <Card>
                      <Card.Img variant="top" src={this.showImg(0, profiles)} />
                      <Card.Body>
                        <Card.Title>
                          {profiles[0].first_name} {profiles[0].last_name}
                        </Card.Title>
                        <p>Industry: {profiles[0].industry}</p>
                        <p>Skills: {profiles[0].skills}</p>
                      </Card.Body>
                    </Card>
                  </SwipeCard>
                </Swipeable>
                {profiles.length > 1 && (
                  <SwipeCard zIndex={-1}>
                    <Card>
                      <Card.Img variant="top" src={this.showImg(1, profiles)} />

                      <Card.Body>
                        <Card.Title>
                          {profiles[1].first_name} {profiles[1].last_name}
                        </Card.Title>
                        <p>Industry: {profiles[1].industry}</p>
                        <p>Skills: {profiles[1].skills}</p>
                      </Card.Body>
                    </Card>
                  </SwipeCard>
                )}
              </div>
            )}
            {profiles.length <= 1 && (
              <SwipeCard zIndex={-2}>No more profiles</SwipeCard>
            )}
          </div>
        </div>
      </Container>
    );
  }
}

export default DisplayCandidateProfiles;
