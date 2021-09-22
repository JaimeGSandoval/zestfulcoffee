import React from 'react';
import OptionContainer from './OptionContainer';
import OptionBox from './OptionBox';
import coffeeOptions from './coffeeOptions';
import './_options.scss';

const Options = () => {
  return (
    <>
      <section className="options-section">
        {coffeeOptions.map((option, i) => {
          return (
            <OptionContainer
              optionQuestion={option.question}
              key={option.question}
            >
              {option.options.map((option, i) => {
                return <OptionBox option={option} key={i} />;
              })}
            </OptionContainer>
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
