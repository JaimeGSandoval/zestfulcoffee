import React, { useState } from 'react';
import { gatherOrderData } from '../order-summary/OrderSummary';
import './_options.scss';

const OptionContainer = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onOptionClick = (index, e) => {
    gatherOrderData(e.target.dataset.name);
    setActiveIndex(index);
  };

  const renderedOptions = options.map((option, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={option.id}>
        <div
          className={`option-box ${active}`}
          onClick={(e) => onOptionClick(index, e)}
          data-name={option.optionTitle}
        >
          <h2 className="option-title" data-name={option.optionTitle}>
            {option.optionTitle}
          </h2>
          <p className="option-description" data-name={option.optionTitle}>
            {option.optionDescription}
          </p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="options-container">{renderedOptions}</div>;
};

export default OptionContainer;
