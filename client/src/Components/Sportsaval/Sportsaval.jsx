import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";

import "./Sportsaval.css";

const SportsCard = ({ title, subtitle, link }) => {
  return (
    <div className="sports-card">
      <h3>{title}</h3>
      <p className="subtle-subtitle">{subtitle}</p>
      <Link to={`/admin/result/${encodeURIComponent(title)}`}>Register</Link>
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
          <SportsCard title="Cricket (M)" link="/admin/result/:title" />
          <SportsCard title="Football Men" link="/admin/result/:title" />
          <SportsCard title="Football Women" link="/admin/result/:title" />
          <SportsCard title="Basketball Men" link="/admin/result/:title" />
          <SportsCard title="Basketball Women" link="/admin/result/:title" />
          <SportsCard title="Volleyball Men" link="/admin/result/:title" />
          <SportsCard title="Volleyball Women" link="/admin/result/:title" />
          <SportsCard title="Kabaddi" link="/admin/result/:title" />
          <SportsCard title="Badminton Men" link="/admin/result/:title" />
          <SportsCard title="Badminton Women" link="/admin/result/:title" />
          <SportsCard title="Table Tennis Men" link="/admin/result/:title" />
          <SportsCard title="Table Tennis Women" link="/admin/result/:title" />
          <SportsCard title="Lawn Tennis Men" link="/admin/result/:title" />
          <SportsCard title="Lawn Tennis Women" link="/admin/result/:title" />
          <SportsCard title="Chess Men" link="/admin/result/:title" />
          <SportsCard title="Chess Women" link="/admin/result/:title" />
          <SportsCard title="Swimming Men" link="/admin/result/:title" />
          <SportsCard title="Swimming Women" link="/admin/result/:title" />
          <SportsCard title="Esports BGMI" link="/admin/result/:title" />
          <SportsCard title="Esports Valorant" link="/admin/result/:title" />
        </div>
      </div>
    </div>
  );
};

export default Sportsaval;
