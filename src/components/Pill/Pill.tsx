import React from 'react';

import type { PillItem } from '.';
import { Nullable } from '~/typings/utils';

interface Props {
  children?: React.ReactNode;
  activeKey: Nullable<string | number>;
  list: PillItem[];
  onChange: (value: string | number) => void;
}

const Pill: React.FC<Props> = (props: Props) => {
  return (
    <div className='flex gap-x-2 overflow-auto scrollbar-hide'>
      {props.list.map((item, index) => {
        return (
          <button
            className='py-1 cursor-pointer'
            key={index}
            onClick={() => props.onChange(item.value)}
          >
            <div
              className={`
                px-4 py-2 rounded text-body-s whitespace-nowrap transition-all delay-800
                ${
                  props.activeKey === item.value
                    ? 'bg-highlight-light text-highlight'
                    : 'bg-secondary text-secondary'
                }`}
            >
              {item.label}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Pill;
