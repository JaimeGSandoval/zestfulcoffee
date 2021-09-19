import React from 'react';
import Hero from './hero-section/Hero';
import Collection from './collection-section/Collection';
import ChooseUs from './choose-us-section/Choose-us';
import Plan from './plan-section/Plan';

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <ChooseUs />
      <Plan />
    </>
  );
};

export default Home;
