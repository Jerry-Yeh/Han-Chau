import React, { useContext, useState, useEffect } from 'react';

import CheckboxGroupContext from './context';
import Check from '~/assets/img/heroicons/mini/check';

import { CheckboxProps, InputChangeEvent, CheckboxValueType, InputMouseEvent } from './interface';

const HCCheckbox: React.ForwardRefRenderFunction<HTMLDivElement, CheckboxProps> = (
  props: CheckboxProps,
) => {
  const groupContext = useContext(CheckboxGroupContext);
  const [valueType, setValueType] = useState('');

  const onChangeHandler = (e: InputChangeEvent) => {
    const value = e.target.value;

    if (groupContext && groupContext.onChange) {
      let oriValue: CheckboxValueType;

      // Handle boolean and number type cases.
      switch (valueType) {
        case 'boolean':
          oriValue = value === 'true' ? true : false;
          break;
        case 'number':
          oriValue = +value;
          break;
        default:
          oriValue = value;
          break;
      }

      groupContext.onChange(oriValue);
    }
  };

  const onClickHandler = (e: InputMouseEvent) => {
    // console.log('click', e);
  };

  // Replace value type because input value only receives string and number type.
  const checkboxProps: Omit<CheckboxProps, 'value'> & { value: string } = {
    disabled: props.disabled,
    value: `${props.value}`,
  };

  if (groupContext) {
    checkboxProps.onChange = onChangeHandler;
    checkboxProps.onClick = onClickHandler;
    checkboxProps.checked = groupContext?.value.includes(props.value);
    checkboxProps.disabled = checkboxProps.disabled || groupContext.disabled;
  }

  useEffect(() => {
    setValueType(typeof props.value);
  }, [valueType, props.value]);

  return (
    <div
      className='
        checkbox w-full text-secondary
        rounded-lg border border-solid border-secondary transition-all duration-300
        pl-4 py-3.5 flex bg-primary relative
        hover:border-hover hover:bg-hover'
    >
      <input {...checkboxProps} type='checkbox' id={`${props.value}`} className='appearance-none' />
      <div
        className='input w-4 h-4 mr-4 flex items-center justify-center
          border border-primary rounded hover:border-hover'
      >
        <div className='core rounded'>
          <Check className='icon-onColor' />
        </div>
      </div>
      <label
        htmlFor={`${props.value}`}
        className='absolute inset-0 w-full h-full pl-12 py-3.5 text-body-s flex hover:cursor-pointer'
      >
        {props.label}
      </label>
      {props.description && <p className='text-tertiary text-body-xs mt-6'>{props.description}</p>}
    </div>
  );
};

export default HCCheckbox;
