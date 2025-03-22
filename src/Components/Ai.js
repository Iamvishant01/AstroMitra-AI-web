import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PDFDocument,rgb } from 'pdf-lib';  // Using pdf-lib for PDF text extraction
import { saveAs } from 'file-saver';


const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

export default function AstroMitraAI() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState(null);
  const [englishResponse, setEnglishResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [pdfText, setPdfText] = useState('');

  // Function to load and extract text from the Numerology.pdf file
  const extractTextFromPdf = async () => {
    try {
      // Fetch the PDF file from the public directory
      const response = await fetch('./Numerology.pdf');
      const arrayBuffer = await response.arrayBuffer();
      
      // Load the PDF using pdf-lib
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pages = pdfDoc.getPages();
      let text = '';

      // Extract text from each page
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const textContent = await page.getTextContent();
        text += textContent.items.map((item) => item.str).join(' ');
      }

      // Store the extracted text in state
      setPdfText(text);
    } catch (error) {
      console.error('Error extracting text from PDF:', error);
    }
  };
  // save pdf
  const downloadPDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();
    const fontSize = 16;

    page.drawText('AstroMitra AI', { x: 50, y: height - 50, size: 24, color: rgb(0, 0, 1) });
    page.drawText('Website: astromitrai.vercel.app', { x: 50, y: height - 80, size: 12, color: rgb(0, 0, 1) });
    page.drawText(`Prediction for ${firstName} ${lastName}:`, { x: 50, y: height - 120, size: fontSize });
    page.drawText(englishResponse.replace(/<br\/><br\/>/g, '\n'), { x: 50, y: height - 150, size: fontSize });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(blob, `${firstName}_${lastName}_AstroMitra-AI.pdf`);
  };

  // Call extractTextFromPdf when the component is mounted
  useEffect(() => {
    extractTextFromPdf();
  }, []);

  const calculateNumerology = async () => {
    if (dob) {
      setLoading(true);
      setEnglishResponse('');

      const dobString = dob.format('YYYY-MM-DD');
      const dobParts = dobString.split('-');
      const dayOfBirth = parseInt(dobParts[2]);
      const sumMulank = dayOfBirth.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
      const mulank = sumMulank % 9 === 0 ? 9 : sumMulank % 9;
      const sumBhagyank = dobString.replace(/-/g, '').split('').reduce((acc, digit) => acc + parseInt(digit), 0);
      const bhagyank = sumBhagyank % 9 === 0 ? 9 : sumBhagyank % 9;

      const prompt = `
        My name is ${firstName} ${lastName} and my - Mulank: ${mulank}, Bhagyank: ${bhagyank}
        Here is the content of the book that I will use for predictions: ${pdfText} 
        You have to provide predictions in two ways:
        Numerology-Based Prediction
        Lal Kitab-Based Prediction
        Topics for Predictions:
        Career Guidance and Success:


        Description: Advice on career choices, suitable fields, or professional opportunities.
        Curiosity: People want to know whether they're on the right career path, when is the right time to change jobs, or how they can achieve professional success.
        Love, Relationship, and Marriage Predictions:


        Description: Insights into romantic relationships, marriage compatibility, and predictions.
        Curiosity: People often seek to know their ideal partner or when they might get married, or understand their relationship dynamics better (like compatibility with a partner).
        Health and Well-being:


        Description: Personal health insights, recommendations for better well-being based on numerology.
        Curiosity: How to maintain good health or when they may face certain health challenges.
        Personality and Traits Analysis:


        Description: Detailed personality insights based on numerology, including strengths, weaknesses, and hidden traits.
        Curiosity: People are eager to understand their true nature, quirks, or tendencies, and how they are perceived by others.
        Wealth, Prosperity, and Financial Predictions:


        Description: Predictions related to financial success, business growth, or making investments.
        Curiosity: Users often seek advice on how to attract wealth or which financial decisions may lead to prosperity.
        Family and Children Predictions:


        Description: Future predictions about family dynamics, children, or how to improve family relationships.
        Curiosity: People often wonder about having children, their family life, or the type of parents they might become.
        Luck, Destiny, and Divine Timing:


        Description: When certain events (like a big breakthrough, chance meeting, or turning point) might take place based on numerological cycles.
        Curiosity: They want to know when "their luck" will change or whether they’ll soon be presented with life-altering opportunities.
        Life Challenges and Overcoming Obstacles:


        Description: Guidance on dealing with upcoming challenges or life lessons.
        Curiosity: People may look for advice on how to navigate life’s difficulties, either internal struggles (e.g., self-doubt) or external issues (e.g., relationships).
        Future Life Milestones and Events:


        Description: General predictions about major life milestones such as moving to a new place, change in career, or financial windfalls.
        Curiosity: They may ask about key events like promotions, relocations, or any significant shifts in their future.
        Current Year or Monthly Predictions:


        Description: Predictions based on the person’s birthdate for the current running year and month.
        Curiosity: What the upcoming year/month will look like in terms of luck, success, and personal growth.
        Best Time for Important Decisions:
        Description: Help determine when is the best time to start a new venture, business, or make big life changes.
        Curiosity: People often want to time their major decisions, like marriage, investment, or launching a new career.
        Compatibility Analysis (Friends/Girlfriend/Colleagues/Business Partners):
        Description: How well they connect with others in terms of friendships, professional collaborations, or business partnerships, and people with which Mulanks are good with the user.
        Curiosity: Will a partnership be successful? Is it a good time to collaborate with someone new?
        Soul’s Purpose and Life’s Mission:
        Description: Insights on their life mission, spiritual purpose, or calling.
        Curiosity: People often seek clarity on their deeper life purpose or what they’re meant to do in life.
        Psychic and Intuition Insights:
        Description: Offering intuitive insights based on the user’s numerology chart.
        Curiosity: People may wish to know how intuitive they are and how they can tap into their own psychic abilities or inner wisdom.
        Relationships with Parents or Siblings:
        Description: Provide insights on family dynamics, especially relating to their bond with parents or siblings.
        Curiosity: Some users are curious about how to improve familial relationships or understand their role in the family better.
        `;

      try {
        const result = await model.generateContent(prompt);
        setEnglishResponse(result.response.text().replace(/\n/g, '<br/><br/>'));
      } catch (error) {
        console.error('Error calling the Gemini API:', error);
        alert('Failed to get response from AI.');
      } finally {
        setLoading(false);
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
          <div className="left-container w-100 w-md-50 p-3 bg-white">
            {loading ? (
              <p>Loading...</p>
            ) : englishResponse ? (
              <><div dangerouslySetInnerHTML={{ __html: englishResponse }}></div>
              {/* <button className="btn btn-success mt-3" onClick={downloadPDF}>Download as PDF</button> */}
              </>
            ) : (
              <p>🔮 Enter your details and let the stars reveal their secrets! Click the button to uncover your cosmic insights. ✨</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
