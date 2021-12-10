import React from 'react';
import StepBox from './StepBox';
import steps from './data';
import styles from './_plan-section.module.scss';

const PlanSteps = () => {
  return (
    <section className={styles.planHowToSection}>
      <div className={styles.planHowToInnerContainer}>
        <div className={styles.planCirclesContainer}>
          <div className={styles.planCircle}>
            <div className={styles.planInnerCircle}>
              <div className={styles.innerLineFront}></div>
            </div>
          </div>
          <div className={styles.planLine}></div>

          <div className={styles.planCircle}>
            <div className={styles.planInnerCircle}>
              <div className={styles.innerLineMiddle}></div>
            </div>
          </div>
          <div className={styles.planLine}></div>

          <div className={styles.planCircle}>
            <div className={styles.planInnerCircle}>
              <div className={styles.innerLineEnd}></div>
            </div>
          </div>
        </div>

        <div className={styles.planBoxesContainer}>
          {steps.map((step, i) => (
            <StepBox step={step} stepNumber={i + 1} key={step.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSteps;
