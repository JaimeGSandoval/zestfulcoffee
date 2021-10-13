import React, { Suspense, lazy } from 'react';
import Hero from './hero-section/Hero';
import PlanSteps from './plan-section/PlanSteps';
import Options from './options-section/Options';
const OrderModal = lazy(() => import('./order-modal/OrderModal'));

const Plan = () => {
  return (
    <>
      <Suspense fallback={<div>...</div>}>
        <OrderModal />
      </Suspense>
      <Hero />
      <PlanSteps />
      <Options />
    </>
  );
};

export default Plan;
