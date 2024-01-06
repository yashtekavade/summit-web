import React from "react";
import "./minister.css";
import Footer from "../Components/Footer/Footer";
import m1 from "../assets/images/mingrp.png";

const Message = () => {
  return (
    <div className="message-container">
      <div className="min-div">
        <h2 className="min-title">Sports Minister's Message.</h2>
      </div>
      <div className="image-container">
        <img src={m1} alt="message" className="min-image" />
      </div>

      <Footer />
    </div>
  );
};

export default Message;
