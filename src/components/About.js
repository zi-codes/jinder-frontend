import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Harry from "./whoarewe/Harry.jpeg";
import Zi from "./whoarewe/Zi.jpeg";
import Josh from "./whoarewe/Josh.jpeg";
import Anastasiia from "./whoarewe/Anastasiia.jpeg";


const H1 = styled.h1`
text-align: center;
color: #FF5903;
font-size: 100px;
`

const EmailButton = styled(Button)`
    backgrounf: palevioletred;
    border-radius: 3px;
    border: none;
    colour: orange;
    ;
`

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
            <div>
                
                <header>
                    <H1>
                        About Us
                    </H1>
                        <Body>We created this web app to make a recruitment process fun, engaging and easy for both job hunter and employers.</Body>
                    <H1>
                        Our Vision and Mission
                    </H1>
                       <Body>To make recruitment process fun, engaging and easy.</Body>
                    <H1>
                        Who Are We?
                    </H1>
                    <CarouselStyle>
                        <Carousel> 
                            <Carousel.Item>
                                <img
                                className="w-10"
                                src={Harry}
                                alt="Harry"
                                />
                                    <Carousel.Caption>
                                        <h3>Harry Riley</h3>
                                    </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="w-10"
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
                                src={Anastasiia}
                                alt="Anastasiia"
                                />
                                    <Carousel.Caption>
                                        <h3>Anastasiia Blaha</h3>
                                    </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        </CarouselStyle>
                        <Body>We are the cool kids gang.</Body>
                    <H1>
                        Contact Us
                        <Body>
                            <EmailButton href="mailto:anastasiia.blaha@gmail.com">Email</EmailButton>
                        </Body>
                        <Body>Telephone:</Body>
                        <Body>Instagram:</Body>
                    </H1>
                </header>
            </div>
        )
    }
}

export default About;

