// Result.jsx

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const { state } = useLocation();
  const collegeDetailsArray = state ? state.selectedSportDetails : [];

  // State to track the expanded college (if any)
  const [expandedCollege, setExpandedCollege] = useState(null);

  const handleTileClick = (collegeName) => {
    // Toggle the expansion state for the clicked college
    setExpandedCollege((prevCollege) =>
      prevCollege === collegeName ? null : collegeName
    );
  };

  return (
    <div className="result-frame">
      <div className="Result-body">
        <h1 className="result-heading">Results for {state.sportsConfirm}</h1>
        <div className="college-tiles">
          {collegeDetailsArray.map((college) => (
            <div
              key={college.collegeName}
              className={`college-tile ${
                expandedCollege === college.collegeName ? "expanded" : ""
              }`}
              onClick={() => handleTileClick(college.collegeName)}
            >
              <h2>{college.collegeName}</h2>
              {/* Additional details can be displayed when expanded */}
              {expandedCollege === college.collegeName && (
                <div className="expanded-details">
                  <p>
                    <strong>City:</strong> {college.collegeCity}
                  </p>
                  <p>
                    <strong>State:</strong> {college.collegeState}
                  </p>
                  <p>
                    <strong>Type:</strong> {college.collegeType}
                  </p>
                  <p>
                    <strong>Accommodation:</strong> {college.accommodation}
                  </p>
                  <p>
                    <strong>Team Captain:</strong> {college.captainDetails}
                  </p>
                  <p>
                    <strong>Captain Email:</strong> {college.captainMail}
                  </p>
                  <p>
                    <strong>Incharge Details:</strong> {college.inchargeDetails}
                  </p>

                  <h3>Player Details</h3>
                  <ul>
                    {[...Array(16).keys()].map((playerIndex) => (
                      <li key={playerIndex}>
                        <strong>Player {playerIndex + 1}:</strong>
                        <div>
                          <span>
                            Name: {college[`playerName${playerIndex + 1}`]}
                          </span>
                        </div>
                        <div>
                          <span>
                            Email: {college[`playerEmail${playerIndex + 1}`]}
                          </span>
                        </div>
                        <div>
                          <span>
                            Phone: {college[`playerPhone${playerIndex + 1}`]}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
