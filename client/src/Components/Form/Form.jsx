import React, { useState } from "react";
import "./Form.css";

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
    esportsType: "",
    players: [],
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Add logic for specific actions when accommodation is selected
    if (name === "accommodation" && value === "Yes") {
      console.log(
        "A call will be made to sports head or sport captain regarding accommodation."
      );
    }
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
          Sports Selection:
          <select
            className="form-select"
            name="sports"
            value={formData.sports}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Sports</option>
            <option value="Football Men">Football (M)</option>
            <option value="Football Women">Football (W)</option>
            <option value="Cricket Men">Cricket (M)</option>
            <option value="Basketball Men">Basketball (M)</option>
            <option value="Basketball Women">Basketball (W)</option>
            <option value="Volleyball Men">Volleyball (M)</option>
            <option value="Volleyball Women">Volleyball (W)</option>
            <option value="Kabaddi Men">Kabaddi (M)</option>
            <option value="Badminton Men">Badminton (M)</option>
            <option value="Badminton Women">Badminton (W)</option>
            <option value="Table Tennis Men">Table Tennis (M)</option>
            <option value="Table Tennis Women">Table Tennis (W)</option>
            <option value="Lawn Tennis Men">Lawn Tennis (M)</option>
            <option value="Lawn Tennis Women">Lawn Tennis (W)</option>
            <option value="Chess Men">Chess (M)</option>
            <option value="Chess Women">Chess (W)</option>
            <option value="Swimming Men">Swimming (M)</option>
            <option value="Swimming Women">Swimming (W)</option>
            <option value="Esports">Esports</option>
          </select>
        </label>

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

        {formData.sports === "Cricket Men" &&
          generatePlayerInputs(16, "Cricket Men")}
        {formData.sports === "Football Men" &&
          generatePlayerInputs(18, "Football Men")}
        {formData.sports === "Football Women" &&
          generatePlayerInputs(18, "Football Women")}
        {formData.sports === "Basketball Men" &&
          generatePlayerInputs(12, "Basketball Men")}
        {formData.sports === "Basketball Women" &&
          generatePlayerInputs(12, "Basketball Women")}
        {formData.sports === "Volleyball Men" &&
          generatePlayerInputs(12, "Volleyball Men")}
        {formData.sports === "Volleyball Women" &&
          generatePlayerInputs(12, "Volleyball Women")}
        {formData.sports === "Kabaddi Men" &&
          generatePlayerInputs(12, "Kabaddi Men")}
        {formData.sports === "Badminton Men" &&
          generatePlayerInputs(6, "Badminton Men")}
        {formData.sports === "Badminton Women" &&
          generatePlayerInputs(4, "Badminton Women")}
        {formData.sports === "Table Tennis Men" &&
          generatePlayerInputs(5, "Table Tennis Men")}
        {formData.sports === "Table Tennis Women" &&
          generatePlayerInputs(4, "Table Tennis Women")}
        {formData.sports === "Lawn Tennis Men" &&
          generatePlayerInputs(4, "Lawn Tennis Men")}
        {formData.sports === "Lawn Tennis Women" &&
          generatePlayerInputs(4, "Lawn Tennis Women")}
        {formData.sports === "Chess Men" &&
          generatePlayerInputs(6, "Chess Men")}
        {formData.sports === "Chess Women" &&
          generatePlayerInputs(6, "Chess Women")}
        {formData.sports === "Swimming Men" &&
          generatePlayerInputs(4, "Swimming Men")}
        {formData.sports === "Swimming Women" &&
          generatePlayerInputs(4, "Swimming Women")}
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
