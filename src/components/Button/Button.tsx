import React, { ReactNode, MouseEvent } from 'react';
import classNames from 'classnames';
import { ArrowLongRightIcon } from '@heroicons/react/20/solid';

interface Props {
  children?: ReactNode;
  className?: string;
  color: 'primary' | 'secondary' | 'tertiary' | 'success' | 'destructive';
  disabled?: boolean;
  block?: boolean;
  textColor?: string;
  next?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const HCButton: React.FC<Props> = (props: Props) => {
  const colorVariants = (color: string, disabled = false) =>
    ({
      primary: !disabled
        ? 'bg-highlight hover:bg-highlight-hover active:bg-highlight-pressed text-onColor'
        : 'bg-highlight-disabled text-disabled',
      secondary: !disabled
        ? 'bg-tertiary hover:bg-hover active:bg-pressed text-secondary'
        : 'bg-disabled text-disabled',
      tertiary: !disabled
        ? 'bg-primary text-secondary hover:bg-hover hover:border-hover active:bg-pressed active:border-pressed  border border-secondary'
        : 'bg-primary text-disabled border border-disabled',
      success: !disabled
        ? 'bg-tertiary text-success hover:bg-hover active:bg-pressed'
        : 'bg-success-disabled text-disabled',
      destructive: !disabled
        ? 'bg-destructive-light text-destructive hover:bg-destructive-light-hover active:bg-destructive-light-pressed'
        : 'bg-destructive-disabled text-disabled',
    }[color]);
  const cursorClass = classNames(props.disabled ? 'cursor-not-allowed' : 'cursor-pointer');

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button
      className={`
        ${props.className}
        ${colorVariants(props.color, props.disabled)}
        ${cursorClass}
        ${props.block && 'w-full'}
        h-12
        transition-colors
        rounded-lg
        px-4`}
      disabled={props.disabled}
      onClick={handleClick}
    >
      <div className='flex justify-between items-center'>
        <div>{props.prefix}</div>
        <div className='flex justify-center items-center'>
          {props.children}
          {props.next && <ArrowLongRightIcon className='h-6 w-6 ml-2' />}
        </div>
        <div>{props.suffix}</div>
      </div>
    </button>
  );
};

HCButton.defaultProps = {
  className: '',
  color: 'primary',
  disabled: false,
  block: true,
  next: false,
};

export default HCButton;
