import React, { useState, ReactNode, useEffect } from 'react';

import HCRate, { RateLevel } from '../Rate';

import type { BadgeProps } from '.';

const Badge: React.FC<BadgeProps> = ({ children, type, level, show }: BadgeProps) => {
  const [content, setContent] = useState<ReactNode>();
  const [styleClass, setStyleClass] = useState('');

  useEffect(() => {
    switch (type) {
      case 'rate':
        setStyleClass('px-1 py-0.5 rounded-lg bottom-0 right-1/2 translate-x-1/2');
        setContent(<HCRate level={level as RateLevel} size='s' onColor />);
        break;
      case 'dot':
        setStyleClass('w-2 h-2 rounded-full right-0 translate-x-1/2 top-0 -translate-y-1/2');
        setContent('');
        break;
    }
  }, [type, level]);

  return (
    <div className='relative inline-block'>
      {children}
      {show && <div className={`${styleClass} absolute bg-highlight inline-block`}>{content}</div>}
    </div>
  );
};

Badge.defaultProps = {
  show: true,
};

export default Badge;
