import React from 'react';
import { Link } from 'react-router-dom';
import './_create-plan-btn.scss';

const CreatePlanBtn = ({ text, className }) => {
  return (
    <Link to="/plan">
      <button className={className} data-plan>
        {text}
      </button>
    </Link>
  );
};

export default CreatePlanBtn;
