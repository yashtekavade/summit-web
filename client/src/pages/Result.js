import React from "react";
import { useLocation } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const { state } = useLocation();
  const title = state ? state.title : "Unknown";
  console.log(title);

  return (
    <div className="Result-body">
      <h1 className="result-heading">Results for {title}</h1>
      
    </div>
  );
};

export default Result;
