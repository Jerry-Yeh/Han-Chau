import { ChangeEvent, MouseEvent } from 'react';

export interface AbstractCheckboxProps<T> {
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  value: CheckboxValueType;
  children?: React.ReactNode;
  id?: string;
  checked?: boolean;
  image?: React.ReactNode;
  onChange?: (e: T) => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export type InputMouseEvent = MouseEvent<HTMLInputElement>;

export type CheckboxValueType = string | number | boolean;

export interface CheckboxProps extends AbstractCheckboxProps<InputChangeEvent> {
  label?: string;
  description?: string;
}

export interface CheckboxOptionType {
  label: string;
  description?: string;
  value: CheckboxValueType;
}

export interface CheckboxGroupContextProps {
  value: CheckboxValueType[];
  disabled?: boolean;
  onChange?: (value: CheckboxValueType) => void;
}

export interface GroupProps {
  children?: React.ReactNode;
  value: CheckboxValueType[];
  disabled?: boolean;
  className?: string;
  options?: CheckboxOptionType[];
  image?: boolean;
  onChange?: (value: CheckboxValueType[]) => void;
}
