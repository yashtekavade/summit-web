import React from "react";
import AboutImg from "../../assets/hi.png";

export const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Yash Tekavade
        <img src={AboutImg} alt="" className="hi__img" />
      </h1>
      <h3 className="home__subtitle">Front-End Developer</h3>
      <p className="home_description">
        Building immersive digital experiences through code and design.
      </p>
    </div>
  );
};

export default Data;
