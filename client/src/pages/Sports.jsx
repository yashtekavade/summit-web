import React from "react";
import Cards from "../Components/Cards/Cards";
import Heading from "../Components/Heading/Heading";
import Preview from "../Components/Sportpreview/Sportpreview";

const sports = () => {
  return (
    <div>
      <Heading></Heading>
      <Cards></Cards>
      <Preview></Preview>
    </div>
  );
};

export default sports;
