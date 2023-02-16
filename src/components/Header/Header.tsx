import React, { Fragment, useState, useEffect } from 'react';

import logomark from '~/assets/img/logomark.svg';

import type { HeaderSize } from '.';

interface Props {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  size?: HeaderSize;
}

const HCHeader: React.FC<Props> = (props: Props) => {
  const [sizeClass, setSizeClass] = useState('');

  useEffect(() => {
    const initSizeClass = () => {
      switch (props.size) {
        case 'l':
          setSizeClass('py-6');
          break;
        case 'm':
          setSizeClass('py-3.5');
          break;
        case 's':
          setSizeClass('py-0');
          break;
      }
    };

    initSizeClass();
  });

  return (
    <div className={`bg-secondary ${sizeClass}`}>
      <div className={`h-12 grid grid-cols-3`}>
        <div className='hover:cursor-pointer flex justify-start items-center pl-4'>
          {props.left}
        </div>
        <div className='flex justify-center'>{props.center}</div>
        <div className='flex justify-end items-center hover:cursor-pointer pr-4'>{props.right}</div>
      </div>
    </div>
  );
};

HCHeader.defaultProps = {
  center: <img className='w-7' src={logomark} alt='LOGO' />,
  size: 'm',
};

export default HCHeader;
