import React from 'react';

const Hero = ({ onContactClick }) => {
  return (
    <div className="container">
      <div className="logo-section">
        <img src="/Starbridge-logo.png" alt="Company Logo" className="logo" />
      </div>

      <h1 className="hero-title">Starbridge Global Partners</h1>
      <p className="tagline">Strategic Capital</p>

      <div className="content-section">
        <p className="description">
          Starbridge Global is an investment firm that backs world changing internet, software and technology companies.
        </p>
      </div>

      <div className="cta-section">
        <button className="contact-btn" onClick={onContactClick}>
          CONTACT&nbsp;US
        </button>
      </div>
    </div>
  );
};

export default Hero; 