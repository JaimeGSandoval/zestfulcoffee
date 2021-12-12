import React, { useState, useContext } from 'react';
import { StoreContext } from '../../../context/Context';
import arrowIcon from '../../../assets/icons/icon-arrow.svg';
import styles from './_options.module.scss';

const Options = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { setOrderData } = useContext(StoreContext);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (index, e) => {
    const closest = e.target.closest('.optionBox');
    setOrderData((prev) => ({
      ...prev,
      [closest.dataset.type]: closest.dataset.name,
    }));
    setActiveIndex(index);
  };

  const renderedOptions = options.types.map((option, index) => {
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

  return (
    <div className={styles.optionContainer}>
      <h1 className={styles.optionTitleQuestion}>{options.question}</h1>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className={styles.arrow}
        data-arrow
        onClick={(e) => {
          e.target.classList.toggle(styles.toggleArrow);
          setIsActive(!isActive);
        }}
      />
      <div className={isActive ? styles.showOption : ''}>
        {isActive && renderedOptions}
      </div>
    </div>
  );
};

export default Options;
