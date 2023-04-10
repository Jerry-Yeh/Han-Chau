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
    if (props.onClick) {
      props.onClick(e);
    }
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
      } else {
        setBorderClass('border-2 border-active');
        setIconClass('icon-bg-highlight');
        setLabelClass('text-highlight');
      }
    } else {
      setIconClass('');
      if (checkboxProps.disabled) {
        setBorderClass('border border-disabled');
        setLabelClass('text-disabled');
      } else {
        setBorderClass('border');
        setLabelClass('text-secondary');
      }
    }
  }, [checkboxProps.checked, checkboxProps.disabled]);

  return (
    <div
      className={`
        checkbox w-full text-secondary
        rounded-lg border-solid hover:border-2 ${borderClass}
        hover:border-hover hover:bg-hover
        transition duration-300
        pl-4 py-3.5 flex bg-primary relative`}
    >
      <input {...checkboxProps} type='checkbox' id={`${props.value}`} className='appearance-none' />
      <div
        className={`input w-4 h-4 mr-4 flex items-center justify-center
          border ${
            checkboxProps.disabled ? 'border-disabled' : 'border-primary'
          } rounded hover:border-hover`}
      >
        <div className={`rounded ${iconClass}`}>
          {checkboxProps.checked && <Check className='icon-onColor' />}
        </div>
      </div>
      <label
        htmlFor={`${props.value}`}
        className={`
          absolute inset-0 w-full h-full pl-12 py-3.5 text-body-s flex hover:cursor-pointer
          ${labelClass}`}
      >
        {props.label}
      </label>
      {props.description && (
        <p
          className={`text-body-xs mt-6 ${
            checkboxProps.disabled ? 'text-disabled' : 'text-tertiary'
          }`}
        >
          {props.description}
        </p>
      )}
    </div>
  );
};

export default HCCheckbox;
