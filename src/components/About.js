import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Harry from "./whoarewe/Harry.jpg";
import Zi from "./whoarewe/Zi.jpg";
import Josh from "./whoarewe/Josh.jpg";
import Anastasiia from "./whoarewe/Anastasiia.jpg";
import background from '../style/images/work-image.jpg'
import Card from "react-bootstrap/Card";


const containerPrimary = {
backgroundImage: `url(${background})`,
backgroundPosition: 'center',
backgroundSize: 'wrap',
backgroundRepeat: 'no-repeat',
height: '100%',
position: 'center'
}

const cardStyleHeading = {
    width: '18rem',
    textAlign: 'center',
    border: 'none',
    margin: 'auto',
    marginTop: '100px',
    backgroundColor: '#FFFFFF99'
  }
  

const cardText = {
textAlign: 'center',
color: '#FF5903'
}

const cardBody = {
textAlign: 'center'
}

const cardTitle = {
textAlign: 'center'
}

const H1 = styled.h1`
text-align: center;
color: #FF5903;
font-size: 50px;
`

const emailButton = {
background: '#FF5903'
}

const Body = styled.body`
text-align: center;
color: blue;
font-size: 50px;
`

const CarouselStyle = styled(Carousel)`
text-align: center;
font-colour: black;
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
                
                <header>
                    <Card style={cardStyleHeading}>
                        <Card.Body style={cardBody}>
                            <Card.Title style={cardTitle}>About Us</Card.Title>
                            <Card.Text style={cardText}>We created this web app to make a recruitment process fun, engaging and easy for both job hunter and employers.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={cardStyleHeading}>
                        <Card.Body style={cardBody}>
                            <Card.Title>Our Mission and Vision</Card.Title>
                            <Card.Text style={cardText}>To make recruitment process fun, engaging and easy.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={cardStyleHeading}>
                        <Card.Body style={cardBody}>
                            <Card.Title>Who are we? </Card.Title>
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
                                            className="w-10"
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
                    <Card style={cardStyleHeading}>
                        <Card.Body style={cardBody}>
                            <Card.Title>Contact Us</Card.Title>
                            <Card.Text style={cardText}><Button style={emailButton} href="mailto:jinder.team@gmail.com">Email</Button></Card.Text>
                            <Card.Text style={cardText}><Button style={emailButton} href="https://www.instagram.com/jinderteam/">Instagram</Button></Card.Text>
                        </Card.Body>
                    </Card>               
                </header>
            </div>
        )
    }
}

export default About;
