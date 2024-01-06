import React from "react";
import Footer from "../Components/Footer/Footer";
import "./About.css";
import a1 from "../assets/images/aboutgrp.png";

const About = () => {
  return (
    <div>
      <div className="about-div">
        <h2 className="about-title">About MIT-WPU Summit 2024.</h2>
        <p className="about-subtitle">
          India’s biggest Annual Inter-Engineering Sports event hosted by
          MIT-World Peace University committed towards the goal of ‘Nation
          Building through Sports’.
        </p>
      </div>
      <div className="image-container">
        <img src={a1} alt="about" className="about-image" />
      </div>
      <Footer />
    </div>
  );
};

export default About;
