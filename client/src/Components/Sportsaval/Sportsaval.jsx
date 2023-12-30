import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import "./Sportsaval.css";

const SportsCard = ({ title, onSelectSport }) => {
  const handleClick = () => {
    onSelectSport(title);
  };

  return (
    <div className="sports-card" onClick={handleClick}>
      <h3>{title}</h3>
      <div>Register</div>
    </div>
  );
};

const Sportsaval = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const navigate = useNavigate();

  const handleSelectSport = (sport) => {
    setSelectedSport(sport);
    navigate("/admin/result", { state: { title: sport } });
  };
  return (
    <div>
      <Navbar />
      <div className="sports-landing-container">
        <h2>Select a Sport</h2>
        <div className="sports-list">
          <SportsCard onSelectSport={handleSelectSport} title="Cricket (M)" />
          <SportsCard onSelectSport={handleSelectSport} title="Football Men" />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Football Women"
          />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Basketball Men"
          />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Basketball Women"
          />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Volleyball Men"
          />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Volleyball Women"
          />
          <SportsCard onSelectSport={handleSelectSport} title="Kabaddi" />
          <SportsCard onSelectSport={handleSelectSport} title="Badminton Men" />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Badminton Women"
          />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Table Tennis Men"
          />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Table Tennis Women"
          />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Lawn Tennis Men"
          />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Lawn Tennis Women"
          />
          <SportsCard onSelectSport={handleSelectSport} title="Chess Men" />
          <SportsCard onSelectSport={handleSelectSport} title="Chess Women" />
          <SportsCard onSelectSport={handleSelectSport} title="Swimming Men" />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Swimming Women"
          />
          <SportsCard onSelectSport={handleSelectSport} title="Esports BGMI" />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Esports Valorant"
          />
        </div>
      </div>
    </div>
  );
};

export default Sportsaval;
