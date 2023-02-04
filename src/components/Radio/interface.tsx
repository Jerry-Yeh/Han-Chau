import { ChangeEvent } from 'react';

export type RadioGroupOptionType = 'default' | 'button';

export interface AbstractCheckboxProps<T> {
  prefixCls?: string;
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: T) => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  value?: any;
  tabIndex?: number;
  name?: string;
  children?: React.ReactNode;
  id?: string;
  autoFocus?: boolean;
  type?: string;
  skipGroup?: boolean;
}

export interface RadioProps extends AbstractCheckboxProps<InputChangeEvent> {
  /**
   * Control the appearance for Radio to display as button or not
   *
   * @default 'default'
   * @internal
   */
  optionType?: RadioGroupOptionType;
  label?: string;
  content?: string;
}

export interface RadioChangeEventTarget extends RadioProps {
  checked: boolean;
}

// export interface RadioChangeEvent {
//   target: RadioChangeEventTarget;
//   stopPropagation: () => void;
//   preventDefault: () => void;
//   nativeEvent: MouseEvent;
// }

export interface GroupProps {
  children?: React.ReactNode;
  onChange?: (e: InputChangeEvent) => void;
  value?: any;
  disabled?: boolean;
}

export interface RadioGroupContextProps {
  onChange?: (e: InputChangeEvent) => void;
  value: any;
  disabled?: boolean;
}

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;
