import React from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import "./Home.css";
import { saveAs } from "file-saver";
import AboutImg from "../assets/images/me.webp";
import Founder from "../assets/images/karad.webp";
import Exe from "../assets/images/exe.webp";
import videoPath from "../assets/images/finalintro(1).mp4";
import Footer from "../Components/Footer/Footer.jsx";
import Foot from "../assets/brand/fp2.png";

const Home = () => {
  const handleDownload = () => {
    const filePath = "/Brouchure.pdf";
    const fileName = "Brouchure.pdf";
    saveAs(filePath, fileName);
  };

  return (
    <div>
      <Navbar />

      <div className="teaser">
        <video src={videoPath} autoPlay loop muted />
      </div>
      <div className="about-content">
        <div className="left-content">
          <p className="sub">About the</p>
          <p className="title">MIT WPU SUMMIT</p>
          <p>
            India’s biggest Annual Inter-Engineering Sports event hosted by
            MIT-World Peace University committed towards the goal of ‘Nation
            Building through Sports’. MIT World Peace University (MIT-WPU) has
            been organizing the National Level Inter-Engineering Sports “SUMMIT”
            since 2004. Every year Summit attracts over 5,000 students with
            participation of more than 150 Engineering and Technological
            Institutions across the country.
          </p>
          <button className="brochure-button" onClick={handleDownload}>
            Brochure
          </button>
        </div>
        <div className="img-container">
          <img className="img" src={AboutImg} alt="about" loading="lazy" />
        </div>
      </div>

      <div className="founder-content">
        <div className="left-content">
          <p className="sub">About the</p>
          <p className="title">Founders Inspiration</p>
          <p>
            At the outset, I would like to congratulate the organizers of
            'Summit 2024' for their sustained & committed efforts in organizing
            this event each year for 17 long years! My dear friends, you all are
            perhaps aware that the MAEER's MIT Group of Institutions, Pune was
            established in 1983, reposing full faith on Swami Vivekananda's
            prophetic words that, "Union of Science & Spirituality alone will
            bring Peace & Harmony to Mankind." But friends, Swamiji had also
            once said that, "It is better to run behind football on the ground
            than just sit in a temple & read Gita. It is the optimum blend of
            pursuing academics, sports & imbibing values that one can become
            "Physically Fit, Mentally Alert, Intellectually Sharp & Spiritually
            Elevated" The organization of 'Summit each year is our effort
            towards this end. hope & feel confident that the contestants will
            give off their best to excel in every sport that they have
            participated in. Wish you all the best! Thank You!
          </p>
        </div>
        <div className="img-container">
          <img className="img_b" src={Founder} alt="about" loading="lazy" />
        </div>
      </div>

      <div className="exe-content">
        <div className="left-content">
          <p className="title">Executive President’s Message</p>
          <p>
            Dear Students, MIT World Peace University, the Flagship University
            of MAEER’s MIT Group of Institutions, is carrying forward the legacy
            of four decades of Educational Excellence. It has always laid great
            emphasis on the development of human spirit and character by
            imparting ‘Universal Value-Based Higher Education’. This is
            reflected in the number of lives we continue to touch upon through
            various on campus Initiatives – both of core academics and other
            allied endeavours to ensure Holistic Development. Today our Alumni
            are spread across the world and many of them are either holding key
            Leadership roles or are making invaluable contribution to society by
            running successful Enterprises/Social NGOs. Do you know, what is the
            common thread of Success each of them shares? It’s the ‘Foundation
            of Healthy Mind-Body-Spirit and Character’ that we strive to
            cultivate here through various activities centred on ‘Technology,
            Research, Partnership and Social Innovation’.
          </p>
        </div>
        <div className="img-container">
          <img className="img_c" src={Exe} alt="about" loading="lazy" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
