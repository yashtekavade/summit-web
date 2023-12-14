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
            <option value="Football Men">Football (M)</option>
            <option value="Football Women">Football (W)</option>
            <option value="Cricket Men">Cricket (M)</option>
            <option value="Basketball Men">Basketball (M)</option>
            <option value="Basketball Women">Basketball (W)</option>
            <option value="Volleyball Men">Volleyball (M)</option>
            <option value="Volleyball Women">Volleyball (W)</option>
            <option value="Kabaddi Men">Kabaddi (M)</option>
            <option value="Kabaddi Women">Kabaddi (W)</option>
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
        {formData.sports === "Kabaddi Women" &&
          generatePlayerInputs(12, "Kabaddi Women")}
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
                <option value="Esports_Valorant">Valorant</option>
                <option value="Esports_BGMI">BGMI</option>
              </select>
            </label>
          </>
        )}{" "}
        */}
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
