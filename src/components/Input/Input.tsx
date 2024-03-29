import React, { Fragment, ReactNode, useRef, FocusEvent } from 'react';
import { Input, InputRef } from 'antd';
import classNames from 'classnames';

import type { InputChangeEventType } from '.';
import type { Nullable } from '~/typings/utils';

interface Props {
  className?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
  value?: Nullable<string | number>;
  onChange?: (e: InputChangeEventType) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

const HCInput: React.FC<Props> = (props: Props) => {
  const btnClass = classNames(
    props.disabled ? 'cursor-not-allowed text-disabled' : 'cursor-pointer',
  );
  const inputRef = useRef<InputRef>(null);

  return (
    <Fragment>
      {props.label && (
        <label
          htmlFor={props.label}
          className={`inline-block mb-2 text-body-bold-s text-secondary`}
        >
          {props.label}
        </label>
      )}
      <Input
        ref={inputRef}
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
          text-body-s
          h-12
          rounded-lg
          text-tertiary`}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
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
