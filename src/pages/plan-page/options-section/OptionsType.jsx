import React, { useState, useContext, useRef } from 'react';
import { StoreContext } from '../../../context/Context';
import arrowIcon from '../../../assets/icons/icon-arrow.svg';
import styles from './_options.module.scss';

const Options = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [grindTab, setGrindTab] = useState(false);
  const { orderData, setOrderData } = useContext(StoreContext);
  const grindRef = useRef();

  const handleArrowToggle = (e) => {
    if (e.target.dataset.type === 'grindType') setGrindTab(!grindTab);
    setIsActive(!isActive);
    e.target.classList.toggle(styles.toggleArrow);
  };

  const handleClick = (index, e) => {
    const closest = e.target.closest('.optionBox');
    setOrderData((prev) => ({
      ...prev,
      [closest.dataset.type]: closest.dataset.name,
    }));
    setActiveIndex(index);
  };

  const handleTabDisable = () => {
    if (orderData.drinkType === 'Capsule' && options.id === 'grindType') {
      grindRef.current.style.pointerEvents = 'none';
    } else if (grindRef.current) {
      grindRef.current.style.pointerEvents = 'auto';
    }

    if (orderData.drinkType === 'Capsule' && options.id === 'grindType') {
      return `${styles.disabledSvg}`;
    }

    // conditional check to flip the toggleArrow in the right direction after grindType disable class is removed from grindType accordion tab
    if (
      orderData.drinkType !== 'Capsule' &&
      options.id === 'grindType' &&
      orderData.drinkType &&
      grindTab
    ) {
      return `${styles.toggleArrow}`;
    }

    return styles.arrow;
  };

  const renderedOptions = options.types.map((option, index) => {
    const active = index === activeIndex ? 'active customHover' : '';

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

  const customMargin =
    orderData.drinkType === 'Capsule' && options.id === 'grindType'
      ? styles.customMargin
      : '';

  return (
    <div className={styles.optionContainer}>
      <h1 className={`${styles.optionTitleQuestion} ${customMargin}`}>
        {options.question}
      </h1>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className={handleTabDisable()}
        data-arrow
        onClick={(e) => handleArrowToggle(e)}
        ref={options.id === 'grindType' ? grindRef : null}
        data-type={options.id}
      />
      <div
        className={
          isActive &&
          orderData.drinkType === 'Capsule' &&
          options.id === 'grindType'
            ? styles.hide
            : styles.showOption
        }
      >
        {isActive && renderedOptions}
      </div>
    </div>
  );
};

export default Options;
