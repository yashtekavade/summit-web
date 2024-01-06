import React from "react";
import feeimg from "../assets/images/fees.png";
import feeqr from "../assets/images/feeqr.png";
import Footer from "../Components/Footer/Footer";
import regis1 from "../assets/images/registergrp.png";
import "./Registrationfees.css";

const Registrationfees = () => {
  return (
    <div>
      <div className="rf-div">
        <h2 className="rf-title">
          MIT-WPU Summit 2021 <br />
          Registration Fees.
        </h2>
      </div>
      <div className="image-container">
        <img src={regis1} alt="about" className="about-image" />
      </div>

      {/*<div className="rf-rules">
        <h2 className="rfimg-title" id="regpol">
          Registration Policy
        </h2>
        <div className="rf-rulesreg">
          <h1 className="heading-top">
            The following documents must be submitted during Online
            Registration:
          </h1>
          <ul>
            <li>The registration fee has to be paid on the website.</li>
            <li>
              Original Team List, downloaded from the website during
              Registration, with College/University Stamp and Signature of
              Director/ Sports staff in-charge/Principal
            </li>
            <li>
              (In case of non- engineering pool entries, the signature and stamp
              should be of the respective school from which the students are
              in).
            </li>
          </ul>
          <h1 className="heading-top">
            The following documents must be submitted during on ground
            verification-
          </h1>
          <ul>
            <li>
              The teams will be required to submit a Unique ID (ERP) of their
              respective college for each player in digital format prior to the
              onset of the event.
            </li>
            <li>
              Original Undertaking, signed by your Sports In-charge / Principal.
            </li>
            <li>
              Original govt. issued Photo ID for verification. (Digital/Xerox
              not allowed)
            </li>
          </ul>
          <span id="firstspan">
            Last date of entry for Cricket: 11th January 2024. Last date of
            entry for the remaining events: 17th January 2024.
          </span>
          <br></br>

          <span>Registration In-charge: Dhruv Chaudhary +91 720301362</span>
          <br></br>
          <br></br>
        </div>
        <span>
          Note: Entries will be restricted to the first 40 teams only, per
          event, so please send your entries as soon as possible.
        </span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className="rf-info">
        <h2 className="rfimg-title">Fees Format</h2>
        <div className="rf-img-holder">
          <img className="rf-img" src={feeimg} alt="Esteemed Guests" />
          <img className="rf-img2" src={feeqr} alt="feeqr" />
        </div>
        <hr></hr>
              </div>*/}
      <Footer />
    </div>
  );
};

export default Registrationfees;
