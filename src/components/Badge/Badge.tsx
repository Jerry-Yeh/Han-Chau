import React, { useState, ReactNode, useEffect } from 'react';

import HCRate, { RateLevel } from '../Rate';

interface Props {
  children?: React.ReactNode;
  className?: string;
  type: 'rate' | 'dot';
  level?: RateLevel;
}

const Badge: React.FC<Props> = ({ children, type, level }: Props) => {
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
      <div className={`${styleClass} absolute bg-highlight inline-block`}>{content}</div>
    </div>
  );
};

export default Badge;
