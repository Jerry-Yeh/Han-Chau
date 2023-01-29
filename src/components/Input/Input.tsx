import React, { Fragment, ReactNode, Ref } from 'react';
import { Input, InputRef } from 'antd';
import classNames from 'classnames';

// import classes from './Input.module.scss';

interface Props {
  className?: string;
  label?: string;
  value: Ref<InputRef>;
  type?: string;
  placeholder?: string;
  prefix?: string | ReactNode;
  suffix?: string | ReactNode;
  disabled?: boolean;
}

const HCInput: React.FC<Props> = (props: Props) => {
  const btnClass = classNames(
    props.disabled ? 'cursor-not-allowed text-disabled' : 'cursor-pointer',
  );

  return (
    <Fragment>
      {props.label && (
        <label htmlFor={props.label} className={`inline-block mb-2 text-body-bold-s`}>
          {props.label}
        </label>
      )}
      <Input
        id={props.label}
        ref={props.value}
        type={props.type}
        placeholder={props.placeholder}
        prefix={props.prefix}
        suffix={props.suffix}
        disabled={props.disabled}
        className={`
          ${props.className}
          ${btnClass}
          w-full
          text-body-s
          h-12
          rounded-lg`}
      />
    </Fragment>
  );
};

HCInput.defaultProps = {
  className: '',
  type: 'text',
  placeholder: '',
  disabled: false,
};

export default HCInput;
