import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

import type { ListItemType } from '.';

const Item: React.FC<ListItemType> = (props: ListItemType) => {
  return (
    <div
      className='flex items-center px-4 py-2 cursor-pointer bg-primary rounded-lg'
      onClick={props.onClick}
      aria-hidden='true'
    >
      <div className={`${props.description ? 'w-16 h-16' : 'w-9 h-9'} aspect-square`}>
        {props.img}
      </div>
      <div className='w-full flex flex-col p-4'>
        <span className='text-body-bold-m text-secondary mb-1'>{props.title}</span>
        {props.description && (
          <span className='text-body-s text-tertiary'>{props.description}</span>
        )}
      </div>
      {props.type && (
        <div
          className='justify-self-end icon-secondary w-6 h-6 aspect-square'
          onClick={props.onControl}
          aria-hidden='true'
        >
          {props.type === 'add' && <PlusCircleIcon />}
          {props.type === 'next' && <ChevronRightIcon />}
        </div>
      )}
    </div>
  );
};

export default Item;
