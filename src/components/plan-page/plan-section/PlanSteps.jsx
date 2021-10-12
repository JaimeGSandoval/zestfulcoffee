import React from 'react';
import StepBox from './StepBox';
import styles from './_plan-section.module.scss';
// import './_plan-section.scss';

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
