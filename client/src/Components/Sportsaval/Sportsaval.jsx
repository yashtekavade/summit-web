import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Navbar from "../Navbar/Navbar.jsx";

import "./Sportsaval.css";

const SportsCard = ({ title }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/admin/result", { state: { title } });
  };

  return (
    <div className="sports-card" onClick={handleClick}>
      <h3>{title}</h3>
      <div>Register</div>
    </div>
  );
};

const Sportsaval = () => {
  return (
    <div>
      <Navbar />
      <div className="sports-landing-container">
        <h2>Select a Sport</h2>
        <div className="sports-list">
          <SportsCard title="Cricket (M)" />
          <SportsCard title="Football Men" />
          <SportsCard title="Football Women" />
          <SportsCard title="Basketball Men" />
          <SportsCard title="Basketball Women" />
          <SportsCard title="Volleyball Men" />
          <SportsCard title="Volleyball Women" />
          <SportsCard title="Kabaddi" />
          <SportsCard title="Badminton Men" />
          <SportsCard title="Badminton Women" />
          <SportsCard title="Table Tennis Men" />
          <SportsCard title="Table Tennis Women" />
          <SportsCard title="Lawn Tennis Men" />
          <SportsCard title="Lawn Tennis Women" />
          <SportsCard title="Chess Men" />
          <SportsCard title="Chess Women" />
          <SportsCard title="Swimming Men" />
          <SportsCard title="Swimming Women" />
          <SportsCard title="Esports BGMI" />
          <SportsCard title="Esports Valorant" />
        </div>
      </div>
    </div>
  );
};

export default Sportsaval;
