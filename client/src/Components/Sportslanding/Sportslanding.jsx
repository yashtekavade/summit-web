import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";

import "./Sportslanding.css";

const SportsCard = ({ title, link }) => {
  return (
    <div className="sports-card">
      <h3>{title}</h3>
      <Link to={link}>Register</Link>
    </div>
  );
};

const Sportslanding = () => {
  return (
    <div>
      <Navbar />
      <div className="sports-landing-container">
        <h2>Select a Sport</h2>
        <div className="sports-list">
          <SportsCard title="Cricket (M)" link="/register/Cricket(M)" />
          <SportsCard title="Football (M)" link="/register/Football(M)" />
          <SportsCard title="Football (W)" link="/register/Football(W)" />
          <SportsCard title="Basketball (M)" link="/register/Basketball(M)" />
          <SportsCard title="Basketball (W)" link="/register/Basketball(W)" />
          <SportsCard title="Volleyball (M)" link="/register/Volleyball(M)" />
          <SportsCard title="Volleyball (W)" link="/register/Volleyball(W)" />
          <SportsCard title="Kabaddi (M)" link="/register/Kabaddi" />
          <SportsCard title="Badminton (M)" link="/register/Badminton(M)" />
          <SportsCard title="Badminton (W)" link="/register/Badminton(W)" />
          <SportsCard
            title="Table Tennis (M)"
            link="/register/TableTennis(M)"
          />
          <SportsCard
            title="Table Tennis (W)"
            link="/register/TableTennis(W)"
          />
          <SportsCard title="Lawn Tennis (M)" link="/register/LawnTennis(M)" />
          <SportsCard title="Lawn Tennis (W)" link="/register/LawnTennis(W)" />
          <SportsCard title="Chess (M)" link="/register/Chess(M)" />
          <SportsCard title="Chess (W)" link="/register/Chess(W)" />
          <SportsCard title="Swimming (M)" link="/register/Swimming(M)" />
          <SportsCard title="Swimming (W)" link="/register/Swimming(W)" />
          <SportsCard title="Esports BGMI" link="/register/Esports_BGMI" />
          <SportsCard
            title="Esports Valorant"
            link="/register/Esports_Valorant"
          />
        </div>
      </div>
    </div>
  );
};

export default Sportslanding;
