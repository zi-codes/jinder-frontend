import React from "react";
import axiosClient from "../axiosClient";
import SwipeCard from "./SwipeCard";
import { Card, Container, Row, Button } from "react-bootstrap";
import Swipeable from "react-swipy";
import DefaultPicture from "./default.jpeg";
import Filter from "./Filter";
import globalUrl from "../globalUrl";
import { StageSpinner } from "react-spinners-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  appStyles,
  imgStyle,
  cardStyle,
  wrapperStyles,
  actionsStyles
} from "./swipeStyling";

class DisplayCandidateProfiles extends React.Component {
  state = {
    loading: true,
    originalProfiles: [],
    profiles: [] //filtered profiles
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axiosClient.get("/api/profiles").then(response => {
      this.setState({ profiles: response.data });
      this.setState({ originalProfiles: response.data });
      this.setState({ loading: false });
      this.setState({ profilesLength: response.data.length });
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
    let data = {
      accepted_profiles: swipedProfile.id,
      id: sessionStorage.getItem("employer_id")
    };
    axiosClient.patch("/employers/update_matches", data);
    toast.success(`You liked ${swipedProfile.first_name}💖`);
    if (
      swipedProfile.user.accepted_employers.includes(
        sessionStorage.getItem("employer_id")
      )
    ) {
      console.log(swipedProfile.user.accepted_employers);
      toast(
        `${swipedProfile.first_name} likes you back! Go to your matches to contact them.`
      );
    }
  };

  handleLeft = () => {
    let swipedProfile = this.state.profiles[0];
    console.log(swipedProfile);
    let data = {
      rejected_profiles: swipedProfile.id,
      id: sessionStorage.getItem("employer_id")
    };
    axiosClient.patch("/employers/update_matches", data);
    toast.warn(`You ghosted ${swipedProfile.first_name}👻`);
  };

  remove = () => {
    this.setState(({ profiles }) => ({
      profiles: profiles.slice(1, profiles.length)
    }));
  };

  showImg = (profileIndex, profiles) => {
    if (profiles[profileIndex].image_photos[0]) {
      return this.tidyImgUrl(profiles[profileIndex].image_photos[0].url);
    } else {
      return DefaultPicture;
    }
  };

  tidyImgUrl = url => {
    return url.replace(
      "//s3.amazonaws.com/jinder-bucket/",
      "//jinder-bucket.s3.us-east-2.amazonaws.com/"
    );
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
        profile.skills.toLowerCase().match(new RegExp(keyword)) ||
        profile.personality.toLowerCase().match(new RegExp(keyword)) ||
        profile.location.toLowerCase().match(new RegExp(keyword))
    );
    console.log(filteredProfiles);
    return filteredProfiles;
  };

  render() {
    const { profiles } = this.state;
    const { loading } = this.state;
    return (
      <Container>
        <ToastContainer
          position="top-center"
          hideProgressBar
          autoClose={1000}
        />
        <Row className="justify-content-center">
          <Filter filterCards={this.filterCards}></Filter>
        </Row>

        <div>{profiles.length}</div>

        <div style={appStyles}>
          <div style={wrapperStyles}>
            {loading && (
              <div style={{ textAlign: "center" }}>
                Loading profiles, please wait{" "}
                <StageSpinner color="#FF4500" loading={loading} />
              </div>
            )}
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
                        variant="top"
                        src={this.showImg(0, profiles)}
                        draggable={false}
                        style={imgStyle}
                      />

                      <Card.Body>
                        <Card.Title>
                          {profiles[0].first_name} {profiles[0].last_name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {profiles[0].industry}
                        </Card.Subtitle>
                        <span style={{ fontWeight: "600" }}>Skills </span>
                        {profiles[0].skills.replace(/,/g, ", ")}
                        <br />
                        <span style={{ fontWeight: "600" }}>Traits </span>
                        {profiles[0].personality.replace(/,/g, ", ")}
                        <br />
                        <span style={{ fontWeight: "600" }}>Bio </span>
                        {profiles[0].user_bio}
                        <br />
                        <span style={{ fontWeight: "600" }}>Location </span>
                        {profiles[0].location}
                      </Card.Body>
                    </Card>
                  </SwipeCard>
                </Swipeable>
                {profiles.length > 1 && (
                  <SwipeCard zIndex={-1}>
                    <Card style={cardStyle}>
                      <Card.Img
                        variant="top"
                        src={this.showImg(1, profiles)}
                        draggable={false}
                        style={imgStyle}
                      />

                      <Card.Body>
                        <Card.Title>
                          {profiles[1].first_name} {profiles[1].last_name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {profiles[1].industry}
                        </Card.Subtitle>
                        <span style={{ fontWeight: "600" }}>Skills </span>
                        {profiles[1].skills.replace(/,/g, ", ")}
                        <br />
                        <span style={{ fontWeight: "600" }}>Traits </span>
                        {profiles[1].personality.replace(/,/g, ", ")}
                        <br />
                        <span style={{ fontWeight: "600" }}>Bio </span>
                        {profiles[1].user_bio}
                        <br />
                        <span style={{ fontWeight: "600" }}>Location </span>
                        {profiles[1].location}
                      </Card.Body>
                    </Card>
                  </SwipeCard>
                )}
              </div>
            )}
            {profiles.length <= 1 && !this.state.loading && (
              <SwipeCard zIndex={-2}>No more profiles</SwipeCard>
            )}
          </div>
        </div>
      </Container>
    );
  }
}

export default DisplayCandidateProfiles;
