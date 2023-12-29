// Guests.jsx
import React from "react";
import esteemedGuestsPhoto1 from "../assets/guestimgs/g4.JPG";
import esteemedGuestsPhoto2 from "../assets/guestimgs/g3.JPG";
import esteemedGuestsPhoto3 from "../assets/guestimgs/g2.JPG";
import esteemedGuestsPhoto4 from "../assets/guestimgs/g1.jpg";
import esteemedGuestsPhoto5 from "../assets/guestimgs/g5.JPG";
import esteemedGuestsPhoto6 from "../assets/guestimgs/g6.JPG";
import esteemedGuestsPhoto7 from "../assets/guestimgs/g7.JPG";
import esteemedGuestsPhoto8 from "../assets/guestimgs/g8.JPG";
import esteemedGuestsPhoto9 from "../assets/guestimgs/g9.JPG";
import esteemedGuestsPhoto10 from "../assets/guestimgs/g10.JPG";
import esteemedGuestsPhoto11 from "../assets/guestimgs/g11.JPG";
import esteemedGuestsPhoto12 from "../assets/guestimgs/g12.JPG";

import grp1 from "../assets/grpimgs/grp1.JPG";
import grp2 from "../assets/grpimgs/grp2.JPG";
import grp3 from "../assets/grpimgs/grp3.JPG";
import grp4 from "../assets/grpimgs/grp4.JPG";
import grp5 from "../assets/grpimgs/grp5.JPG";
import grp6 from "../assets/grpimgs/grp6.JPG";
import grp7 from "../assets/grpimgs/grp7.JPG";

import Footer from "../Components/Footer/Footer";
import "./Guests.css";
const Guests = () => {
  return (
    <div>
      <div className="guest-div">
        <h2 className="guest-title">Our Esteemed Guests</h2>
      </div>
      <div className="guest-heading">
        <h1>Building Legacies: A Look Back at Our Special Guests</h1>
      </div>
      <div className="guest-div2">
        <img
          className="guest-img-head"
          src={esteemedGuestsPhoto1}
          alt="Esteemed Guests"
        />
        <img
          loading="lazy"
          className="guest-img-head"
          src={esteemedGuestsPhoto2}
          alt="Esteemed Guests"
        />
        <img
          className="guest-img-head"
          src={esteemedGuestsPhoto3}
          alt="Esteemed Guests"
        />
        <img
          className="guest-img-head"
          src={esteemedGuestsPhoto4}
          alt="Esteemed Guests"
        />
        <img
          loading="lazy"
          className="guest-img-head"
          src={esteemedGuestsPhoto5}
          alt="Esteemed Guests"
        />
        <img
          className="guest-img-head"
          src={esteemedGuestsPhoto6}
          alt="Esteemed Guests"
        />
        <img
          loading="lazy"
          className="guest-img-head"
          src={esteemedGuestsPhoto7}
          alt="Esteemed Guests"
        />
        <img
          className="guest-img-head"
          src={esteemedGuestsPhoto8}
          alt="Esteemed Guests"
        />
        <img
          className="guest-img-head"
          src={esteemedGuestsPhoto9}
          alt="Esteemed Guests"
        />
        <img
          loading="lazy"
          className="guest-img-head"
          src={esteemedGuestsPhoto10}
          alt="Esteemed Guests"
        />
        <img
          loading="lazy"
          className="guest-img-head"
          src={esteemedGuestsPhoto11}
          alt="Esteemed Guests"
        />
        <img
          className="guest-img-head"
          src={esteemedGuestsPhoto12}
          alt="Esteemed Guests"
        />
      </div>
      <div className="guest-heading">
        <h1>The Power of Togetherness: MIT-WPU Summit Group Captures</h1>
      </div>
      <div className="guest-div2">
        <img
          loading="lazy"
          className="grpimg"
          src={grp1}
          alt="Esteemed Guests"
        />
        <img className="grpimg" src={grp2} alt="Esteemed Guests" />
        <img
          loading="lazy"
          className="grpimg"
          src={grp3}
          alt="Esteemed Guests"
        />
        <img className="grpimg" src={grp4} alt="Esteemed Guests" />
        <img
          loading="lazy"
          className="grpimg"
          src={grp5}
          alt="Esteemed Guests"
        />
        <img className="grpimg" src={grp6} alt="Esteemed Guests" />
        <img
          loading="lazy"
          className="grpimg"
          src={grp7}
          alt="Esteemed Guests"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Guests;
