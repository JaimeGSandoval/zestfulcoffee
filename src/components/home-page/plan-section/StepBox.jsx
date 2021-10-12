import React from 'react';
import styles from './_plan.module.scss';

const StepBox = ({ step, stepNumber }) => {
  return (
    <div className={styles.stepBox}>
      <span className={styles.stepNumber}>0{`${stepNumber}`}</span>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDescription} lang="en">
        {step.description}
      </p>
    </div>
  );
};

export default StepBox;
