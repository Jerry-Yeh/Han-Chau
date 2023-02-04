import { Ref } from 'react';
import { InputRef } from 'antd';

import Radio from './Radio';
import Group from './Group';

import type { RadioProps } from './interface';

export type Radio = React.ForwardRefExoticComponent<RadioProps> & {
  Group: typeof Group;
};
export type InputType = InputRef;

const HCRadio = Radio as Radio;
HCRadio.Group = Group;

export default HCRadio;
