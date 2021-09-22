import React from 'react';
import OptionBox from './OptionBox';
import arrowIcon from '../../../assets/icons/icon-arrow.svg';

const OptionContainer = ({ optionQuestion, children }) => {
  return (
    <div className="option-container">
      <h1 className="option-title-question">{optionQuestion}</h1>
      <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
      <div className="options-container">{children}</div>
    </div>
  );
};

export default OptionContainer;
