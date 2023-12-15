import React from "react";
import CountUp from "react-countup";
import Footer from "../Components/Footer/Footer.jsx";
import post from "../assets/images/postt.jpg";
import about from "../assets/images/aboutt.png";
import Navbar from "../Components/Navbar/Navbar.jsx";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <section className="landscape-section">
          <img src={post} alt="Landscape" />
        </section>
        <section className="about-section">
          <img src={about} alt="Landscape" />
        </section>
        {/*<div className="statistics-container">
          <div className="statistics-box">
            <h3>
              <CountUp start={0} end={11} duration={2} />
            </h3>
            <p>Events</p>
          </div>
          <div className="statistics-box">
            <h3>
              <CountUp start={0} end={1500} duration={2} />
            </h3>
            <p>Colleges</p>
          </div>
          <div className="statistics-box">
            <h3>
              <CountUp start={0} end={40000} duration={2} />
            </h3>
            <p>Participants</p>
          </div>
          <div className="statistics-box">
            <h3>
              <CountUp start={0} end={800000} duration={2} />
            </h3>
            <p>Visitors</p>
          </div>
        </div>
        <section>
          <h2>MIT WPU SUMMIT</h2>
          <p>
            India’s biggest Annual Inter-Engineering Sports event hosted by
            MIT-World Peace University committed towards the goal of ‘Nation
            Building through Sports’.
          </p>
          <p>
            MIT World Peace University (MIT-WPU) has been organizing the
            National Level Inter-Engineering Sports “SUMMIT” since 2004. Every
            year Summit attracts over 5,000 students with participation of more
            than 150 Engineering and Technological Institutions across the
            country.
          </p>
        </section>
        <section>
          <h2>Executive President’s Message</h2>
          <p>Dear Students,</p>
          <p>
            MIT World Peace University, the Flagship University of MAEER’s MIT
            Group of Institutions, is carrying forward the legacy of four
            decades of Educational Excellence...
            {/* (Add the rest of the message) 
          </p>
        </section>
         Add Events section if needed */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
