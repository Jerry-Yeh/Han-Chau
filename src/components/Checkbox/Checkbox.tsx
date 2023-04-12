import React, { useContext, useState, useEffect } from 'react';

import HCControlItem from '../ControlItem';
import CheckboxGroupContext from './context';
import Check from '~/assets/img/heroicons/mini/check';

import { CheckboxProps, CheckboxValueType } from './interface';
import { InputChangeEvent, InputMouseEvent } from '../ControlItem/interface';

const HCCheckbox: React.ForwardRefRenderFunction<HTMLDivElement, CheckboxProps> = (
  props: CheckboxProps,
) => {
  const groupContext = useContext(CheckboxGroupContext);
  const [valueType, setValueType] = useState('');
  const [ringClass, setRingClass] = useState('');
  const [fillingClass, setFillingClass] = useState('');

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
    ...props,
    disabled: props.disabled || groupContext?.disabled,
    value: `${props.value}`,
    checked: groupContext ? groupContext.value.includes(props.value) : props.checked,
    onChange: onChangeHandler,
    onClick: onClickHandler,
  };

  useEffect(() => {
    setValueType(typeof props.value);
  }, [valueType, props.value]);

  useEffect(() => {
    if (checkboxProps.checked) {
      if (checkboxProps.disabled) {
        setRingClass('control-item-border-disenabled');
        setFillingClass('control-item-bg-disenabled');
      } else {
        setRingClass('control-item-border-selected');
        setFillingClass('control-item-bg-selected');
      }
    } else {
      if (checkboxProps.disabled) {
        setRingClass('control-item-border-disabled');
        setFillingClass('control-item-bg-disabled');
      } else {
        setRingClass('control-item-border');
        setFillingClass('control-item-bg');
      }
    }
  }, [checkboxProps.checked, checkboxProps.disabled]);

  return (
    <HCControlItem
      type='checkbox'
      {...checkboxProps}
      controller={
        <div
          className={`
            input w-4 h-4 flex items-center justify-center
            border ${ringClass}
            rounded hover:border-hover`}
        >
          <div className={`rounded ${fillingClass}`}>
            {checkboxProps.checked && <Check className='icon-onColor' />}
          </div>
        </div>
      }
    />
  );
};

export default HCCheckbox;
