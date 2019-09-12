import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import Harry from "./whoarewe/Harry.jpg";
import Zi from "./whoarewe/Zi.jpg";
import Josh from "./whoarewe/Josh.jpg";
import Anastasiia from "./whoarewe/Anastasiia.jpg";
import background from "../style/images/work-image.jpg";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { SocialIcon } from "react-social-icons";

class About extends React.Component {
    
    render() {
        return (  
            <div style={containerPrimary}>
                <div style={welcomeContainer}>
                    <h1 style={historyWelcome}>a brief history of jinder</h1>
                </div>
                <Container>
                    <Card style={cardStyleHeadingAbout}>
                        <Card.Body>
                            <Card.Title style={cardTitle}>about us</Card.Title>
                            <Card.Text style={cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={cardStyleHeadingMission}>
                        <Card.Body>
                            <Card.Title style={cardTitle}>our mission and vision</Card.Title>
                            <Card.Text style={cardText}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={cardStyleHeadingWho}>
                        <Card.Body>
                            <Card.Title style={cardTitle}>meet the team</Card.Title>
                                <CarouselStyle>
                                    <Carousel> 
                                        <Carousel.Item>
                                            <img
                                            className="w-10"
                                            height={400}
                                            width={320}
                                            src={Zi}
                                            alt="Zi"
                                            />
                                                <Carousel.Caption>
                                                    <h3>Zi Deng</h3>
                                                </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="w-10"
                                            height={400}
                                            width={320}
                                            src={Josh}
                                            alt="Josh"
                                            />
                                                <Carousel.Caption>
                                                    <h3>Josh Hemsley</h3>
                                                </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block, w-10"
                                            height={400}
                                            width={320}
                                            src={Anastasiia}
                                            alt="Anastasiia"
                                            />
                                                <Carousel.Caption>
                                                    <h3>Anastasiia Blaha</h3>
                                                </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="w-10"
                                            height={400}
                                            width={320}
                                            src={Harry}
                                            alt="Harry"
                                            />
                                                <Carousel.Caption>
                                                    <h3>Harry Riley</h3>
                                                </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </CarouselStyle>
                            <Card.Text style={cardText}>the brains behind jinder app</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={cardStyleHeadingContact}>
                        <Card.Body>
                            <Card.Title style={cardTitle}>contact us</Card.Title>
                                <SocialIcon style={socialIcon} url="mailto:jinder.team@gmail.com">Email</SocialIcon>
                                <SocialIcon style={socialIcon} url="https://www.instagram.com/jinderteam/">Instagram</SocialIcon>
                        </Card.Body>
                    </Card>               
                </Container>
            </div>
        )
    }
}

export default About;

const containerPrimary = {
backgroundImage: `url(${background})`,
backgroundPosition: "center",
backgroundSize: "cover",
backgroundRepeat: "no-repeat",
height: "100%",
position: "center",
paddingTop: "150px"
}

const cardStyleHeadingAbout = {
width: "40rem",
textAlign: "center",
border: "none",
margin: "auto",
marginTop: "100px",
backgroundColor: "#FFFFFF99",
fontWeight: "bold",
paddingTop: "20px",
paddingBottom: "20px"
}

const cardStyleHeadingMission = {
width: "40rem",
textAlign: "center",
border: "none",
margin: "auto",
marginTop: "100px",
backgroundColor: "#FFFFFF99",
fontWeight: "bold",
paddingTop: "20px",
paddingBottom: "20px"
}

const cardStyleHeadingWho = {
width: "30rem",
textAlign: "center",
border: "none",
margin: "auto",
marginTop: "100px",
backgroundColor: "#FFFFFF99",
fontWeight: "bold",
paddingTop: "20px",
paddingBottom: "20px"
}

const cardStyleHeadingContact = {
width: "30rem",
textAlign: "center",
border: "none",
margin: "auto",
marginTop: "100px",
backgroundColor: "#FFFFFF99",
fontWeight: "bold",
paddingTop: "20px",
paddingBottom: "20px"
}
  
const cardText = {
textAlign: "center",
fontSize: "25px",
color: "#000000",
}

const cardTitle = {
background: "#FF5903",
color: "#fff",
textAlign: "center",
fontWeight: "bold",
fontSize: "30px"
}

const welcomeContainer = {
backgroundColor: "rgba(52, 52, 52, 0.7)"
}

const historyWelcome = {
color: "#fff",
textAlign: "center",
paddingTop: "25px"
}

const socialIcon = {
margin: "25px"
}

const CarouselStyle = styled(Carousel)`
text-align: center;
`


// const Body = styled.body`
//     font-size: 16px;
//     border: solid 1px #dbdbdb;
//     border-radius: 3px;
//     color: #262626;
//     padding: 7px 33px;
//     border-radius: 3px;
//     color: #999;
//     cursor: text;
//     font-size: 14px;
//     font-weight: 300;
//     text-align: center;
//     background: #fafafa;
//     &:active,
//     &:focus {
//         text-align: center;
//     }
// `