import React, { useState } from "react";
import Sportsaval from "../Components/Sportsaval/Sportsaval";
import "./Admin.css";

const Admin = () => {
  const [selectedSportDetails, setSelectedSportDetails] = useState(null);

  const handleSportSelection = (selectedSportDetails) => {
    console.log("Sport details:", selectedSportDetails);

    // Set the selected sport details in the state
    setSelectedSportDetails(selectedSportDetails);
  };

  console.log("Selected Sport Details in State:", selectedSportDetails);

  return (
    <div>
      <Sportsaval onSelectSport={handleSportSelection} />

      {selectedSportDetails && (
        <div>
          <h2>Selected Sport Details</h2>

          {/* Display general information */}
          <div>
            <strong>College Name:</strong> {selectedSportDetails[0].collegeName}
          </div>
          <div>
            <strong>College City:</strong> {selectedSportDetails[0].collegeCity}
          </div>
          <div>
            <strong>College State:</strong>{" "}
            {selectedSportDetails[0].collegeState}
          </div>
          <div>
            <strong>College Type:</strong> {selectedSportDetails[0].collegeType}
          </div>
          <div>
            <strong>Captain's Name:</strong>{" "}
            {selectedSportDetails[0].captainDetails}
          </div>
          <div>
            <strong>Captain's Mail:</strong>{" "}
            {selectedSportDetails[0].captainMail}
          </div>

          <div>
            <strong>Captain's Phone Number:</strong>{" "}
            {selectedSportDetails[0].captainno}
          </div>
          {/* Display player details */}
          <ul>
            {[...Array(16).keys()].map((playerIndex) => (
              <li key={playerIndex}>
                <strong>Player {playerIndex + 1}:</strong>
                <div>
                  <span>
                    Name:{" "}
                    {selectedSportDetails[0][`playerName${playerIndex + 1}`]}
                  </span>
                </div>
                <div>
                  <span>
                    Email:{" "}
                    {selectedSportDetails[0][`playerEmail${playerIndex + 1}`]}
                  </span>
                </div>
                <div>
                  <span>
                    Phone:{" "}
                    {selectedSportDetails[0][`playerPhone${playerIndex + 1}`]}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Display other details */}
          <div>
            <strong>Sports Confirm:</strong>{" "}
            {selectedSportDetails[0].sportsConfirm}
          </div>
          {/* Add other details as needed */}
        </div>
      )}
    </div>
  );
};

export default Admin;
