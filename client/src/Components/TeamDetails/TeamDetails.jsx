import React from "react";

const TeamDetails = ({ teamData }) => {
  return (
    <div>
      <h2>Team Details</h2>
      <p>
        <strong>Accommodation:</strong> {teamData.accommodation}
      </p>
      <p>
        <strong>Captain:</strong> {teamData.captainDetails}
      </p>
      <p>
        <strong>Captain Email:</strong> {teamData.captainMail}
      </p>
      {/* Add more fields based on your data */}
        <h3>Players:</h3>
      <ul>
        {Array.from({ length: 16 }, (_, index) => index + 1).map((index) => (
          <li key={index}>
            <strong>Name:</strong> {teamData[`playerName${index}`]} |{" "}
            <strong>Email:</strong> {teamData[`playerEmail${index}`]} |{" "}
            <strong>Phone:</strong> {teamData[`playerPhone${index}`]}
          </li>
        ))}
      </ul>
      <h3>College Details:</h3>
      <p>
        <strong>College Name:</strong> {teamData.collegeName}
      </p>
      <p>
        <strong>College City:</strong> {teamData.collegeCity}
      </p>
      {/* Add more college details based on your data */}
      <h3>Sports Confirmation:</h3>
      <p>
        <strong>Sports Confirm:</strong> {teamData.sportsConfirm}
      </p>
    </div>
  );
};

export default TeamDetails;
