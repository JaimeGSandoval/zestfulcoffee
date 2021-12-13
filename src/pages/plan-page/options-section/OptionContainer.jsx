import React, { useState, useContext } from 'react';
import { StoreContext } from '../../../context/Context';
import styles from './_options.module.scss';

const OptionContainer = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { setOrderData } = useContext(StoreContext);

  const handleClick = (index, e) => {
    const closest = e.target.closest('.optionBox');
    setOrderData((prev) => ({
      ...prev,
      [closest.dataset.type]: closest.dataset.name,
    }));
    setActiveIndex(index);
  };

  const renderedOptions = options.map((option, index) => {
    const active = index === activeIndex ? 'active customHover' : '';
    console.log(active);

    return (
      <React.Fragment key={option.id}>
        <div
          className={`optionBox ${active}`}
          onClick={(e) => handleClick(index, e)}
          data-name={option.optionTitle}
          data-type={option.dataType}
        >
          <h2 className={styles.optionTitle}>{option.optionTitle}</h2>
          <p className={styles.optionDescription}>{option.optionDescription}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className={styles.optionsContainer}>{renderedOptions}</div>;
};

export default OptionContainer;
