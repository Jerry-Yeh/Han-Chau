import React, { useState, useEffect } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

import type { ListItemType } from '.';

const Item: React.FC<ListItemType> = (props: ListItemType) => {
  const [imgClass, setImgClass] = useState('');
  const [titleClass, setTitleClass] = useState('');

  useEffect(() => {
    switch (props.type) {
      case 'warning':
        setImgClass('bg-destructive-light icon-destructive');
        setTitleClass('text-destructive');
        break;
      default:
        setImgClass('bg-tertiary icon-secondary');
        setTitleClass('text-secondary');
        break;
    }
  }, [props.type]);

  return (
    <div
      className={`flex items-center px-4 
        ${props.description ? 'py-2' : 'py-1.5'}
        cursor-pointer bg-primary rounded-lg`}
      onClick={props.onClick}
      aria-hidden='true'
    >
      <div
        className={`
          ${imgClass}
          ${props.description ? 'w-16 h-16 rounded' : 'w-9 h-9 rounded-lg p-1.5'} aspect-square`}
      >
        {props.img}
      </div>
      <div className='w-full flex flex-col p-4'>
        <span className={`text-body-bold-m ${titleClass} ${props.description && 'mb-1'}`}>
          {props.title}
        </span>
        {props.description && (
          <span className='text-body-s text-tertiary'>{props.description}</span>
        )}
      </div>
      {props.actionType && (
        <div
          className='justify-self-end icon-secondary w-6 h-6 aspect-square'
          onClick={props.onControl}
          aria-hidden='true'
        >
          {props.actionType === 'add' && <PlusCircleIcon />}
          {props.actionType === 'next' && <ChevronRightIcon />}
        </div>
      )}
    </div>
  );
};

export default Item;
