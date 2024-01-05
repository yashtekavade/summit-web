import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  const [selectedSportDetails, setSelectedSportDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSelectSport = async (sport) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(
        "https://pink-chicken-wig.cyclic.app/summit/sport-details",
        { title: sport },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      console.log("Sport details:", data);
      console.log("Sport selected:", sport);

      // Navigate to the result page with the selected sport details as state
      navigate("/admin/result", { state: { selectedSportDetails: data } });
    } catch (error) {
      console.error("Axios error:", error);
      setError("Error fetching sport details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="sports-landing-container">
        <h2>Select a Sport</h2>
        <div className="sports-list">
          <SportsCard onSelectSport={handleSelectSport} title="Cricket(M)" />
          <SportsCard onSelectSport={handleSelectSport} title="Football(M)" />
          <SportsCard onSelectSport={handleSelectSport} title="Football(W)" />
          <SportsCard onSelectSport={handleSelectSport} title="Basketball(M)" />
          <SportsCard onSelectSport={handleSelectSport} title="Basketball(W)" />
          <SportsCard onSelectSport={handleSelectSport} title="Volleyball(M)" />
          <SportsCard onSelectSport={handleSelectSport} title="Volleyball(W)" />
          <SportsCard onSelectSport={handleSelectSport} title="Kabaddi" />
          <SportsCard onSelectSport={handleSelectSport} title="Badminton(M)" />
          <SportsCard onSelectSport={handleSelectSport} title="Badminton(W)" />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Table Tennis(M)"
          />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Table Tennis(W)"
          />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Lawn Tennis(M)"
          />
          <SportsCard
            onSelectSport={handleSelectSport}
            title="Lawn Tennis(W)"
          />
          <SportsCard onSelectSport={handleSelectSport} title="Chess(M)" />
          <SportsCard onSelectSport={handleSelectSport} title="Chess(W)" />
          <SportsCard onSelectSport={handleSelectSport} title="Swimming(M)" />
          <SportsCard onSelectSport={handleSelectSport} title="Swimming(W)" />
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
