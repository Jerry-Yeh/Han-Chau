import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

import type { ListItem } from '.';

interface Props {
  children?: React.ReactNode;
  className?: string;
  list: ListItem[];
  bleed: boolean;
  onClick: () => void;
}

const ListItem: React.FC<Props> = (props: Props) => {
  return (
    <div className={`flex flex-col ${props.className} ${!props.bleed && 'p-4 gap-y-4'}`}>
      {props.list.map((item, index) => (
        <div
          key={index}
          className='flex items-center px-4 py-2 cursor-pointer bg-primary rounded-lg'
        >
          <div className={`${item.content ? 'w-16 h-16' : 'w-9 h-9'} aspect-square`}>
            {item.img}
          </div>
          <div className='w-full flex flex-col p-4'>
            <span className='text-body-bold-m text-secondary mb-1'>{item.title}</span>
            {item.content && <span className='text-body-s text-tertiary'>{item.content}</span>}
          </div>
          {item.type && (
            <div className='justify-self-end icon-secondary w-6 h-6 aspect-square'>
              {item.type === 'add' && <PlusCircleIcon />}
              {item.type === 'next' && <ChevronRightIcon />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListItem;
