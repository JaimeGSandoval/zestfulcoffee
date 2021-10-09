import React, { useState, useContext } from 'react';
import { StoreContext } from '../../../context/Context';
import './_options.scss';

const OptionContainer = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { setOrderData } = useContext(StoreContext);

  const handleClick = (index, e) => {
    setOrderData((prev) => ({
      ...prev,
      [e.target.dataset.type]: e.target.dataset.name,
    }));
    setActiveIndex(index);
  };

  const renderedOptions = options.map((option, index) => {
    // 'remove-pointer-events';
    const active = index === activeIndex ? 'active custom-hover' : '';

    return (
      <React.Fragment key={option.id}>
        <div
          className={`option-box ${active}`}
          onClick={(e) => handleClick(index, e)}
          data-name={option.optionTitle}
          data-type={option.dataType}
          data-parent
        >
          <h2
            className={`option-title`}
            data-name={option.optionTitle}
            data-type={option.dataType}
            data-child
          >
            {option.optionTitle}
          </h2>
          <p
            className={`option-description`}
            data-name={option.optionTitle}
            data-type={option.dataType}
            data-child
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
