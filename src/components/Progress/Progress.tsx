import React from 'react';

interface Props {
  widthClass?: string;
}

const HCProgress: React.FC<Props> = (props: Props) => {
  return (
    <div className='w-full bg-tertiary'>
      <div
        className={`
      h-1 ${props.widthClass ? 'bg-highlight' : 'bg-transparent'}
      ${props.widthClass} transition-all duration-300
    `}
      ></div>
    </div>
  );
};

export default HCProgress;
