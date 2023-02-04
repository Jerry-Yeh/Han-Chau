import React, { useContext } from 'react';

import RadioGroupContext from './context';

import type { RadioProps, InputChangeEvent } from './interface';

const Radio: React.ForwardRefRenderFunction<HTMLDivElement, RadioProps> = (
  props: RadioProps,
  ref,
) => {
  const groupContext = useContext(RadioGroupContext);

  const onChange = (e: InputChangeEvent) => {
    groupContext?.onChange?.(e);
  };

  const radioProps: RadioProps = {
    disabled: props.disabled,
  };

  if (groupContext) {
    radioProps.onChange = onChange;
    radioProps.checked = String(props.value) === groupContext?.value;
    radioProps.disabled = radioProps.disabled || groupContext.disabled;
  }

  return (
    <div className={`radio`}>
      <input {...radioProps} type='radio' id={`${props.value}`} value={props.value} />
      <div className='input'>
        <div className='core'></div>
      </div>
      <label htmlFor={`${props.value}`}>{props.label}</label>
      {props.content && <p>{props.content}</p>}
    </div>
  );
};

export default React.forwardRef(Radio);
