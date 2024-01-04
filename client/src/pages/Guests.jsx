// Guests.jsx
import React from "react";
import t1 from "../assets/images/t1.png";
import t2 from "../assets/images/t2.png";
import t3 from "../assets/images/t3.png";
import t4 from "../assets/images/t4.png";
import t5 from "../assets/images/t5.png";
import Footer from "../Components/Footer/Footer";
import "./Guests.css";

const Guests = () => {
  return (
    <div>
      <div className="guest-div">
        <h2 className="guest-title">Our Esteemed Guests</h2>
      </div>

      {/* Add 5 images here */}
      <div className="image-container">
        <img src={t1} alt="Guest 1" className="guest-image" />
        <img src={t2} alt="Guest 2" className="guest-image" />
        <img src={t3} alt="Guest 3" className="guest-image" />
        <img src={t4} alt="Guest 4" className="guest-image" />
        <img src={t5} alt="Guest 5" className="guest-image" />
      </div>

      <Footer />
    </div>
  );
};

export default Guests;
