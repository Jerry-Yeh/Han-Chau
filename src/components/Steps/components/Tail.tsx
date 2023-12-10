import React, { useState, useEffect } from 'react';

import { TailProps, TAIL } from '../.';

const Tail: React.FC<TailProps> = ({ type }: TailProps) => {
  const [typeClass, setTypeClass] = useState('');

  useEffect(() => {
    switch (type) {
      case TAIL.BEFORE:
        setTypeClass('step__tail--before');
        break;
      case TAIL.AFTER:
        setTypeClass('step__tail--after');
        break;
    }
  }, [type]);

  return <div className={`${typeClass} w-px absolute bg-tertiary`}></div>;
};

export default Tail;
