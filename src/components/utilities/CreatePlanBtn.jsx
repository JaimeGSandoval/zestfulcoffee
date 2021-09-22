import React from 'react';
import { Link } from 'react-router-dom';
import './_create-plan-btn.scss';

const CreatePlanBtn = ({ text, className }) => {
  return (
    <button className={className} data-plan>
      <Link to="/plan">{text}</Link>
    </button>
  );
};

export default CreatePlanBtn;
