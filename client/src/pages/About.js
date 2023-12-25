import React from "react";
import Footer from "../Components/Footer/Footer";
import "./About.css";
import AboutImg from "../assets/images/me.jpg";

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
      <div className="about-content">
        <div class="img-container">
          <img className="img" src={AboutImg} alt="about"></img>
        </div>
        <div className="right-content">
          <p>
            Reading books might help you gain knowledge and succeed in life, but
            sports make us understand the importance of principles to be
            followed in life. Sports teaches us endurance, perseverance,
            dedication and also makes us understand that we are going to have
            ups and downs, but we need to keep running right through them. In
            2004, Maharashtra Institute of Technology, Pune organized an annual
            sports meet SUMMIT for all Engineering colleges across Pune. The
            event received a great response with a footfall of over 1700
            students competing in a total of nine events. Since then, Summit has
            been progressing and thriving and has become one of the biggest
            National-Level Engineering Sports meet.
          </p>
          <ul className="up-pg">
            <li>
              In 2007, MIT Summit was declared as a State-Level Sports Meet on
              the occasion of MIT’s Silver Jubilee.
            </li>
            <li>
              In 2009, MIT Summit moved on to become a National-Level Sports
              Meet. Over 3000 students from 60 colleges took part in the event.
              The commencement of the event was done by Shree. Mir Ranjan Negi,
              former Indian Hockey Player and MC Mary Kom, Indian Olympic Boxer
              and Padma Vibhushan Awardee.
            </li>
          </ul>
        </div>
        <div className="btm-content">
          <ul>
            <li>
              In 2012, MIT Summit was held for the 7th consecutive time,
              attracting over 3800 participants from major cities like Mumbai,
              Chennai, Nashik, etc. The main highlight of the event was the
              inclusion of Boxing.
            </li>
            <li>
              In 2015, 5200 sportspersons competed against each other in 16
              different sports. V.V.S Laxman inaugurated the ceremony and
              enlightened everyone with his motivating words.
            </li>
            <li>
              In 2019, 4500 players took part in Summit from over 125 colleges.
              The inauguration ceremony was graced by Smt. Shital Mahajan,
              Indian Skydiver and holder of 6 world records along with Rutuja
              Bhosale, Indian Tennis Player.
            </li>
          </ul>
          <p className="low-pg">
            In these few years, Summit not only helped students to achieve a
            life balance between studies and sports but also gave rise to some
            National and International players like Ajay Gandhi and Nitin Gandhi
            (Badminton), Anand Deshpande and Sushil Nandkarni (Cricket),
            Abhishek Bobade (Basketball), Ravneet Singh and Vivek Rai (Squash),
            Kapilesh Bhate (Equestrian Show Jumping), Sumedh Gangal (Golf),
            Pranav Khule(Powerlifting), and many more.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
