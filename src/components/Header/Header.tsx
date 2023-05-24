import { useState, useEffect, ForwardRefRenderFunction, forwardRef, Fragment } from 'react';

import LogoMark from '~/assets/img/logo-mark.svg';

import useScrollDirection from '~/hooks/utils/useScrollDirection';

import type { HeaderProps } from '.';

const HCHeader: ForwardRefRenderFunction<HTMLDivElement, HeaderProps> = (
  {
    children,
    className = '',
    size,
    title = <img className='w-7' src={LogoMark} alt='LOGO' />,
    prefix,
    suffix,
    behavior,
    toolBar = true,
  }: HeaderProps,
  ref,
) => {
  const [isDown, isFully] = useScrollDirection();

  const [sizeClass, setSizeClass] = useState('');
  const [titleVisibleClass, setTitleVisibleClass] = useState('opacity-0');

  useEffect(() => {
    const initSizeClass = () => {
      switch (size) {
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
  }, [size]);

  useEffect(() => {
    switch (behavior) {
      case 'expanded':
        isDown ? setTitleVisibleClass('opacity-100') : setTitleVisibleClass('opacity-0');
        break;
      case 'fully':
        isFully ? setTitleVisibleClass('opacity-0') : setTitleVisibleClass('opacity-100');
        break;
      default:
        setTitleVisibleClass('opacity-100');
        break;
    }
  }, [behavior, title, isDown, isFully]);

  return (
    <Fragment>
      <div
        ref={ref}
        className={`${className} ${sizeClass} sticky top-0 left-0 w-full bg-primary z-20`}
        // border-b border-secondary
      >
        {/* Tool bar */}
        {toolBar && (
          <div className={`h-11 flex text-secondary z-10`}>
            <div className='flex-1 hover:cursor-pointer flex justify-start items-center pl-1'>
              {prefix}
            </div>
            <div
              className={`${titleVisibleClass} transition-opacity duration-300
            flex justify-center items-center text-heading-xs text-primary`}
            >
              {title}
            </div>
            <div className='flex-1 flex justify-end items-center hover:cursor-pointer pr-1'>
              {suffix}
            </div>
          </div>
        )}
      </div>

      {/* Tab bar or flexible space */}
      {children}
    </Fragment>
  );
};

export default forwardRef(HCHeader);
