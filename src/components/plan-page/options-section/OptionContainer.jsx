import React, { useState } from 'react';
import './_options.scss';

const OptionContainer = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onOptionClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.id}>
        <div
          className={`option-box ${active}`}
          onClick={() => onOptionClick(index)}
        >
          <h2 className="option-title">{item.optionTitle}</h2>
          <p className="option-description">{item.optionDescription}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="options-container">{renderedItems}</div>;
};

export default OptionContainer;
