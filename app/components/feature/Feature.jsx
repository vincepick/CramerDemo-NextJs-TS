import React from 'react';
import './feature.css';

const Feature = ({ title, texts = [] }) => (
  <div className="cramer__features-container__feature">
    <div className="cramer__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="cramer__features-container__feature-text">
      {texts.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  </div>
);

export default Feature;
