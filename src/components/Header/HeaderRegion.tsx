import { useState, useEffect, CSSProperties } from 'react';
import React from 'react';

import useScrollDirection from '~/hooks/utils/useScrollDirection';

import type { HeaderRegionProps } from '.';

const HeaderRegion: React.ForwardRefRenderFunction<HTMLDivElement, HeaderRegionProps> = (
  { children, className = '', behavior, top = 0 },
  ref,
) => {
  const [isDown, isFully] = useScrollDirection();
  const [positionClass, setPositionClass] = useState('relative');
  const [maxHeightClass, setMaxHeightClass] = useState('max-h-full');
  const [style, setStyle] = useState<CSSProperties>({
    top: 0,
  });

  useEffect(() => {
    switch (behavior) {
      case 'fixed':
        setPositionClass('sticky z-10');
        setStyle({
          top: `${top}px`,
        });
        break;
      case 'expanded':
        setPositionClass('sticky z-10');
        isDown ? setStyle({ top: `-${top}px` }) : setStyle({ top });
        break;
      case 'fully':
        isFully ? setMaxHeightClass('max-h-screen') : setMaxHeightClass('max-h-0');
        break;
    }
  }, [behavior, isDown, isFully, top]);

  return (
    <div
      ref={ref}
      className={`w-full ${positionClass} ${maxHeightClass} transition-all duration-300`}
      style={style}
    >
      <div className={`${className}`}>{children}</div>
    </div>
  );
};

export default React.forwardRef(HeaderRegion);
