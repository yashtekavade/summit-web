// OrgTeam.jsx
import React from "react";
import orgTeamPhoto from "../assets/org-team/group.webp";
import "./org.css";
import Footer from "../Components/Footer/Footer";

const OrgTeam = () => {
  return (
    <div>
      <div className="org-div">
        <h2 className="org-title">The Organising Team</h2>
      </div>
      <div>
        <img src={orgTeamPhoto} alt="Organising Team Heads" />
      </div>
      <Footer />
    </div>
  );
};

export default OrgTeam;
