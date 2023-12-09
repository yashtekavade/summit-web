import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    sports: "",
    collegeName: "",
    inchargeDetails: "",
    captainDetails: "",
    playerList: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sports Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Sports Selection:
          <select
            className="form-select"
            name="sports"
            value={formData.sports}
            onChange={handleInputChange}
            required
          >
            {/* Options here */}
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

        <label className="form-label">
          Player List:
          <textarea
            className="form-textarea"
            name="playerList"
            value={formData.playerList}
            onChange={handleInputChange}
            required
          />
        </label>

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
