import React, { useState, useEffect } from 'react';

import LogoMark from '~/assets/img/logo-mark.svg';

import useScrollDirection from '~/hooks/utils/useScrollDirection';

import type { HeaderProps } from '.';

const HCHeader: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [isDown, isFully] = useScrollDirection();

  const [sizeClass, setSizeClass] = useState('');
  const [titleVisibleClass, setTitleVisibleClass] = useState('opacity-0');

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
  }, [props.size]);

  useEffect(() => {
    switch (props.behavior) {
      case 'expanded':
        isDown ? setTitleVisibleClass('opacity-100') : setTitleVisibleClass('opacity-0');
        break;
      case 'fully':
        isFully ? setTitleVisibleClass('opacity-0') : setTitleVisibleClass('opacity-100');
        break;
      default:
        props.title ? setTitleVisibleClass('opacity-0') : setTitleVisibleClass('opacity-100');
        break;
    }
  }, [props.behavior, props.title, isDown, isFully]);

  return (
    <div
      className={`${props.className} overflow-hidden sticky top-0 left-0 w-full bg-primary border-b border-secondary ${sizeClass}`}
    >
      {/* Tool bar */}
      {props.toolBar && (
        <div className={`h-11 flex text-secondary bg-primary relative z-10`}>
          <div className='flex-1 hover:cursor-pointer flex justify-start items-center pl-1'>
            {props.prefix}
          </div>
          <div
            className={`${titleVisibleClass} transition-opacity duration-300
            flex justify-center items-center text-heading-xs text-primary`}
          >
            {props.title}
          </div>
          <div className='flex-1 flex justify-end items-center hover:cursor-pointer pr-1'>
            {props.suffix}
          </div>
        </div>
      )}

      {/* Tab bar or flexible space */}
      {props.children}
    </div>
  );
};

HCHeader.defaultProps = {
  title: <img className='w-7' src={LogoMark} alt='LOGO' />,
  size: 's',
  toolBar: true,
};

export default HCHeader;
