// EventHead.jsx
import React from "react";
import eventHeadPhoto from "../assets/event-head/photo.png";
import Footer from "../Components/Footer/Footer";
import "./event.css";

const EventHead = () => {
  const photoTitles = [
    "Event Head 1",
    "Event Head 2",
    // ... Repeat the pattern for the remaining titles
  ];

  return (
    <div>
      <div className="event-div">
        <h2 className="event-title">
          Event Heads Of <br />
          MIT-WPU Summit 2021
        </h2>
      </div>

      <div className="photo-grid">
        {photoTitles.map((title, index) => (
          <div key={index} className="photo-container">
            <img src={eventHeadPhoto} alt={title} className="passport-photo" />
            <p className="photo-title">{title}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventHead;
