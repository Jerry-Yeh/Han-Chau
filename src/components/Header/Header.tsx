import React, { Fragment, ReactNode } from 'react';
import classNames from 'classnames';

import logomark from '~/assets/img/logomark.svg';

interface Props {
  left?: ReactNode;
  right?: ReactNode;
  fractionClass?: string;
}

const HCHeader: React.FC<Props> = (props: Props) => {
  return (
    <Fragment>
      <div className='h-12 px-4 py-2 grid grid-cols-3'>
        <div className='hover:cursor-pointer'>{props.left}</div>
        <div className='flex justify-center'>
          <img className='w-7' src={logomark} alt='LOGO' />
        </div>
        <div className='flex justify-end items-center hover:cursor-pointer'>{props.right}</div>
      </div>
      <div className='w-full'>
        <div
          className={`h-1 ${props.fractionClass ? 'bg-highlight' : 'bg-transparent'} ${
            props.fractionClass
          }`}
        ></div>
      </div>
    </Fragment>
  );
};

export default HCHeader;
