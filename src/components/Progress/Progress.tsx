import React from 'react';

interface Props {
  rateClass?: string;
}

const HCProgress: React.FC<Props> = (props: Props) => {
  return (
    <div className='w-full bg-tertiary'>
      <div
        className={`
      h-1 ${props.rateClass ? 'bg-highlight' : 'bg-transparent'}
      ${props.rateClass} transition-all duration-300
    `}
      ></div>
    </div>
  );
};

export default HCProgress;
