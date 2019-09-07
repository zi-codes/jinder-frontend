import React from "react";
import PropTypes from "prop-types";
import axiosClient from "../axiosClient";
import Card from "./Card";
import Button from "./Button";
import { render } from "react-dom";
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
    profiles: []
  };

  componentDidMount = () => {
    console.log("employer id is " + sessionStorage.getItem("employer_id"));
    axiosClient.get("/api/profiles").then(response => {
      this.setState({ profiles: response.data.reverse() });
      this.setState({ originalProfiles: response.data.reverse() });
    });
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
    let data = {
      accepted_profiles: swipedProfile.id,
      id: sessionStorage.getItem("employer_id")
    };
    axiosClient.patch("/employers/update_matches", data);
  };

  handleLeft = () => {
    let swipedProfile = this.state.profiles[0];
    let data = {
      rejected_profiles: swipedProfile.id,
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
      <div>
        <Filter filterCards={this.filterCards}></Filter>
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
                  <Card>
                    <div>
                      <img style={imgStyle} src={this.showImg(0, profiles)} />
                    </div>
                    <div>
                      {profiles[0].first_name} {profiles[0].last_name}
                      <br />
                      Industry: {profiles[0].industry}
                      <br />
                      Skills: {profiles[0].skills}
                    </div>
                  </Card>
                </Swipeable>
                {profiles.length > 1 && (
                  <Card zIndex={-1}>
                    <div>
                      <img style={imgStyle} src={this.showImg(1, profiles)} />
                    </div>
                    <div>
                      {profiles[1].first_name} {profiles[1].last_name}
                      <br />
                      Industry: {profiles[1].industry}
                      <br />
                      Skills: {profiles[1].skills}
                    </div>
                  </Card>
                )}
              </div>
            )}
            {profiles.length <= 1 && <Card zIndex={-2}>No more profiles</Card>}
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayCandidateProfiles;
