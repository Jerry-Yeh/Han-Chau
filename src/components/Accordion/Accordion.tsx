import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import type { AccordionProps } from '.';

const Accordion: React.FC<AccordionProps> = ({ children, label, extra }: AccordionProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeightStyle, setContentHeightStyle] = useState('0');

  const switchStatus = () => {
    setCollapsed((status) => !status);
  };

  useEffect(() => {
    if (collapsed) {
      setContentHeightStyle(`${contentRef.current?.scrollHeight}px`);
    } else {
      setContentHeightStyle('0');
    }
  }, [collapsed]);

  return (
    <div className='px-4'>
      <div
        onClick={switchStatus}
        aria-hidden='true'
        className='w-full flex justify-between cursor-pointer py-4'
      >
        <div className='flex items-center'>
          <button className='mr-4'>
            <ChevronDownIcon
              className={`w-6 h-6 ${
                collapsed ? 'rotate-180' : 'rotate-270'
              } transition duration-500`}
            />
          </button>
          <span>{label}</span>
        </div>
        {extra}
      </div>
      <div
        ref={contentRef}
        style={{
          height: contentHeightStyle,
        }}
        className={`w-full overflow-hidden origin-top transition-height duration-500`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
