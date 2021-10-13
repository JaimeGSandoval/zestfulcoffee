import React from 'react';
import CoffeeBox from './CoffeeBox';
import styles from './_collection.module.scss';
// import './_collection.scss';
import danchePng from '../../../assets/images/coffee/danche.png';
import dancheWebp from '../../../assets/images/coffee/danche.webp';
import espressoPng from '../../../assets/images/coffee/gran-espresso.png';
import espressoWebp from '../../../assets/images/coffee/gran-espresso.webp';
import piccolloPng from '../../../assets/images/coffee/piccollo.png';
import piccolloWebp from '../../../assets/images/coffee/piccollo.webp';
import planaltoPng from '../../../assets/images/coffee/planalto.png';
import planaltoWebp from '../../../assets/images/coffee/planalto.webp';

const coffeeTypes = [
  {
    type: 'gran espresso',
    imgWebp: espressoWebp,
    imgPng: espressoPng,
    imgAlt: 'Gran espresso coffee',
    description:
      'Light and flavorful blend with cocoa and black pepper for an intense experience',
  },
  {
    type: 'planalto',
    imgWebp: planaltoWebp,
    imgPng: planaltoPng,
    imgAlt: 'Planalto coffee',
    description:
      ' Brazilian dark roast with rich velvety body, and hints of fruits and nuts',
  },
  {
    type: 'piccillo',
    imgWebp: piccolloWebp,
    imgPng: piccolloPng,
    imgAlt: 'Piccollo coffee',
    description:
      'Mild and smooth blend featuring notes of toasted almond and dried cherry',
  },
  {
    type: 'danche',
    imgWebp: dancheWebp,
    imgPng: danchePng,
    imgAlt: 'Danche coffee',
    description:
      ' Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
  },
];

const Collection = () => {
  return (
    <>
      <section className={styles.collectionSection}>
        <h1 className={styles.collectionHeaderText}>our collection</h1>
        <div className={styles.coffeeTypesContainer}>
          {coffeeTypes.map((coffee) => {
            return <CoffeeBox coffeeType={coffee} key={coffee.type} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Collection;
