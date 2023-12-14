import React, { useState } from "react";
import "./Form.css";

const sportsPlayerCount = {
  "Cricket(M)": 16,
  "Football(M)": 18,
  "Football(W)": 18,
  "Basketball(M)": 12,
  "Basketball(W)": 12,
  "Volleyball(M)": 12,
  "Volleyball(W)": 12,
  Kabaddi: 12,
  "Badminton(M)": 6,
  "Badminton(W)": 6,
  "Table Tennis(M)": 5,
  "Table Tennis(W)": 4,
  "Lawn Tennis(M)": 4,
  "Lawn Tennis(W)": 4,
  "Chess(M)": 6,
  "Chess(W)": 6,
  "Swimming(M)": 6,
  "Swimming(W)": 6,
  Esports_BGMI: 4,
  Esports_Valorant: 5,
};

const Form = () => {
  const initialFormData = {
    sports: "",
    collegeName: "",
    collegeType: "",
    collegeCity: "",
    collegeState: "",
    accommodation: "",
    inchargeDetails: "",
    captainDetails: "",
    playerName1: "",
    playerEmail1: "",
    playerPhone1: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "accommodation" && value === "Yes") {
      console.log(
        "A call will be made to sports head or sport captain regarding accommodation."
      );
    }

    // Reset player details when sports selection changes
    if (name === "sports") {
      const playerCount = sportsPlayerCount[value];
      const newPlayerDetails = {};

      for (let i = 1; i <= playerCount; i++) {
        newPlayerDetails[`playerName${i}`] = "";
        newPlayerDetails[`playerEmail${i}`] = "";
        newPlayerDetails[`playerPhone${i}`] = "";
      }

      setFormData({
        ...formData,
        ...newPlayerDetails,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add additional logic for form submission, validation, etc.
  };

  const renderPlayerInputs = () => {
    const sport = formData.sports;
    const playerCount = sportsPlayerCount[sport];

    if (!playerCount || playerCount <= 0) {
      return null;
    }

    const playerInputs = [];

    for (let i = 1; i <= playerCount; i++) {
      playerInputs.push(
        <div key={i}>
          <label className="form-label">
            Player {i} Name:
            <input
              className="form-input"
              type="text"
              name={`playerName${i}`}
              value={formData[`playerName${i}`]}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="form-label">
            Player {i} Email:
            <input
              className="form-input"
              type="email"
              name={`playerEmail${i}`}
              value={formData[`playerEmail${i}`]}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="form-label">
            Player {i} Phone No:
            <input
              className="form-input"
              type="tel"
              name={`playerPhone${i}`}
              value={formData[`playerPhone${i}`]}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
      );
    }

    return playerInputs;
  };
  const handleSportsChange = (e) => {
    const { name, value } = e.target;

    // Update the state only for the sports selection
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset player details when sports selection changes
    if (name === "sports") {
      const playerCount = sportsPlayerCount[value];
      const newPlayerDetails = {};

      for (let i = 1; i <= playerCount; i++) {
        newPlayerDetails[`playerName${i}`] = "";
        newPlayerDetails[`playerEmail${i}`] = "";
        newPlayerDetails[`playerPhone${i}`] = "";
      }

      // Update the state with the new player details
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...newPlayerDetails,
      }));
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          College Type:
          <select
            className="form-select"
            name="collegeType"
            value={formData.collegeType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select College Type</option>
            <option value="Private University">Private University</option>
            <option value="Government College">Government College</option>
            <option value="Engineering College">Engineering College</option>
          </select>
        </label>

        <label className="form-label">
          College Name:
          <input
            className="form-input"
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="form-label">
          College City:
          <input
            className="form-input"
            type="text"
            name="collegeCity"
            value={formData.collegeCity}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="form-label">
          College State:
          <input
            className="form-input"
            type="text"
            name="collegeState"
            value={formData.collegeState}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="form-label">
          Accommodation Required:
          <select
            className="form-select"
            name="accommodation"
            value={formData.accommodation}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        {formData.accommodation === "Yes" && (
          <div className="accommodation-message">
            A call will be made to sports head or sport captain regarding
            accommodation.
          </div>
        )}

        <label className="form-label">
          Sports Head:
          <input
            className="form-input"
            type="text"
            name="inchargeDetails"
            value={formData.inchargeDetails}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="form-label">
          Select Sports
          <select
            className="form-select"
            name="sports"
            value={formData.sports}
            onChange={handleSportsChange}
            required
          >
            <option value="">Select Sports</option>
            <option value="Football(M)">Football (M)</option>
            <option value="Football(W)">Football (W)</option>
            <option value="Cricket(M)">Cricket (M)</option>
            <option value="Basketball(M)">Basketball (M)</option>
            <option value="Basketball(W)">Basketball (W)</option>
            <option value="Volleyball(M)">Volleyball (M)</option>
            <option value="Volleyball(W)">Volleyball (W)</option>
            <option value="Kabaddi">Kabaddi (M)</option>
            <option value="Badminton(M)">Badminton (M)</option>
            <option value="Badminton(W)">Badminton (W)</option>
            <option value="Table Tennis(M)">Table Tennis (M)</option>
            <option value="Table Tennis(W)">Table Tennis (W)</option>
            <option value="Lawn Tennis(M)">Lawn Tennis (M)</option>
            <option value="Lawn Tennis(W)">Lawn Tennis (W)</option>
            <option value="Chess(M)">Chess (M)</option>
            <option value="Chess(W)">Chess (W)</option>
            <option value="Swimming(M)">Swimming (M)</option>
            <option value="Swimming(W)">Swimming (W)</option>
            <option value="Esports_Valorant">Esports-Valorant</option>
            <option value="Esports_BGMI">Esports-BGMI</option>
          </select>
        </label>

        {renderPlayerInputs()}

        <label className="form-label">
          Captain Name:
          <input
            className="form-input"
            type="text"
            name="captainDetails"
            value={formData.captainDetails}
            onChange={handleInputChange}
            required
          />
        </label>

        {/* {formData.sports === "Esports" && (
          <>
            <label className="form-label">
              Esports Type:
              <select
                className="form-select"
                name="esportsType"
                value={formData.esportsType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Esports Type</option>
                <option value="Esports_Valorant">Valorant</option>
                <option value="Esports_BGMI">BGMI</option>
              </select>
            </label>
          </>
        )} */}

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
