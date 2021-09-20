import React from 'react';

const StepBox = ({ step, stepNumber }) => {
  return (
    <div className="step-box">
      <span className="step-number">0{`${stepNumber}`}</span>
      <h3 className="plan-step-title">{step.title}</h3>
      <p className="step-description">{step.description}</p>
    </div>
  );
};

export default StepBox;