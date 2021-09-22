import React from 'react';

const OptionBox = ({ option }) => {
  console.log('box', option);
  return (
    <div className="option-box" data-option data-option-first>
      <h2 className="option-title" data-option-title data-option-title-first>
        {option.optionTitle}
      </h2>
      <p
        className="option-description"
        data-option-description
        data-option-description-first
      >
        {option.optionDescription}
      </p>
    </div>
  );
};

export default OptionBox;
