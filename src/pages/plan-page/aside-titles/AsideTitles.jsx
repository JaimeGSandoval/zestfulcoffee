import React, { useContext } from 'react';
import { StoreContext } from '../../../context/Context';
import ContentBox from './ContentBox';
import styles from './_aside-titles.module.scss';

const AsideTitles = () => {
  const { orderData } = useContext(StoreContext);

  const COFFEE_OPTIONS = [
    { num: '01', title: 'preferences', type: orderData.drinkType },
    { num: '02', title: 'bean type', type: orderData.coffeeType },
    { num: '03', title: 'quantity', type: orderData.coffeeAmount },
    { num: '04', title: 'grind options', type: orderData.grindType },
    { num: '05', title: 'deliveries', type: orderData.deliveryType },
  ];

  return (
    <>
      <aside className={styles.aside}>
        {COFFEE_OPTIONS.map((option) => {
          return (
            <ContentBox
              option={option}
              orderData={orderData}
              key={option.title}
            />
          );
        })}
      </aside>
    </>
  );
};

export default AsideTitles;
