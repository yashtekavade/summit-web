import React, { useState } from "react";
import Sportsaval from "../Components/Sportsaval/Sportsaval";
import TeamDetails from "../Components/TeamDetails/TeamDetails"; // Import the TeamDetails component
import "./Admin.css";

const Admin = () => {
  const [selectedSportDetails, setSelectedSportDetails] = useState(null);

  const handleSportSelection = (selectedSportDetails) => {
    console.log("Sport details:", selectedSportDetails);

    // Set the selected sport details in the state
    setSelectedSportDetails(selectedSportDetails);
  };

  return (
    <div>
      <Sportsaval onSelectSport={handleSportSelection} />

      {selectedSportDetails && (
        <div>
          <h2>Selected Sport Details</h2>
          {/* Use the TeamDetails component to display the data */}
          <TeamDetails teamData={selectedSportDetails} />
        </div>
      )}
    </div>
  );
};

export default Admin;
