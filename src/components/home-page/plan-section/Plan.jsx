import React from 'react';
import { Link } from 'react-router-dom';
import StepBox from './StepBox';
import styles from './_plan.module.scss';
// import './_plan.scss';

const steps = [
  {
    title: 'Pick your coffee',
    description:
      'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
  },
  {
    title: 'Choose the frequency',
    description:
      'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
  },
  {
    title: 'Receive and enjoy!',
    description:
      ' We ship your product within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
  },
];

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
