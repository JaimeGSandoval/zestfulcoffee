import React, { useState, useContext } from 'react';
import { StoreContext } from '../context/Context';
import styles from './_options.module.scss';

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
    const active =
      index === activeIndex ? `${styles.active} ${styles.customHover}` : '';

    return (
      <React.Fragment key={option.id}>
        <div
          className={`${styles.optionBox} ${active}`}
          onClick={(e) => handleClick(index, e)}
          data-name={option.optionTitle}
          data-type={option.dataType}
          data-parent
        >
          <h2
            className={styles.optionTitle}
            data-name={option.optionTitle}
            data-type={option.dataType}
            data-child
          >
            {option.optionTitle}
          </h2>
          <p
            className={styles.optionDescription}
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

  return <div className={styles.optionsContainer}>{renderedOptions}</div>;
};

export default OptionContainer;
