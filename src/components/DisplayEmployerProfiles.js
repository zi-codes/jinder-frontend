import React from "react";
import axiosClient from "../axiosClient";
import SwipeCard from "./SwipeCard";
import { Card, Container, Button } from "react-bootstrap";
import Swipeable from "react-swipy";
import DefaultPicture from "./default.jpeg";
import globalUrl from "../globalUrl";
import {
  appStyles,
  imgStyle,
  cardStyle,
  wrapperStyles,
  actionsStyles
} from "./swipeStyling";

class DisplayEmployerProfiles extends React.Component {
  state = {
    profiles: []
  };

  componentDidMount = () => {
    console.log("user id is " + sessionStorage.getItem("user_id"));
    axiosClient
      .get("/employers")
      .then(response => this.setState({ profiles: response.data.reverse() }));
  };

  handleSwipe = dir => {
    console.log(dir);
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
      accepted_employers: swipedProfile.id,
      id: sessionStorage.getItem("user_id")
    };
    axiosClient.patch("/users/update_matches", data);
  };

  handleLeft = () => {
    let swipedProfile = this.state.profiles[0];
    console.log(swipedProfile);
    let data = {
      rejected_employers: swipedProfile.id,
      id: sessionStorage.getItem("user_id")
    };
    axiosClient.patch("/users/update_matches", data);
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

  render() {
    const { profiles } = this.state;
    return (
      <Container>
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
                    <Card style={cardStyle}>
                      <Card.Img
                        style={imgStyle}
                        variant="top"
                        src={this.showImg(0, profiles)}
                        draggable={false}
                      />

                      <Card.Body>
                        <Card.Title>{profiles[0].company_nane}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {profiles[0].first_name} {profiles[0].last_name}
                        </Card.Subtitle>
                        <p>Bio: {profiles[0].bio}</p>
                        <p>Website: {profiles[0].company_url}</p>
                      </Card.Body>
                    </Card>
                  </SwipeCard>
                </Swipeable>
                {profiles.length > 1 && (
                  <SwipeCard zIndex={-1}>
                    <Card style={cardStyle}>
                      <Card.Img
                        style={imgStyle}
                        variant="top"
                        src={this.showImg(1, profiles)}
                      />

                      <Card.Body>
                        <Card.Title>{profiles[1].company_nane}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {profiles[1].first_name} {profiles[1].last_name}
                        </Card.Subtitle>
                        <p>Bio: {profiles[1].bio}</p>
                        <p>Website: {profiles[1].company_url}</p>
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

export default DisplayEmployerProfiles;
