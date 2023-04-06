import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  BoltIcon as BoltIconSolid,
  CalculatorIcon as CalculatorIconSolid,
  UserCircleIcon as UserCircleIconSolid,
} from '@heroicons/react/24/solid';
import {
  BoltIcon as BoltIconOutline,
  CalculatorIcon as CalculatorIconOutline,
  UserCircleIcon as UserCircleIconOutline,
} from '@heroicons/react/24/outline';

interface Props {
  children?: React.ReactNode;
}

const TabBar: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const [value, setValue] = useState('trainingProgram');
  const list = [
    {
      icon: <BoltIconOutline />,
      activedIcon: <BoltIconSolid />,
      text: t('workout-plan'),
      value: 'trainingProgram',
    },
    {
      icon: <CalculatorIconOutline />,
      activedIcon: <CalculatorIconSolid />,
      text: t('diet-calculation'),
      value: 'dietCalculation',
    },
    {
      icon: <UserCircleIconOutline />,
      activedIcon: <UserCircleIconSolid />,
      text: t('profile'),
      value: 'profile',
    },
  ];

  const onClickHandler = (value: string) => setValue(value);

  return (
    <div className={`flex justify-between px-8 mobile-xs:px-14 py-3`}>
      {list.map((item, index) => (
        <button
          className='cursor-pointer flex flex-col items-center'
          onClick={() => onClickHandler(item.value)}
          key={index}
        >
          <div
            className={`w-6 h-6 mb-2 ${
              value === item.value ? 'icon-highlight' : 'icon-secondary'
            }  transition-all delay-800`}
          >
            {value === item.value ? item.activedIcon : item.icon}
          </div>
          <span
            className={`text-body-bold-xs ${
              value === item.value ? 'text-highlight' : 'text-tertiary'
            } transition-all delay-800`}
          >
            {item.text}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TabBar;
