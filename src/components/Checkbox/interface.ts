import type { AbstractContorlItemProps } from '../ControlItem/interface';

export type CheckboxValueType = string | number | boolean;

export interface CheckboxProps extends AbstractContorlItemProps {
  value: CheckboxValueType;
}

export interface CheckboxOptionType {
  label: string;
  description?: string;
  value: CheckboxValueType;
  image?: React.ReactNode;
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
