import React from 'react';

import type { ProgressProps } from '.';

const HCProgress: React.FC<ProgressProps> = (props: ProgressProps) => {
  return (
    <div className={`${props.className} w-full bg-tertiary h-1`}>
      <div
        className={`h-1 transition-all duration-300 ${props.percentage ? 'bg-highlight' : 'bg-transparent'}`}
        style={{
          width: `${props.percentage}%`
        }}
      ></div>
    </div>
  );
};

export default HCProgress;
