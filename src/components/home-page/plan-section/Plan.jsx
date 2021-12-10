import React from 'react';
import { Link } from 'react-router-dom';
import StepBox from './StepBox';
import steps from './data';
import styles from './_plan.module.scss';

const Plan = () => {
  return (
    <section className={styles.planHowToHome}>
      <h2 className={styles.howToTitle}>How it works</h2>
      <div className={styles.circlesContainer}>
        <div className={styles.circle}>
          <div className={styles.innerCircle}></div>
        </div>
        <div className={styles.line}></div>

        <div className={styles.circle}>
          <div className={styles.innerCircle}></div>
        </div>
        <div className={styles.line}></div>

        <div className={styles.circle}>
          <div className={styles.innerCircle}></div>
        </div>
      </div>

      <div className={styles.stepsContainer}>
        {steps.map((step, i) => (
          <StepBox step={step} stepNumber={i + 1} key={step.title} />
        ))}
      </div>
      <Link to="/plan" className={styles.createPlanStepsHomeBottom}>
        create a plan
      </Link>
    </section>
  );
};

export default Plan;
