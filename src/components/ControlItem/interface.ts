import { ChangeEvent, MouseEvent } from 'react';

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export type InputMouseEvent = MouseEvent<HTMLInputElement>;

export type ValueType = string | number | boolean;

export interface InputProps {
  type?: 'checkbox' | 'radio';
  value: ValueType;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: InputChangeEvent) => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface AbstractContorlItemProps extends InputProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
  image?: React.ReactNode;
  label?: string;
  description?: string;
}

export interface Props extends AbstractContorlItemProps {
  controller: React.ReactNode;
}
