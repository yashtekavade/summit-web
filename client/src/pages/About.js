import React from "react";
import Footer from "../Components/Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-div">
        <h2 className="about-title">About MIT-WPU Summit 2021.</h2>
        <p className="about-subtitle">
          India’s biggest Annual Inter-Engineering Sports event hosted by
          MIT-World Peace University committed towards the goal of ‘Nation
          Building through Sports’.
        </p>
      </div>
      <div>
        <p>
          Reading books might help you gain knowledge and succeed in life, but
          sports make us understand the importance of principles to be followed
          in life. Sports teaches us endurance, perseverance, dedication and
          also makes us understand that we are going to have ups and downs, but
          we need to keep running right through them. In 2004, Maharashtra
          Institute of Technology, Pune organized an annual sports meet SUMMIT
          for all Engineering colleges across Pune. The event received a great
          response with a footfall of over 1700 students competing in a total of
          nine events. Since then, Summit has been progressing and thriving and
          has become one of the biggest National-Level Engineering Sports meet.
        </p>
        <p>
          In 2007, MIT Summit was declared as a State-Level Sports Meet on the
          occasion of MIT’s Silver Jubilee. In 2009, MIT Summit moved on to
          become a National-Level Sports Meet. Over 3000 students from 60
          colleges took part in the event. The commencement of the event was
          done by Shree. Mir Ranjan Negi, former Indian Hockey Player, and MC
          Mary Kom, Indian Olympic Boxer, and Padma Vibhushan Awardee.
        </p>
        {/* Continue adding paragraphs for each year */}
        {/* ... */}

        <p>
          In these few years, Summit not only helped students to achieve a life
          balance between studies and sports but also gave rise to some National
          and International players like Ajay Gandhi and Nitin Gandhi
          (Badminton), Anand Deshpande and Sushil Nandkarni (Cricket), Abhishek
          Bobade (Basketball), Ravneet Singh and Vivek Rai (Squash), Kapilesh
          Bhate (Equestrian Show Jumping), Sumedh Gangal (Golf), Pranav
          Khule(Powerlifting), and many more.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
