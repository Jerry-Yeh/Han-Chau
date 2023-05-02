import React, { useEffect, useState } from 'react';

import type { LogoProps } from '.';

import Logomark from '~/assets/img/logomark.svg';

const Logo: React.FC<LogoProps> = ({ className, size }: LogoProps) => {
  const [sizeClass, setSizeClass] = useState('');

  useEffect(() => {
    switch (size) {
      case 'l':
        setSizeClass('');
        break;
      case 'm':
        setSizeClass('w-27 h-27 rounded-3xl shadow-pop-over');
        break;
      case 's':
        setSizeClass('w-14 h-14 rounded-2xl shadow-pop-over');
        break;
    }
  }, [size]);

  return (
    <div className={`${className} ${sizeClass} bg-primary flex justify-center items-center`}>
      <img src={Logomark} alt='logo' className='w-19.5' />
    </div>
  );
};

Logo.defaultProps = {
  size: 'm',
};

export default Logo;
