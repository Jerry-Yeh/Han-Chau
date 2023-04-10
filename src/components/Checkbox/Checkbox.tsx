import React, { useContext, useState, useEffect } from 'react';

import CheckboxGroupContext from './context';
import Check from '~/assets/img/heroicons/mini/check';

import { CheckboxProps, InputChangeEvent, CheckboxValueType, InputMouseEvent } from './interface';

const HCCheckbox: React.ForwardRefRenderFunction<HTMLDivElement, CheckboxProps> = (
  props: CheckboxProps,
) => {
  const groupContext = useContext(CheckboxGroupContext);
  const [valueType, setValueType] = useState('');
  const [borderClass, setBorderClass] = useState('');
  const [bgClass, setBgClass] = useState('');
  const [iconClass, setIconClass] = useState('');
  const [labelClass, setLabelClass] = useState('');

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

    if (props.onChange) {
      props.onChange(e);
    }
  };

  const onClickHandler = (e: InputMouseEvent) => {
    if (props.onClick) props.onClick(e);
  };

  // Replace value type because input value only receives string and number type.
  const checkboxProps: Omit<CheckboxProps, 'value'> & { value: string } = {
    disabled: props.disabled,
    value: `${props.value}`,
    onChange: onChangeHandler,
    onClick: onClickHandler,
  };

  checkboxProps.checked = groupContext ? groupContext.value.includes(props.value) : props.checked;
  checkboxProps.disabled = checkboxProps.disabled || groupContext?.disabled;

  useEffect(() => {
    setValueType(typeof props.value);
  }, [valueType, props.value]);

  useEffect(() => {
    if (checkboxProps.checked) {
      if (checkboxProps.disabled) {
        setBorderClass('border border-disabled');
        setIconClass('icon-bg-tertiary');
        setLabelClass('text-disabled');
        setBgClass('bg-disabled');
      } else {
        setBorderClass('border-2 border-active');
        setIconClass('icon-bg-highlight');
        setLabelClass('text-highlight');
        setBgClass('bg-highlight-light');
      }
    } else {
      setIconClass('');
      if (checkboxProps.disabled) {
        setBorderClass('border border-disabled');
        setLabelClass('text-disabled');
        setBgClass('bg-disabled');
      } else {
        setBorderClass('border');
        setLabelClass('text-secondary');
        setBgClass('bg-primary');
      }
    }
  }, [checkboxProps.checked, checkboxProps.disabled]);

  return (
    <div
      className={`
        w-full text-secondary
        rounded-lg border-solid hover:border-2 ${borderClass} ${bgClass}
        hover:border-hover hover:bg-hover
        transition duration-300
        flex relative`}
    >
      {/* Form element */}
      <label
        htmlFor={`${props.value}`}
        className={`absolute inset-0 w-full h-full flex ${
          checkboxProps.disabled ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'
        }`}
      >
        <input
          type='checkbox'
          id={`${props.value}`}
          {...checkboxProps}
          className='appearance-none'
        />
      </label>
      {/* UI layout */}
      <div className={`flex grow ${props.image ? 'flex-col' : 'pl-4 py-4'}`}>
        <div className={`flex ${props.image ? 'grow shrink-0' : 'mr-4'}`}>
          {props.image && <div className='w-8 mr-auto'></div>}
          {props.image && <div className='pt-4'>{props.image}</div>}
          <div className={`${props.image ? 'p-2 ml-auto' : ''}`}>
            <div
              className={`
                input w-4 h-4 flex items-center justify-center
                border ${checkboxProps.disabled ? 'border-disabled' : 'border-primary'}
                rounded hover:border-hover`}
            >
              <div className={`rounded ${iconClass}`}>
                {checkboxProps.checked && <Check className='icon-onColor' />}
              </div>
            </div>
          </div>
        </div>
        <div className={`flex flex-col items-center ${props.image ? 'py-4' : ''}`}>
          <span className={`text-body-s ${labelClass}`}>{props.label}</span>
          {props.description && (
            <span
              className={`text-body-xs mt-1 ${
                checkboxProps.disabled ? 'text-disabled' : 'text-tertiary'
              }`}
            >
              {props.description}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HCCheckbox;
