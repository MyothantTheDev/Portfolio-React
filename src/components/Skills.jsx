import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import CarouselItems from "../Utils/CarouselItems";
import colorSharp from "../assets/img/color-sharp.png";
import django from '../assets/img/django.png';
import python from '../assets/img/Python.svg';
import react from '../assets/img/react-js.svg';
import node from '../assets/img/node-js.svg';
import express from '../assets/img/express-js.svg';
import mongo from '../assets/img/mongodb-icon.svg';
import mysql from '../assets/img/mysql.svg';
import debian from '../assets/img/debian.svg';
import laravel from '../assets/img/laravel.svg';
import php from '../assets/img/php.svg';
import aws from '../assets/img/aws.svg';
import nginx from '../assets/img/nginx.svg';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = {
    item1 : [django, "Django"],
    item2 : [python, "Python Development"],
    item3 : [node, "Node JS"],
    item4 : [react, "React JS"],
    item5 : [express, "Express JS"],
    item6 : [mongo, "MongoDB"],
    item7 : [mysql, "MySQL"],
    item8 : [debian, "Linux"],
    item9 : [laravel, "Laravel"],
    item10 : [php, "PHP"],
    item11 : [aws,"AWS"],
    item12 : [nginx, "Nginx"]
  }

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p></p>
              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000} className="skill-slider">
                { Object.values(skills).map(([icon, title],index) => <CarouselItems icon={icon} text={title} key={index}/>) }
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  )
}

export default Skills;