import React, { useState, useEffect } from 'react';

import type { InputProps, Props } from './interface';

const ControlItem: React.FC<Props> = (props: Props) => {
  const [borderClass, setBorderClass] = useState('');
  const [bgClass, setBgClass] = useState('');
  const [labelClass, setLabelClass] = useState('');

  const inputProps: Omit<InputProps, 'value'> & { value: string } = {
    value: `${props.value}`,
    type: props.type,
    disabled: props.disabled,
    checked: props.checked,
    onChange: props.onChange,
    onClick: props.onClick,
  };

  useEffect(() => {
    if (props.checked) {
      if (props.disabled) {
        setBorderClass('border-disabled');
        setBgClass('bg-disabled');
        setLabelClass('text-disabled');
      } else {
        setBorderClass('border-active');
        setBgClass('bg-highlight-light');
        setLabelClass('text-highlight');
      }
    } else {
      if (props.disabled) {
        setBorderClass('border-disabled');
        setBgClass('bg-disabled');
        setLabelClass('text-disabled');
      } else {
        setBorderClass('border');
        setBgClass('bg-primary');
        setLabelClass('text-secondary');
      }
    }
  }, [props.checked, props.disabled]);

  return (
    <div
      className={`
        w-full text-secondary
        rounded-lg border-solid border-2 ${borderClass} ${bgClass}
        hover:border-hover hover:bg-hover
        transition duration-300
        flex relative`}
    >
      {/* Form element */}
      <label
        className={`absolute inset-0 w-full h-full flex ${
          props.disabled ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'
        }`}
      >
        <input {...inputProps} className='appearance-none' />
      </label>

      {/* UI layout */}
      <div className={`flex grow ${props.image ? 'flex-col' : 'pl-4 py-4'}`}>
        <div className={`flex ${props.image ? 'grow shrink-0' : 'mr-4'}`}>
          {props.image && <div className='w-8 mr-auto'></div>}
          {props.image && <div className='pt-4'>{props.image}</div>}
          <div className={`${props.image ? 'p-2 ml-auto' : ''}`}>{props.controller}</div>
        </div>
        <div className={`flex flex-col ${props.image ? 'py-4 items-center' : ''}`}>
          <span className={`text-body-s ${labelClass}`}>{props.label}</span>
          {props.description && (
            <span
              className={`text-body-xs mt-1 ${props.disabled ? 'text-disabled' : 'text-tertiary'}`}
            >
              {props.description}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ControlItem;
