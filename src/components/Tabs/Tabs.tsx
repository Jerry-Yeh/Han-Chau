import React from 'react';

import type { TabsProps, TabProps, ActiveKey } from '.';

const Tab: React.FC<TabProps> = ({ data, actived, onClick }: TabProps) => {
  const handleClick = () => {
    onClick(data.value);
  };

  return (
    <button
      className={`flex flex-col items-center grow px-4 py-2 border-b transition duration-300 ${
        actived ? 'border-active text-highlight' : 'border-transparent text-tertiary'
      }`}
      onClick={handleClick}
    >
      <div className='text-body-bold-m'>{data.label}</div>
      {data.sublabel && <div className='text-body-bold-xs'>{data.sublabel}</div>}
    </button>
  );
};

const Tabs: React.FC<TabsProps> = ({ items, activeKey, onChange }: TabsProps) => {
  const handleClick = (value: ActiveKey) => {
    onChange(value);
  };

  return (
    <div className='flex'>
      {items.map((item) => (
        <Tab
          data={item}
          key={item.value}
          actived={activeKey === item.value}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Tabs;
