import React from 'react';
import styles from './_plan-section.module.scss';

const StepBox = ({ step, stepNumber }) => {
  return (
    <div className={styles.planStepBox}>
      <span className={styles.planStepNumber}>0{`${stepNumber}`}</span>
      <h3 className={styles.planStepTitle}>{step.title}</h3>
      <p className={styles.planStepDescription}>{step.description}</p>
    </div>
  );
};

export default StepBox;
