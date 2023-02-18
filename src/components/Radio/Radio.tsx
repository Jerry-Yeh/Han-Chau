import React, { useContext } from 'react';

import RadioGroupContext from './context';

import type { RadioProps, InputChangeEvent } from './interface';

const HCRadio: React.ForwardRefRenderFunction<HTMLDivElement, RadioProps> = (
  props: RadioProps,
  _,
) => {
  const groupContext = useContext(RadioGroupContext);

  const onChange = (e: InputChangeEvent) => {
    console.log(e.target.value);
    groupContext?.onChange?.(e);
  };

  const radioProps: RadioProps = {
    disabled: props.disabled,
  };

  if (groupContext) {
    radioProps.onChange = onChange;
    radioProps.checked = String(props.value) === String(groupContext?.value);
    radioProps.disabled = radioProps.disabled || groupContext.disabled;
  }

  return (
    <div
      className='
        radio w-full text-secondary
        rounded-lg border border-solid border-secondary transition-all duration-300
        pl-4 py-3.5 flex bg-primary relative
        hover:border-hover hover:bg-hover'
    >
      <input
        {...radioProps}
        type='radio'
        id={`${props.value}`}
        value={props.value}
        className='appearance-none'
      />
      <div
        className='input w-4 h-4 mr-4 flex items-center justify-center
          border border-primary rounded-full hover:border-hover'
      >
        <div className='core w-2.5 h-2.5 rounded-full'></div>
      </div>
      <label
        htmlFor={`${props.value}`}
        className='absolute inset-0 w-full h-full pl-12 py-3.5 text-body-s flex hover:cursor-pointer'
      >
        {props.label}
      </label>
      {props.content && <p className='text-tertiary text-body-xs mt-6'>{props.content}</p>}
    </div>
  );
};

export default React.forwardRef(HCRadio);
