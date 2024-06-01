import React, { useEffect, useState } from 'react';

import { StepsProps, TAIL } from '.';

import Tail from './components/Tail';

const Steps: React.FC<StepsProps> = ({ className, items, dark = false }: StepsProps) => {
  return (
    <div className={`${className} ${dark ? 'bg-black' : ''} step`}>
      {items.map((item, index) => (
        <div key={item.id} className='step__container flex'>
          <div className='py-4 mr-4 relative flex justify-center'>
            <div className='step__icon relative z-10 w-9 h-9 flex justify-center items-center rounded-full bg-secondary text-secondary'>
              {index < 9 ? 0 : ''}
              {index + 1}
            </div>
            {index !== 0 && <Tail isShow type={TAIL.BEFORE} />}
            <Tail isShow type={TAIL.AFTER} />
          </div>
          <div className={`step__content grow ${dark ? 'text-white' : ''}`}>
            <div className='step__content__title text-heading-s text-secondary'>{item.title}</div>
            <div
              className={`${item.title ? 'step__content__description' : 'step__content__description--titleless'
                } text-secondary`}
            >
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
