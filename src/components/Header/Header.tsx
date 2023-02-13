import React, { Fragment } from 'react';

import logomark from '~/assets/img/logomark.svg';

interface Props {
  left?: React.ReactNode;
  right?: React.ReactNode;
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
    </Fragment>
  );
};

export default HCHeader;
