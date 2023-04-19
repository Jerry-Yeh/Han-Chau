import React, { useContext, useState, useEffect } from 'react';

import HCControlItem from '../ControlItem';
import RadioGroupContext from './context';

import type { RadioValueType, RadioProps } from './interface';
import type { InputMouseEvent, InputChangeEvent } from '../ControlItem/interface';

const HCRadio: React.ForwardRefRenderFunction<HTMLDivElement, RadioProps> = (
  props: RadioProps,
  _,
) => {
  const groupContext = useContext(RadioGroupContext);
  const [valueType, setValueType] = useState('');
  const [ringClass, setRingClass] = useState('');
  const [fillingClass, setFillingClass] = useState('');

  const onChangeHandler = (e: InputChangeEvent) => {
    const value = e.target.value;

    if (groupContext && groupContext.onChange) {
      let oriValue: RadioValueType;

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

  const radioProps: Omit<RadioProps, 'value'> & { value: string } = {
    ...props,
    disabled: props.disabled || groupContext?.disabled,
    value: `${props.value}`,
    checked: groupContext ? groupContext.value === props.value : props.checked,
    onChange: onChangeHandler,
    onClick: onClickHandler,
  };

  useEffect(() => {
    setValueType(typeof props.value);
  }, [valueType, props.value]);

  useEffect(() => {
    if (radioProps.checked) {
      if (radioProps.disabled) {
        setFillingClass('control-item-bg-disenabled');
        setRingClass('control-item-border-disenabled');
      } else {
        setFillingClass('control-item-bg-selected');
        setRingClass('control-item-border-selected');
      }
    } else {
      if (radioProps.disabled) {
        setFillingClass('control-item-bg');
        setRingClass('control-item-border-disabled');
      } else {
        setFillingClass('control-item-bg');
        setRingClass('control-item-border');
      }
    }
  }, [radioProps.checked, radioProps.disabled]);

  return (
    <HCControlItem
      type='radio'
      {...radioProps}
      controller={
        <div
          className={`${ringClass} w-4 h-4 flex items-center justify-center border rounded-full`}
        >
          <div className={`w-2.5 h-2.5 rounded-full ${fillingClass}`}></div>
        </div>
      }
    />
  );
};

export default React.forwardRef(HCRadio);
