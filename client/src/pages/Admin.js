import React, { useState } from "react";
import Sportsaval from "../Components/Sportsaval/Sportsaval";
import "./Admin.css";

const Admin = () => {
  const [selectedSportDetails, setSelectedSportDetails] = useState(null);

  const handleSportSelection = async (selectedSport) => {
    try {
      // Send a POST request with the selected sport name
      const response = await fetch(
        "https://kvdwjdqr-4000.inc1.devtunnels.ms/summit/sport-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: selectedSport }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Sport details:", data);

      setSelectedSportDetails(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div>
      <Sportsaval onSelectSport={handleSportSelection} />

      {selectedSportDetails && (
        <div>
          <h2>Selected Sport Details</h2>
          <p>Title: {selectedSportDetails.title}</p>
          {/* Display other details based on the server response */}
        </div>
      )}
    </div>
  );
};

export default Admin;
