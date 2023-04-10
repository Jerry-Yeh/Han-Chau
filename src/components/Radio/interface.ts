import { ChangeEvent } from 'react';

import type { Item } from '~/typings/utils';
import type { AbstractCheckboxProps } from '../Checkbox/interface';

export type RadioGroupOptionType = 'default' | 'button';
export interface RadioProps extends AbstractCheckboxProps<InputChangeEvent> {
  label?: string;
  description?: string;
}

// export interface RadioChangeEventTarget extends RadioProps {
//   checked: boolean;
// }

// export interface RadioChangeEvent {
//   target: RadioChangeEventTarget;
//   stopPropagation: () => void;
//   preventDefault: () => void;
//   nativeEvent: MouseEvent;
// }

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export interface GroupProps {
  children?: React.ReactNode;
  value?: any;
  disabled?: boolean;
  className?: string;
  onChange?: (e: InputChangeEvent) => void;
}

export interface RadioGroupContextProps {
  value: any;
  disabled?: boolean;
  onChange?: (e: InputChangeEvent) => void;
}

export interface RadioItem extends Item {
  content?: string;
}
