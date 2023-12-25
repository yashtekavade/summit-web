// OrgTeam.jsx
import React from "react";
import orgTeamPhoto1 from "../assets/org-team/1.png";
import orgTeamPhoto2 from "../assets/org-team/2.png";
import orgTeamPhoto3 from "../assets/org-team/3.png";
import orgTeamPhoto4 from "../assets/org-team/4.png";
import orgTeamPhoto5 from "../assets/org-team/5.png";
import orgTeamPhoto6 from "../assets/org-team/6.png";
import orgTeamPhoto7 from "../assets/org-team/7.png";
import orgTeamPhoto8 from "../assets/org-team/8.png";
import orgTeamPhoto9 from "../assets/org-team/9.png";
import orgTeamPhoto10 from "../assets/org-team/10.png";
import orgTeamPhoto11 from "../assets/org-team/11.png";
import orgTeamPhoto12 from "../assets/org-team/12.png";
import "./org.css";

const OrgTeam = () => {
  return (
    <div>
      <div className="org-div">
        <h2 className="org-title">The Organising Team.</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <img
          src={orgTeamPhoto1}
          alt="Organising Team Head 1"
          style={{ width: "48%" }}
        />
        <img
          src={orgTeamPhoto2}
          alt="Organising Team Head 2"
          style={{ width: "48%" }}
        />
      </div>

      {/* Three photos of sports proof */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <img
          src={orgTeamPhoto3}
          alt="Organising Team Sports Proof 1"
          style={{ width: "32%" }}
        />
        <img
          src={orgTeamPhoto4}
          alt="Organising Team Sports Proof 2"
          style={{ width: "32%" }}
        />
        <img
          src={orgTeamPhoto5}
          alt="Organising Team Sports Proof 3"
          style={{ width: "32%" }}
        />
      </div>

      {/* Four heads each in a row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        <img
          src={orgTeamPhoto6}
          alt="Organising Team Head 3"
          style={{ width: "60%", height: "auto" }}
        />
        <img
          src={orgTeamPhoto7}
          alt="Organising Team Head 4"
          style={{ width: "60%", height: "auto" }}
        />
        <img
          src={orgTeamPhoto8}
          alt="Organising Team Head 5"
          style={{ width: "60%", height: "auto" }}
        />
        <img
          src={orgTeamPhoto9}
          alt="Organising Team Head 6"
          style={{ width: "60%", height: "auto" }}
        />
        <img
          src={orgTeamPhoto10}
          alt="Organising Team Head 7"
          style={{ width: "60%", height: "auto" }}
        />
        <img
          src={orgTeamPhoto11}
          alt="Organising Team Head 8"
          style={{ width: "60%", height: "auto" }}
        />
        <img
          src={orgTeamPhoto12}
          alt="Organising Team Head 9"
          style={{ width: "60%", height: "auto" }}
        />
        {/* Add more photos as needed */}
      </div>
    </div>
  );
};

export default OrgTeam;
