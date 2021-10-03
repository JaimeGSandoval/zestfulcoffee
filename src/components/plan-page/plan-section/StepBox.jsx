import React from 'react';

const StepBox = ({ step, stepNumber }) => {
  return (
    <div className="plan-step-box">
      <span className="plan-step-number">0{`${stepNumber}`}</span>
      <h3 className="plan-step-title">{step.title}</h3>
      <p className="plan-step-description">{step.description}</p>
    </div>
  );
};

export default StepBox;
