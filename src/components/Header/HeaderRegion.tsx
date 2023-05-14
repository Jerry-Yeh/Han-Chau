import { useState, useEffect } from 'react';
import React from 'react';

import useScrollDirection from '~/hooks/utils/useScrollDirection';

import type { HeaderRegionProps } from '.';

const HeaderRegion: React.FC<HeaderRegionProps> = ({
  children,
  className,
  behavior,
}: HeaderRegionProps) => {
  const [isDown, isFully] = useScrollDirection();
  const [maxHeightClass, setMaxHeightClass] = useState('max-h-screen');

  useEffect(() => {
    switch (behavior) {
      case 'fixed':
        setMaxHeightClass('max-h-screen');
        break;
      case 'expanded':
        if (isDown) {
          setMaxHeightClass('max-h-0');
        } else {
          setMaxHeightClass('max-h-screen');
        }
        break;
      case 'fully':
        if (isFully) {
          setMaxHeightClass('max-h-screen');
        } else {
          setMaxHeightClass('max-h-0');
        }
        break;
    }
  }, [behavior, isDown, isFully]);

  return (
    <div
      className={`${className} w-full ${maxHeightClass} relative transition-max-height duration-300`}
    >
      {children}
    </div>
  );
};

export default HeaderRegion;
