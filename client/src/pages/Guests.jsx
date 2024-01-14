// Guests.jsx
import React from "react";
import t1 from "../assets/images/t1.webp";
import t2 from "../assets/images/t2.webp";
import t3 from "../assets/images/t3.webp";
import t4 from "../assets/images/t4.webp";
import t5 from "../assets/images/t5.webp";
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
        <img src={t1} alt="Guest 1" className="guest-image" loading="lazy" />
        <img src={t2} alt="Guest 2" className="guest-image" loading="lazy" />
        <img src={t3} alt="Guest 3" className="guest-image" loading="lazy" />
        <img src={t4} alt="Guest 4" className="guest-image" loading="lazy" />
        <img src={t5} alt="Guest 5" className="guest-image" loading="lazy" />
      </div>

      <Footer />
    </div>
  );
};

export default Guests;
