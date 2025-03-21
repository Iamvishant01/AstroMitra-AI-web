import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

export default function AstroMitraAI() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState(null);
  const [englishResponse, setEnglishResponse] = useState('');

  const calculateNumerology = async () => {
    if (dob) {
      const dobString = dob.format('YYYY-MM-DD');
      const dobParts = dobString.split('-');

      const dayOfBirth = parseInt(dobParts[2]);
      const sumMulank = dayOfBirth.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
      const mulank = sumMulank % 9 === 0 ? 9 : sumMulank % 9;

      const sumBhagyank = dobString.replace(/-/g, '').split('').reduce((acc, digit) => acc + parseInt(digit), 0);
      const bhagyank = sumBhagyank % 9 === 0 ? 9 : sumBhagyank % 9;

      const prompt = `${firstName} ${lastName} - Mulank: ${mulank}, Bhagyank: ${bhagyank}. Greet Me!`;

      try {
        const result = await model.generateContent(prompt);
        setEnglishResponse(result.response.text());
      } catch (error) {
        console.error('Error calling the Gemini API:', error);
        alert('Failed to get response from AI.');
      }
    } else {
      alert('Please select a valid date of birth.');
    }
  };

  return (
    <div className="mitra-container">
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
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dob}
              onChange={(newValue) => setDob(newValue)}
              format="YYYY-MM-DD"
            />
          </LocalizationProvider>
          <button type="button" className="btn btn-primary" onClick={calculateNumerology}>
            Show My Insights
          </button>
        </div>
      </div>

      <div className="output container mt-5 d-flex justify-content-center">
        <div className="product-container d-flex flex-column flex-md-row border rounded shadow p-3">
          <div className="left-container d-flex justify-content-center align-items-center w-100 w-md-50 p-3 bg-white">
            {englishResponse || 'Waiting for insights...'}
          </div>
          <hr />
          <div className="right-container d-flex flex-column justify-content-center align-items-center w-100 w-md-50 p-3 text-center">
            Hindi
          </div>
        </div>
      </div>
    </div>
  );
}
// something