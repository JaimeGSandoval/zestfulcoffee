import React from 'react';
import OptionContainer from './OptionContainer';
import coffeeOptions from './coffeeOptions';
import './_options.scss';

const Options = () => {
  return (
    <>
      <section className="options-section">
        {coffeeOptions.map((option) => {
          return (
            <OptionContainer
              optionQuestion={option.question}
              option={option.options}
            />
          );
        })}
      </section>

      <div className="create-plan-order-container">
        <button className="create-plan-order" data-plan>
          create my plan
        </button>
      </div>
    </>
  );
};

export default Options;
