// EventHead.jsx
import React from "react";
import eventHeadPhoto from "../../assets/event-head/photo.png";
import Footer from "../Footer/Footer";

const EventHead = () => {
  return (
    <div>
      <h2>Event Head</h2>
      {/* One photo */}
      <img src={eventHeadPhoto} alt="Event Head" style={{ width: "100%" }} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventHead;
