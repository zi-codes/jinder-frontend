import React from "react";
import axiosClient from "../axiosClient";
import Img from "react-fix-image-orientation";
import SwipeCard from "./SwipeCard";
import Button from "./Button";
import Swipeable from "react-swipy";
import DefaultPicture from "./default.jpeg";
import globalUrl from "../globalUrl";
import {
  appStyles,
  imgStyle,
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
      <div>
        <div style={appStyles}>
          <div style={wrapperStyles}>
            {profiles.length > 0 && (
              <div style={wrapperStyles}>
                <Swipeable
                  buttons={({ right, left }) => (
                    <div style={actionsStyles}>
                      <Button onClick={left}>Reject</Button>
                      <Button onClick={right}>Accept</Button>
                    </div>
                  )}
                  onSwipe={dir => this.handleSwipe(dir)}
                  onAfterSwipe={this.remove}
                >
                  <SwipeCard>
                    <div>
                      <Img style={imgStyle} src={this.showImg(0, profiles)} />
                    </div>
                    <div>
                      {profiles[0].first_name} {profiles[0].last_name}
                      <br />
                      Bio: {profiles[0].bio}
                      <br />
                      Website: {profiles[0].company_url}
                    </div>
                  </SwipeCard>
                </Swipeable>
                {profiles.length > 1 && (
                  <SwipeCard zIndex={-1}>
                    <div>
                      <Img style={imgStyle} src={this.showImg(1, profiles)} />
                    </div>
                    <div>
                      {profiles[1].first_name} {profiles[1].last_name}
                      <br />
                      Bio: {profiles[1].bio}
                      <br />
                      Website: {profiles[1].company_url}
                    </div>
                  </SwipeCard>
                )}
              </div>
            )}
            {profiles.length <= 1 && (
              <SwipeCard zIndex={-2}>No more profiles</SwipeCard>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayEmployerProfiles;
