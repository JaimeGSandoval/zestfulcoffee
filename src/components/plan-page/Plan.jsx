import React from 'react';
import Hero from './hero-section/Hero';
import PlanSteps from './plan-section/PlanSteps';
import Options from './options-section/Options';
import OrderModal from './order-modal/OrderModal';

const Plan = () => {
  return (
    <>
      <OrderModal />
      <Hero />
      <PlanSteps />
      <Options />
    </>
  );
};

export default Plan;
