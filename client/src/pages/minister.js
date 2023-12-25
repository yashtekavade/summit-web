import React from "react";
import "./minister.css";
import Footer from "../Components/Footer/Footer";
import ministerImage from "../assets/images/minister.png";

const Message = () => {
  return (
    <div className="message-container">
      <div className="min-div">
        <h2 className="min-title">Sports Minister's Message.</h2>
      </div>
      <div className="content-container">
        <div className="image-container">
          <img className="imgg" src={ministerImage} alt="Sports Minister" />
        </div>
        <div className="text-container">
          <p>
            I'm delighted to learn about the upcoming 17th National Level Sports
            Meet, "Summit 24," scheduled from January 19th to 23rd, 2024. The
            event, organized by MIT World Peace University, will bring together
            Government Colleges, Private Colleges, Private Universities, and
            Engineering Colleges from across Bharat. I commend the visionary
            efforts of Dr. Vishwanath Karad and Shri. Rahul Karad in ensuring
            students' holistic development through sports participation. Summit
            24 promises to be a unique and enriching experience, fostering
            physical well-being and instilling values like perseverance,
            teamwork, and discipline. I extend my best wishes to all
            participating students, congratulating the coordinators and
            anticipating success at "Summit 24."
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Message;
