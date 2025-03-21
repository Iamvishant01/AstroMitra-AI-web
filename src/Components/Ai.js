import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const prompt = "ABout pune";

const result = await model.generateContent(prompt);
console.log(result.response.text());

export default function AstroMitraAI() {
  // Define state variables for the first name, last name, and date of birth
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState(null);

  // Function to calculate Mulank (Life Path Number) and Bhagyank (Destiny Number)
  const calculateNumerology = () => {
    if (dob) {
      // Get date as a string in the format YYYY-MM-DD
      const dobString = dob.format('YYYY-MM-DD');
      const dobParts = dobString.split('-');

      // Calculate Mulank (Life Path Number) - sum of digits of the day of birth
      const dayOfBirth = parseInt(dobParts[2]); // Day part of the birthdate
      const sumMulank = dayOfBirth.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
      const mulank = sumMulank % 9 === 0 ? 9 : sumMulank % 9;  // Mulank is a single digit number

      // Calculate Bhagyank (Destiny Number) - sum of all digits in the full birthdate (YYYY-MM-DD)
      const sumBhagyank = dobString.replace(/-/g, '').split('').reduce((acc, digit) => acc + parseInt(digit), 0);
      const bhagyank = sumBhagyank % 9 === 0 ? 9 : sumBhagyank % 9;  // Bhagyank is a single digit number

      alert(`Mulank: ${mulank}, Bhagyank: ${bhagyank}`);
    } else {
     alert('Please select a valid date of birth.');
    }
  };

  return (
    <div className="mitra-container">
      {/* Question Section */}
      <div className="question-container">
        <p>
          <span>AstroMitra AI</span> <br />
          Where Numbers Speak About You!!
        </p>
        <div className="Inputs d-flex gap-3">
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} // Update first name
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} // Update last name
          />
          {/* Date Picker */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dob}
              onChange={(newValue) => setDob(newValue)} // Update date of birth
              format="YYYY-MM-DD"
            />
          </LocalizationProvider>
          {/* Button */}
          <button type="button" className="btn btn-primary" onClick={calculateNumerology}>
            Show My Insights
          </button>
        </div>
      </div>

      {/* Output Section */}
      <div className="output container mt-5 d-flex justify-content-center">
        <div className="product-container d-flex flex-column flex-md-row border rounded shadow p-3">
          {/* Left Container */}
          <div className="left-container d-flex justify-content-center align-items-center w-100 w-md-50 p-3 bg-white">
            English
          </div>
          <hr />
          {/* Right Container */}
          <div className="right-container d-flex flex-column justify-content-center align-items-center w-100 w-md-50 p-3 text-center">
            Hindi
          </div>
        </div>
      </div>
    </div>
  );
}
