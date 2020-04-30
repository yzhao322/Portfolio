import React from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";

function PortfolioContent() {
  return (
    <div className = "portfolio-content">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/images/stockMe.png"
          alt="First slide"
        />
        <Carousel.Caption>
            <a href="http://polar-dawn-54577.herokuapp.com/login.html">Go to This APP!</a><br></br>
            <a href="https://github.com/yzhao322/stockME">Go to This Repo!</a>
          <p>A stock-related app which can help user keep their investments in record.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/images/recipe-generator.png"
          alt="Third slide"
        />

        <Carousel.Caption>
            <a href="https://xzengeric.github.io/Project1/project1.html">Go to This APP!</a><br></br>
            <a href="https://github.com/xzengeric/Project1">Go to This Repo!</a>
          <p style={{color: "black"}}>An application that allows the user to find a recipe based on a range of calories and the ingredients of choice.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/images/weather-forecast.png"
          alt="Third slide"
        />

        <Carousel.Caption>
            <a href="https://yzhao322.github.io/Hope-it-doesn-t-snow-weatherforecast/Hope-it-doesn-t-snow-weatherforecast.html">Go to This APP!</a><br></br>
            <a href="https://github.com/yzhao322/Hope-it-doesn-t-snow-weatherforecast">Go to This Repo!</a>
          <p style={{color: "yellow"}}>This Weather Forecast Application use the OpenWeather API to help user to get the weather data in five days for cities.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/images/time-quiz.png"
          alt="Forth slide"
        />

        <Carousel.Caption>
            <a href="https://yzhao322.github.io/Time-Quiz/Time-Quiz.html">Go to This APP!</a><br></br>
            <a href="https://github.com/yzhao322/Time-Quiz">Go to This Repo!</a>
          <p style={{color: "black"}}>Small Quiz Game which contains combination of multiple-choice questions</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </div>
  );
}

export default PortfolioContent;
