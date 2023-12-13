import React from "react";
import "./Heading.css";
import b1 from "../../assets/images/1.jpg";

const Heading = () => {
  return (
    <div className="PageHeading">
      <div className="MainHeading">
        <h1>
          How Far Will <br />
          You Go ?
        </h1>
      </div>
      <div className="MainHeading-img">
        {" "}
        <img src={b1} />
      </div>
    </div>
  );
};

export default Heading;
