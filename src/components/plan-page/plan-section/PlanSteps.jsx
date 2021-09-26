import React from 'react';
import StepBox from './StepBox';
import './_plan-section.scss';

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
    <section className="plan-how-to-section">
      {steps.map((step, i) => (
        <StepBox step={step} stepNumber={i + 1} key={step.title} />
      ))}
    </section>
  );
};

export default PlanSteps;
