import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const sportsPlayerCount = {
  "Swimming(M)": 1,
  "Swimming(W)": 1,
};

const Form = (props) => {
  const navigate = useNavigate();

  const initialFormData = {
    collegeName: "",
    collegeType: "",
    collegeCity: "",
    collegeState: "",
    accommodation: "",
    inchargeDetails: "",
    captainDetails: "",
    captainMail: "",
    captainPhone: "",
    playerName1: "",
    playerEmail1: "",
    playerPhone1: "",
    extra: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update state for sports separately
    if (name === "sports") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else if (name !== "confirmSport") {
      // Ignore "confirmSport" changes
      setFormData({
        ...formData,
        [name]: value,
      });
    }

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

      setFormData((prevFormData) => ({
        ...prevFormData,
        ...newPlayerDetails,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle both text and image data
    const formDataWithImage = new FormData();

    // Append text data
    Object.entries(formData).forEach(([key, value]) => {
      formDataWithImage.append(key, value);
    });

    // Append image data
    formDataWithImage.append("image", image);

    try {
      // Make the POST request to the server URL
      const response = await axios.post(
        "https://pink-chicken-wig.cyclic.app/summit/register",
        formDataWithImage
      );

      console.log("Form submitted:", response.data);

      // Display success toast and navigate after a delay
      if (toast.success) {
        toast.success("Form submitted successfully!");

        setTimeout(() => {
          navigate("/");
        });
      }

      // Add additional logic for handling the response, displaying success message, etc.
    } catch (error) {
      console.error("Error submitting form:", error);

      // Display error toast
      toast.error("Error submitting form. Please try again.");

      // Add additional logic for handling the error, displaying error message, etc.
    }

    console.log(formData);
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
      setFormData((prevFormData) => {
        const newPlayerDetails = {};

        for (let i = 1; i <= playerCount; i++) {
          newPlayerDetails[`playerName${i}`] =
            prevFormData[`playerName${i}`] || "";
          newPlayerDetails[`playerEmail${i}`] =
            prevFormData[`playerEmail${i}`] || "";
          newPlayerDetails[`playerPhone${i}`] =
            prevFormData[`playerPhone${i}`] || "";
        }

        return {
          ...prevFormData,
          ...newPlayerDetails,
        };
      });
    }
  };

  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="form-container">
      <ToastContainer />
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
          College Name: <span className="-field">*</span>
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
          Confirm Sport: <span className="-field">*</span>
          <select
            className="form-select"
            name="sportsConfirm"
            value={formData.sports}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Sport</option>
            <option value="Swimming(M)">Swimming (M)</option>
            <option value="Swimming(W)">Swimming (W)</option>
          </select>
        </label>

        <label className="form-label">
          College Type: <span className="-field">*</span>
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
          College City: <span className="-field">*</span>
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
          College State: <span className="-field">*</span>
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
          Accommodation : <span className="-field">*</span>
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
          Sports Head: <span className="-field">*</span>
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
          Captain Mail: <span className="-field">*</span>
          <input
            className="form-input"
            type="email"
            name="captainMail"
            value={formData.captainMail}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="form-label">
          Captain PhoneNo: <span className="-field">*</span>
          <input
            className="form-input"
            type="tel"
            name="captainno"
            value={formData.captainno}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="form-label">
          Select Sports
          <select
            className="form-select"
            name="extra"
            value={formData.extra}
            onChange={handleSportsChange}
            required
          >
            <option value="">Select Sports</option>
            <option value="Freestyle ">Freestyle 50/100m</option>
            <option value="Backstroke">Backstroke 50/100m</option>
            <option value="Breaststroke">Breaststroke 50/100m</option>
            <option value="Butterfly">Butterfly 50/100m</option>
            <option value="Freestyle Relay">Freestyle Relay 4/50m</option>
            <option value="Medley Relay">Medley Relay 4/50m</option>
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

        <button
          className="form-button"
          type="button"
          onClick={() => {
            const paymentUrl = "https://forms.gle/XkjHLXptYd4o1zxk8";

            // Open the payment URL in a new window
            window.open(paymentUrl, "_blank");
          }}
        >
          Upload ScreenShot (Required)
        </button>

        <h1 className="heading">DON'T SPAM CLICK SUBMIT BUTTON </h1>

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
