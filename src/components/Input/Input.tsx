import React, { Fragment, ReactNode } from 'react';
import { Input } from 'antd';
import classNames from 'classnames';

interface Props {
  className?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        value={props.value || ''}
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
        onChange={props.onChange}
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
