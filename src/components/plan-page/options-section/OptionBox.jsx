import React from 'react';
import arrowIcon from '../../../assets/icons/icon-arrow.svg';

const OptionBox = ({ option }) => {
  return (
    <div className="option-container">
      <h1 className="option-title-question">{option.question}</h1>
      <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
      <div className="options-container">
        <div className="option-box" data-option data-option-first>
          <h2
            className="option-title"
            data-option-title
            data-option-title-first
          >
            {option.type}
          </h2>
          <p
            className="option-description"
            data-option-description
            data-option-description-first
          >
            {option.description}
          </p>
        </div>

        <div className="option-box" data-option>
          <h2 className="option-title" data-option-title>
            Filter
          </h2>
          <p className="option-description" data-option-description>
            For pour over or drip methods like Aeropress, Chemex, and V60
          </p>
        </div>
        <div className="option-box" data-option data-option-last>
          <h2 className="option-title" data-option-title data-option-title-last>
            Espresso
          </h2>
          <p
            className="option-description"
            data-option-description
            data-option-description-last
          >
            Dense and finely ground beans for an intense, flavorful experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptionBox;
