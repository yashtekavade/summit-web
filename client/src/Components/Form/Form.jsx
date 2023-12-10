import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const initialFormData = {
    sports: "",
    collegeName: "",
    collegeType: "",
    inchargeDetails: "",
    captainDetails: "",
    esportsType: "", // Added esportsType field
    players: [],
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlayersInputChange = (index, e) => {
    const { name, value } = e.target;
    const newPlayers = [...formData.players];
    newPlayers[index][name] = value;

    setFormData({
      ...formData,
      players: newPlayers,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add additional logic for form submission, validation, etc.
  };

  const generatePlayerInputs = (count, category) => {
    const playerInputs = [];
    for (let i = 0; i < count; i++) {
      playerInputs.push(
        <div key={i}>
          <label className="form-label">
            {category} Player {i + 1} Name:
            <input
              className="form-input"
              type="text"
              name={`playerName-${category}-${i}`}
              value={formData.players[i]?.name || ""}
              onChange={(e) => handlePlayersInputChange(i, e)}
              required
            />
          </label>

          <label className="form-label">
            {category} Player {i + 1} Email:
            <input
              className="form-input"
              type="email"
              name={`playerEmail-${category}-${i}`}
              value={formData.players[i]?.email || ""}
              onChange={(e) => handlePlayersInputChange(i, e)}
              required
            />
          </label>

          <label className="form-label">
            {category} Player {i + 1} Phone:
            <input
              className="form-input"
              type="tel"
              name={`playerPhone-${category}-${i}`}
              value={formData.players[i]?.phone || ""}
              onChange={(e) => handlePlayersInputChange(i, e)}
              required
            />
          </label>
        </div>
      );
    }
    return playerInputs;
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sports Registration Form</h2>
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
          Sports Selection:
          <select
            className="form-select"
            name="sports"
            value={formData.sports}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Sports</option>
            <option value="Football">Football</option>
            <option value="Cricket">Cricket</option>
            <option value="Basketball">Basketball</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Kabaddi">Kabaddi</option>
            <option value="Badminton">Badminton</option>
            <option value="Table Tennis">Table Tennis</option>
            <option value="Lawn Tennis">Lawn Tennis</option>
            <option value="Chess">Chess</option>
            <option value="Swimming">Swimming</option>
            <option value="Esports">Esports</option>
          </select>
        </label>

        <label className="form-label">
          Sports Incharge Details:
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
          Captain Details:
          <input
            className="form-input"
            type="text"
            name="captainDetails"
            value={formData.captainDetails}
            onChange={handleInputChange}
            required
          />
        </label>

        {formData.sports === "Football" && generatePlayerInputs(18, "Football")}
        {formData.sports === "Cricket" && generatePlayerInputs(16, "Cricket")}
        {formData.sports === "Basketball" &&
          generatePlayerInputs(12, "Basketball")}
        {formData.sports === "Volleyball" &&
          generatePlayerInputs(12, "Volleyball")}
        {formData.sports === "Kabaddi" && generatePlayerInputs(12, "Kabaddi")}
        {formData.sports === "Badminton" && (
          <>
            {generatePlayerInputs(6, "Badminton Men")}
            {generatePlayerInputs(4, "Badminton Women")}
          </>
        )}
        {formData.sports === "Table Tennis" && (
          <>
            {generatePlayerInputs(5, "Table Tennis Men")}
            {generatePlayerInputs(4, "Table Tennis Women")}
          </>
        )}
        {formData.sports === "Chess" && generatePlayerInputs(6, "Chess")}
        {formData.sports === "Lawn Tennis" && (
          <>
            {generatePlayerInputs(4, "Lawn Tennis Men")}
            {generatePlayerInputs(4, "Lawn Tennis Women")}
          </>
        )}
        {formData.sports === "Swimming" && generatePlayerInputs(4, "Swimming")}
        {formData.sports === "Esports" && (
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
                <option value="Valorant">Valorant</option>
                <option value="BGMI">BGMI</option>
              </select>
            </label>

            {formData.esportsType === "Valorant" &&
              generatePlayerInputs(5, "Esports Valorant")}
            {formData.esportsType === "BGMI" &&
              generatePlayerInputs(4, "Esports BGMI")}
          </>
        )}

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
