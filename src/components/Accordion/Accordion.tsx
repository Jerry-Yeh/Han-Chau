import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import type { AccordionProps } from '.';
import { ACCORDION_SIZE } from '.';

const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  label,
  extra,
  size = ACCORDION_SIZE.m,
}: AccordionProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeightStyle, setContentHeightStyle] = useState('0');

  const switchStatus = () => {
    setCollapsed((status) => !status);
  };


  useEffect(() => {
    if (collapsed) {
      setContentHeightStyle(`10000px`);
    } else {
      setContentHeightStyle('0');
    }
  }, [collapsed]);

  return (
    <div className={className || ''}>
      <div
        onClick={switchStatus}
        aria-hidden='true'
        className={`w-full flex justify-between cursor-pointer ${size === ACCORDION_SIZE.m && 'py-3'
          }`}
      >
        <div className='flex items-center'>
          {size === ACCORDION_SIZE.m && (
            <ChevronDownIcon
              className={`w-6 h-6 ${!collapsed && '-rotate-90'} transition duration-500 mr-4`}
            />
          )}
          <span>{label}</span>
          {size === ACCORDION_SIZE.s && (
            <ChevronDownIcon
              className={`w-5 h-5 ${!collapsed && '-rotate-90'} transition duration-500 ml-1`}
            />
          )}
        </div>
        {extra}
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: contentHeightStyle,
        }}
        className={`w-full overflow-hidden origin-top transition-all duration-500`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
