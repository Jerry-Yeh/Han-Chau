import React from 'react';
import classNames from 'classnames';

interface Props {
  children?: React.ReactNode;
  className?: string;
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'highlight'
    | 'highlight-light'
    | 'success'
    | 'success-light'
    | 'destructive'
    | 'destructive-light'
    | 'warning'
    | 'warning-light';
  disabled?: boolean;
  block?: boolean;
  textColor?: string;
}

const HCButton: React.FC<Props> = (props: Props) => {
  const colorVariants = (color: string, disabled = false) =>
    ({
      primary: !disabled
        ? 'bg-primary hover:bg-hover active:bg-pressed text-primary'
        : 'bg-disabled text-disabled',
      secondary: !disabled
        ? 'bg-secondary hover:bg-hover active:bg-pressed text-secondary'
        : 'bg-disabled text-disabled',
      tertiary: !disabled
        ? 'bg-tertiary hover:bg-hover active:bg-pressed text-tertiary'
        : 'bg-disabled text-disabled',
      highlight: !disabled
        ? 'bg-highlight hover:bg-highlight-hover active:bg-highlight-pressed text-onColor'
        : 'bg-highlight-disabled text-disabled',
      'highlight-light': !disabled
        ? 'bg-highlight-light hover:bg-highlight-light-hover active:bg-highlight-light-pressed'
        : 'bg-highlight-disabled text-disabled',
      success: !disabled
        ? 'bg-success hover:bg-success-hover active:bg-success-pressed text-onColor'
        : 'bg-success-disabled text-disabled',
      'success-light': !disabled
        ? 'bg-success-light hover:bg-success-light-hover active:bg-success-light-pressed'
        : 'bg-success-disabled text-disabled',
      destructive: !disabled
        ? 'bg-destructive hover:bg-destructive-hover active:bg-destructive-pressed text-onColor'
        : 'bg-destructive-disabled text-disabled',
      'destructive-light': !disabled
        ? 'bg-destructive-light hover:bg-destructive-light-hover active:bg-destructive-light-pressed'
        : 'bg-destructive-disabled text-disabled',
      warning: !disabled
        ? 'bg-warning hover:bg-warning-hover active:bg-warning-pressed text-onColor'
        : 'bg-warning-disabled text-disabled',
      'warning-light': !disabled
        ? 'bg-warning-light hover:bg-warning-light-hover active:bg-warning-light-pressed'
        : 'bg-warning-disabled text-disabled',
    }[color]);
  const btnClass = classNames(props.disabled ? 'cursor-not-allowed' : 'cursor-pointer');

  return (
    <button
      className={`
        ${props.className}
        ${colorVariants(props.color, props.disabled)}
        ${btnClass}
        ${props.block && 'w-full'}
        h-12
        border-none
        transition-colors
        rounded-lg
        flex justify-center items-center`}
    >
      {props.children}
    </button>
  );
};

HCButton.defaultProps = {
  className: '',
  color: 'primary',
  disabled: false,
  block: true,
};

export default HCButton;
