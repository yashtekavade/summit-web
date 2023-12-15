import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";

import "./Sportslanding.css";

const SportsCard = ({ title, subtitle, link }) => {
  return (
    <div className="sports-card">
      <h3>{title}</h3>
      <p className="subtle-subtitle">{subtitle}</p>
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
          <SportsCard
            title="Cricket (M)"
            subtitle="Rs. 8,000/-"
            link="/register/Cricket(M)"
          />
          <SportsCard
            title="Football Men"
            subtitle="Rs. 4,500/-"
            link="/register/Football(M)"
          />
          <SportsCard
            title="Football Women"
            subtitle="Rs. 4,500/-"
            link="/register/Football(W)"
          />
          <SportsCard
            title="Basketball Men"
            subtitle="Rs. 3,000/-"
            link="/register/Basketball(M)"
          />
          <SportsCard
            title="Basketball Women"
            subtitle="Rs. 1,800/-"
            link="/register/Basketball(W)"
          />
          <SportsCard
            title="Volleyball Men"
            subtitle="Rs. 2,200/-"
            link="/register/Volleyball(M)"
          />
          <SportsCard
            title="Volleyball Women"
            subtitle="Rs. 2,000/-"
            link="/register/Volleyball(W)"
          />
          <SportsCard
            title="Kabaddi"
            subtitle="Rs. 1,200/-"
            link="/register/Kabaddi"
          />
          <SportsCard
            title="Badminton Men"
            subtitle="Rs. 2,000/-"
            link="/register/Badminton(M)"
          />
          <SportsCard
            title="Badminton Women"
            subtitle="Rs. 1,500/-"
            link="/register/Badminton(W)"
          />
          <SportsCard
            title="Table Tennis Men"
            subtitle="Rs. 2,000/-"
            link="/register/TableTennis(M)"
          />
          <SportsCard
            title="Table Tennis Women"
            subtitle="Rs. 1,000/-"
            link="/register/TableTennis(W)"
          />
          <SportsCard
            title="Lawn Tennis Men"
            subtitle="Rs. 2,000/-"
            link="/register/LawnTennis(M)"
          />
          <SportsCard
            title="Lawn Tennis Women"
            subtitle="Rs. 1,200/-"
            link="/register/LawnTennis(W)"
          />
          <SportsCard
            title="Chess Men"
            subtitle="Rs. 1,200/-"
            link="/register/Chess(M)"
          />
          <SportsCard
            title="Chess Women"
            subtitle="Rs. 1,200/-"
            link="/register/Chess(W)"
          />
          <SportsCard
            title="Swimming Men"
            subtitle="Rs. 300/- Per head, per event ; Rs. 500/- Per Relay"
            link="/register/Swimming(W)"
          />
          <SportsCard
            title="Swimming Women"
            subtitle="Rs. 300/- Per head, per event ; Rs. 500/- Per Relay"
            link="/register/Swimming(W)"
          />
          <SportsCard
            title="Esports BGMI"
            subtitle="Rs. 200/- Per team"
            link="/register/Esports_BGMI"
          />
          <SportsCard
            title="Esports Valorant"
            subtitle="Rs. 300/- Per team"
            link="/register/Esports_Valorant"
          />
        </div>
      </div>
    </div>
  );
};

export default Sportslanding;
