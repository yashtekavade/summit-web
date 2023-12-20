import React, { useState } from "react";
import "./Form.css";

const sportsPlayerCount = {
  "Swimming(M)": 1,
  "Swimming(W)": 1,
};

const Form = (props) => {
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

    // Create a FormData object to handle both text and image data
    const formDataWithImage = new FormData();

    // Append text data
    Object.entries(formData).forEach(([key, value]) => {
      formDataWithImage.append(key, value);
    });

    // Append image data
    formDataWithImage.append("image", image);

    console.log("Form submitted:", formDataWithImage);
    // Add additional logic for form submission, validation, etc.
  };

  const renderPlayerInputs = () => {
    const sport = props.sport; // Use props.sport instead of formData.sports
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

  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registration Form</h2>
      <h6 className="form-subtitle">
        <ul>
          <li>
            Maximum 2 players are allowed for each category from each college.
          </li>
          <li>One player can participate in any three individual events.</li>
        </ul>
      </h6>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          College Name: <span className="required-field">*</span>
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
          College Type: <span className="required-field">*</span>
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
          College City: <span className="required-field">*</span>
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
          College State: <span className="required-field">*</span>
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
          Accommodation Required: <span className="required-field">*</span>
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
          Sports Head: <span className="required-field">*</span>
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
            <option value="Freestyle">Freestyle</option>
            <option value="Backstroke">Backstroke</option>
            <option value="Breaststroke">Breaststroke</option>
            <option value="Butterfly">Butterfly</option>
            <option value="Freestyle Relay">Freestyle Relay</option>
            <option value="Medley Relay">Medley Relay</option>
          </select>
        </label>

        {renderPlayerInputs()}

        <button
          className="form-button"
          type="button"
          onClick={() => {
            // Replace 'https://paytm.me/s3EQ-xk' with your actual payment URL
            const paymentUrl = "https://paytm.me/s3EQ-xk";

            // Open the payment URL in a new window
            window.open(paymentUrl, "_blank");
          }}
        >
          Pay Now
        </button>

        <label className="form-label">
          Upload Image: <span className="required-field">*</span>
          <input
            className="form-input"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
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
