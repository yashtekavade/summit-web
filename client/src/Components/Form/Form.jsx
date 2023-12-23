import React, { useState } from "react";
import axios from "axios";
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

const Form = (props) => {
	const initialFormData = {
		collegeName: "",
		collegeType: "",
		collegeCity: "",
		collegeState: "",
		accommodation: "",
		inchargeDetails: "",
		captainDetails: "",
		captainMail: "",
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
				"https://kvdwjdqr-3000.inc1.devtunnels.ms/summit/register",
				formDataWithImage
			);

			console.log("Form submitted:", response.data);
			// Add additional logic for handling the response, displaying success message, etc.
		} catch (error) {
			console.error("Error submitting form:", error);
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
			<form onSubmit={handleSubmit}>
				<label className="form-label">
					College Name: <span className="-field">*</span>
					<input
						className="form-input"
						type="text"
						name="collegeName"
						value={formData.collegeName}
						onChange={handleInputChange}
						
					/>
				</label>


				<label className="form-label">
					Confirm Sport: <span className="-field">*</span>
					<select
						className="form-select"
						name="sportsConfirm"
						value={formData.sports}
						onChange={handleInputChange}
						
					>
						<option value="">Select Sport</option>
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
				

				<label className="form-label">
					College Type: <span className="-field">*</span>
					<select
						className="form-select"
						name="collegeType"
						value={formData.collegeType}
						onChange={handleInputChange}
						
					>
						<option value="">Select College Type</option>
						<option value="Private University">
							Private University
						</option>
						<option value="Government College">
							Government College
						</option>
						<option value="Engineering College">
							Engineering College
						</option>
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
						
					/>
				</label>

				<label className="form-label">
					Accommodation :{" "}
					<span className="-field">*</span>
					<select
						className="form-select"
						name="accommodation"
						value={formData.accommodation}
						onChange={handleInputChange}
						
					>
						<option value="">Select Option</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
				</label>

				{formData.accommodation === "Yes" && (
					<div className="accommodation-message">
						A call will be made to sports head or sport captain
						regarding accommodation.
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
						
					/>
				</label>

				<label className="form-label">
					Captain Name: <span className="-field">*</span>
					<input
						className="form-input"
						type="text"
						name="captainDetails"
						value={formData.captainDetails}
						onChange={handleInputChange}
						
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
						
					/>
				</label>

				{/* <label className="form-label">
          Select Sports
          <select
            className="form-select"
            name="sports"
            value={formData.sports}
            onChange={handleSportsChange}
            
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
        </label> */}

				{renderPlayerInputs()}

				{/* {formData.sports === "Esports" && (
          <>
            <label className="form-label">
              Esports Type:
              <select
                className="form-select"
                name="esportsType"
                value={formData.esportsType}
                onChange={handleInputChange}
                
              >
                <option value="">Select Esports Type</option>
                <option value="Esports_Valorant">Valorant</option>
                <option value="Esports_BGMI">BGMI</option>
              </select>
            </label>
          </>
        )} */}

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
					Upload Image: <span className="-field">*</span>
					<input
						className="form-input"
						type="file"
						accept="image/*"
						onChange={handleImageUpload}
						
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
