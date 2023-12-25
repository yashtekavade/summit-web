// EventHead.jsx
import React from "react";
import eventHeadPhoto from "../assets/event-head/photo.png";
import Footer from "../Components/Footer/Footer";
import "./event.css";

const EventHead = () => {
  return (
    <div>
      <div className="org-div">
        <h2 className="org-title">
          Event Heads Of <br />
          MIT-WPU Summit 2021
        </h2>
      </div>
      <img src={eventHeadPhoto} alt="Event Head" style={{ width: "100%" }} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventHead;
