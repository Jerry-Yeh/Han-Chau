import React, { useEffect, useState } from 'react';

import type { LogoProps } from '.';

import LogoMark from '~/assets/img/logo-mark.svg';

const Logo: React.FC<LogoProps> = ({ className, size }: LogoProps) => {
  const [sizeClass, setSizeClass] = useState('');

  useEffect(() => {
    switch (size) {
      case 'l':
        setSizeClass('');
        break;
      case 'm':
        setSizeClass('w-24 h-24 rounded-3xl shadow-pop-over p-6');
        break;
      case 's':
        setSizeClass('w-14 h-14 rounded-2xl shadow-pop-over p-3.5');
        break;
    }
  }, [size]);

  return (
    <div className={`${className} ${sizeClass} bg-primary flex justify-center items-center`}>
      <img src={LogoMark} alt='logo' />
    </div>
  );
};

Logo.defaultProps = {
  size: 'm',
};

export default Logo;
