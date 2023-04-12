import { InputRef } from 'antd';

import Radio from './Radio';
import Group from './Group';

import type { RadioProps, GroupProps } from './interface';

export type { RadioProps, GroupProps } from './interface';

export type Radio = React.ForwardRefExoticComponent<RadioProps>;
export type InputType = InputRef;
export type RadioGroup = React.ForwardRefExoticComponent<GroupProps>;
export type { RadioOptionType, RadioValueType } from './interface';

export const HCRadio = Radio as Radio;
export const HCRadioGroup = Group as RadioGroup;
