import React from "react";
import { useParams } from "react-router-dom";

const Result = () => {
  const { title } = useParams();
  return (
    <div>
      {" "}
      <h2>Results for {title}</h2>
    </div>
  );
};

export default Result;
