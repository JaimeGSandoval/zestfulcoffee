import React, { Suspense, lazy } from 'react';
import Hero from './hero-section/Hero';
import PlanSteps from './plan-section/PlanSteps';
import Options from './options-section/Options';
import OrderModalProvider from './context/OrderModalContext';
import StoreProvider from './context/Context';

const OrderModal = lazy(() => import('./order-modal/OrderModal'));

const Plan = () => {
  return (
    <>
      <StoreProvider>
        <OrderModalProvider>
          <Suspense fallback={<div>...</div>}>
            <OrderModal />
          </Suspense>
          <Hero />
          <PlanSteps />
          <Options />
        </OrderModalProvider>
      </StoreProvider>
    </>
  );
};

export default Plan;
