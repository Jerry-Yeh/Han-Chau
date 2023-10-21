import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import type { AccordionProps } from '.';

const Accordion: React.FC<AccordionProps> = ({ children, label, extra }: AccordionProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const switchStatus = () => {
    setCollapsed((status) => !status);
  };

  return (
    <div className='p-4 relative'>
      <div
        onClick={switchStatus}
        aria-hidden='true'
        className='w-full flex justify-between cursor-pointer'
      >
        <div className='flex items-center'>
          <button className='mr-4'>
            <ChevronDownIcon
              className={`w-6 h-6 ${collapsed ? 'rotate-180' : ''} transition duration-500`}
            />
          </button>
          <span>{label}</span>
        </div>
        {extra}
      </div>
      <div
        className={`w-full overflow-hidden absolute top-14 ${
          collapsed ? 'h-full' : 'h-0'
        } transition-height duration-500`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
