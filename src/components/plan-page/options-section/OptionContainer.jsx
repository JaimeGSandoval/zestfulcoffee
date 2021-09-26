import React, { useState, useContext } from 'react';
import { StoreContext } from '../../../Context';
import './_options.scss';

const OptionContainer = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { setOrderData } = useContext(StoreContext);

  const onOptionClick = (index, e) => {
    setOrderData((prev) => ({
      ...prev,
      [e.target.dataset.type]: e.target.dataset.name,
    }));
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
          data-type={option.dataType}
        >
          <h2
            className="option-title"
            data-name={option.optionTitle}
            data-type={option.dataType}
          >
            {option.optionTitle}
          </h2>
          <p
            className="option-description"
            data-name={option.optionTitle}
            data-type={option.dataType}
          >
            {option.optionDescription}
          </p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="options-container">{renderedOptions}</div>;
};

export default OptionContainer;
