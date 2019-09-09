import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Harry from "./whoarewe/Harry.jpg";
import Zi from "./whoarewe/Zi.jpg";
import Josh from "./whoarewe/Josh.jpg";
import Anastasiia from "./whoarewe/Anastasiia.jpg";
import background from "../style/images/work-image.jpg";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const containerPrimary = {
backgroundImage: `url(${background})`,
backgroundPosition: "center",
backgroundSize: "cover",
backgroundRepeat: "no-repeat",
height: "100%",
position: "center"
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

const cardBody = {
textAlign: "center",
paddingTop: "20px",
paddingBottom: "20px"
}

const cardTitle = {
background: "#FF5903",
color: "#fff",
textAlign: "center",
fontWeight: "bold",
fontSize: "30px"
}

const emailButton = {
background: "#FF5903",
marginTop: "10px",
margin: "20px"
}

const welcomeContainer = {
backgroundColor: "rgba(52, 52, 52, 0.7)"
}

const historyWelcome = {
color: "#fff",
textAlign: "center",
paddingTop: "25px",
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
                            <Card.Title style={cardTitle}>About Us</Card.Title>
                            <Card.Text style={cardText}>We created this web app to make a recruitment process fun, engaging and easy for both job hunter and employers.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={cardStyleHeadingMission}>
                        <Card.Body>
                            <Card.Title style={cardTitle}>Our Mission and Vision</Card.Title>
                            <Card.Text style={cardText}>To make recruitment process fun, engaging and easy.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={cardStyleHeadingWho}>
                        <Card.Body>
                            <Card.Title style={cardTitle}>Meet the Team</Card.Title>
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
                            <Card.Text style={cardText}>We are team jinder</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={cardStyleHeadingContact}>
                        <Card.Body>
                            <Card.Title style={cardTitle}>Contact Us</Card.Title>
                                <Button style={emailButton} href="mailto:jinder.team@gmail.com">Email</Button>
                                <Button style={emailButton} href="https://www.instagram.com/jinderteam/">Instagram</Button>
                        </Card.Body>
                    </Card>               
                </Container>
            </div>
        )
    }
}

export default About;
