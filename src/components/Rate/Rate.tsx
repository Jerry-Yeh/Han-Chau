import React, { useState, ReactNode, useEffect } from 'react';

import StarIcon from '~/assets/img/heroicons/mini/star';

import type { RateProps } from '.';

const totalLevel = 3;

const Rate: React.FC<RateProps> = (props: RateProps) => {
  const [sizeClass, setSizeClass] = useState('');
  const [enabledColorClass, setEnabledColorClass] = useState('');
  const [disabledColorClass, setDisabledColorClass] = useState('');

  useEffect(() => {
    switch (props.size) {
      case 's':
        setSizeClass('w-2.5 h-2.5');
        break;
      case 'm':
        setSizeClass('w-4 h-4');
        break;
      case 'l':
        break;
    }
  }, [props.size]);

  useEffect(() => {
    if (props.onColor) {
      setEnabledColorClass('icon-onColor');
      setDisabledColorClass('icon-highlight');
    } else {
      setEnabledColorClass('icon-highlight');
      setDisabledColorClass('icon-disabled');
    }
  }, [props.onColor]);

  return (
    <div className={`flex ${props.className}`}>
      {Array.from(new Array(totalLevel), (_value, index) => (
        <StarIcon
          key={index}
          className={`
          ${sizeClass} ${index <= props.level - 1 ? enabledColorClass : disabledColorClass}`}
        />
      ))}
    </div>
  );
};

Rate.defaultProps = {
  onColor: false,
  size: 'm',
};

export default Rate;
