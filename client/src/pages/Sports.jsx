import React from "react";
import Cards from "../Components/Cards/Cards";
import Heading from "../Components/Heading/Heading";
import Preview from "../Components/Sportpreview/Sportpreview";
import "../App.css";
const sports = () => {
  return (
    <div data-scroll className="sports-page">
      <Heading></Heading>
      <Cards></Cards>
      <Preview></Preview>
    </div>
  );
};

export default sports;
