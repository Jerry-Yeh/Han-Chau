import React, { useState, useEffect, ReactNode } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid';

import type { ListItemType } from '.';

const Item: React.FC<ListItemType> = ({
  title,
  img,
  type,
  actionType,
  description,
  imgClass,
  onClick,
  onControl,
}: ListItemType) => {
  const [titleClass, setTitleClass] = useState('');
  const [actionIcon, setActionIcon] = useState<ReactNode>();

  useEffect(() => {
    switch (type) {
      case 'warning':
        setTitleClass('text-destructive');
        break;
      default:
        setTitleClass('text-secondary');
        break;
    }
  }, [type]);

  useEffect(() => {
    switch (actionType) {
      case 'add':
        setActionIcon(<PlusCircleIcon />);
        break;
      case 'next':
        setActionIcon(<ChevronRightIcon />);
        break;
      case 'info':
        setActionIcon(<EllipsisVerticalIcon />);
        break;
    }
  }, [actionType]);

  return (
    <div
      className={`flex items-center px-4 
        ${description ? 'py-2' : 'py-1.5'}
        cursor-pointer bg-primary rounded-lg`}
      onClick={onClick}
      aria-hidden='true'
    >
      <div
        className={`
          ${imgClass}
          ${description ? 'w-16 h-16 rounded' : 'w-9 h-9 rounded-lg'} overflow-hidden`}
      >
        {img}
      </div>
      <div className='grow flex flex-col p-4'>
        <span className={`text-body-bold-m ${titleClass} ${description && 'mb-1'}`}>{title}</span>
        {description && <span className='text-body-s text-tertiary'>{description}</span>}
      </div>
      {actionType && (
        <div
          className='justify-self-end icon-secondary w-6 h-6 aspect-square'
          onClick={onControl}
          aria-hidden='true'
        >
          {actionIcon}
        </div>
      )}
    </div>
  );
};

export default Item;
