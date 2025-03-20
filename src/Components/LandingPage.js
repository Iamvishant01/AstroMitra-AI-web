import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function LandingPage() {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="product-container d-flex flex-column flex-md-row border rounded shadow p-3">
        {/* Left Container */}
        <div className="left-container d-flex justify-content-center align-items-center w-100 w-md-50 p-3 bg-light">
          <img src="https://iili.io/3x75iX9.md.png" alt="Smartphone" className="img-fluid product-image" />
        </div>
        
        {/* Right Container */}
        <div className="right-container d-flex flex-column justify-content-center align-items-center w-100 w-md-50 p-3 text-center">
          <h2 className="product-title">AstroMitra AI</h2>
          <p className="product-description text-muted">
            AstroMitra is an AI-powered astrology chatbot providing accurate horoscope predictions, numerology insights, and Lal Kitab remedies for career, relationships, and wealth. Get instant personalized astrology guidance anytime! 🚀🔮
          </p>
          
          <div className="buttons d-flex flex-column flex-sm-row gap-3">
            <Link to="/ai" className="btn btn-success">
              <i className="fa-solid fa-earth-americas"></i>&nbsp;Continue on Web
            </Link>
            <button type="button" className="btn btn-dark">
              <i className="fa-brands fa-android"></i>&nbsp;Android App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
