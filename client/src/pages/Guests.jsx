// Guests.jsx
import React from "react";
import esteemedGuestsPhoto from "../assets/images/guest.jpg";
import Footer from "../Components/Footer/Footer";
import "./Guests.css";
const Guests = () => {
  return (
    <div>
      <div className="guest-div">
        <h2 className="guest-title">Our Esteemed Guests</h2>
      </div>
      <div className="guest-div2">
        <img
          className="guest-img"
          src={esteemedGuestsPhoto}
          alt="Esteemed Guests"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Guests;
