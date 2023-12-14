// guests.jsx
import React from "react";
import esteemedGuestsPhoto from "../assets/images/guest.jpg";
import Footer from "../Components/Footer/Footer";

const Guests = () => {
  return (
    <div>
      <div>
        <h2>Our Esteemed Guests</h2>
        <img src={esteemedGuestsPhoto} alt="Esteemed Guests" />
      </div>
      <Footer />
    </div>
  );
};

export default Guests;
