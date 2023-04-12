import React, { useState, useEffect } from 'react';

import logomark from '~/assets/img/logomark.svg';

import type { HeaderSize } from '.';

interface Props {
  prefix?: React.ReactNode;
  title?: React.ReactNode;
  suffix?: React.ReactNode;
  size?: HeaderSize;
  expand?: boolean;
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
      <div className={`h-12 flex text-secondary`}>
        <div className='flex-1 hover:cursor-pointer flex justify-start items-center pl-1'>
          {props.prefix}
        </div>
        {!props.expand && (
          <div className='flex justify-center items-center text-heading-xs text-primary'>
            {props.title}
          </div>
        )}
        <div className='flex-1 flex justify-end items-center hover:cursor-pointer pr-1'>
          {props.suffix}
        </div>
      </div>
      {props.expand && <div className='text-heading-m text-primary pl-4 pb-3'>{props.title}</div>}
    </div>
  );
};

HCHeader.defaultProps = {
  title: <img className='w-7' src={logomark} alt='LOGO' />,
  size: 'm',
  expand: false,
};

export default HCHeader;
