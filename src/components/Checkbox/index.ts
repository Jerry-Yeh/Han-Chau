import Checkbox from './Checkbox';
import Group from './Group';

import type { CheckboxProps, GroupProps } from './interface';

export type { CheckboxProps, GroupProps } from './interface';

export type Checkbox = React.ForwardRefExoticComponent<CheckboxProps>;
export type CheckboxGroup = React.ForwardRefExoticComponent<GroupProps>;
export type { CheckboxValueType } from './interface';

export const HCCheckbox = Checkbox as Checkbox;
export const HCCheckboxGroup = Group as CheckboxGroup;
