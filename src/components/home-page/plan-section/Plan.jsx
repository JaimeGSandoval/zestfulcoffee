import React from 'react';
import { Link } from 'react-router-dom';
import StepBox from './StepBox';
import './_plan.scss';

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
    <section className="plan-how-to-home">
      <h2 className="how-to-title">How it works</h2>
      <div className="circles-container">
        <div className="circle">
          <div className="inner-circle"></div>
        </div>
        <div className="line"></div>

        <div className="circle">
          <div className="inner-circle"></div>
        </div>
        <div className="line"></div>

        <div className="circle">
          <div className="inner-circle"></div>
        </div>
      </div>

      <div className="steps-container">
        {steps.map((step, i) => (
          <StepBox step={step} stepNumber={i + 1} key={step.title} />
        ))}
      </div>
      <Link to="/plan" className="create-plan-steps-home-bottom">
        create a plan
      </Link>
    </section>
  );
};

export default Plan;
