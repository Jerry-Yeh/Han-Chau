import { ChangeEvent } from 'react';

import type { Item } from '~/typings/utils';
import type { AbstractContorlItemProps } from '../ControlItem/interface';
import type { Nullable } from '~/typings/utils';

export type RadioGroupOptionType = 'default' | 'button';
export type RadioValueType = string | number | boolean;
export interface RadioProps extends AbstractContorlItemProps {
  value: RadioValueType;
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

// export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export interface RadioOptionType {
  label: string;
  description?: string;
  value: RadioValueType;
}

export interface RadioGroupContextProps {
  value: Nullable<RadioValueType>;
  disabled?: boolean;
  onChange?: (e: RadioValueType) => void;
}

export interface GroupProps {
  children?: React.ReactNode;
  value: Nullable<RadioValueType>;
  disabled?: boolean;
  className?: string;
  options?: RadioOptionType[];
  image?: boolean;
  onChange?: (e: RadioValueType) => void;
}
