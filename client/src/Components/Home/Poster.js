import React from "react";
import post from "../../assets/images/post.jpg";

const Poster = () => {
  return (
    <section className="landscape-section">
      <img src={post} alt="Landscape" />
      <div>
        <p>11 Events</p>
        <p>1,500 Colleges</p>
        <p>40,000 Participants</p>
        <p>800,000 Visitors</p>
      </div>
    </section>
  );
};

export default Poster;
