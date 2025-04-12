import { ChangeEvent } from 'react';

import HCInputLongFullspace from './InputLongFullspace';

import type { Nullable } from '~/typings/utils';

export type InputChangeEventType = ChangeEvent<HTMLTextAreaElement>;

export interface InputLongFullspaceProps {
    value?: Nullable<string | number>;
    children?: React.ReactNode;
    placeholder?: string;
    label?: string;
    prompt?: string;
    disabled?: boolean;
    onChange?: (e: InputChangeEventType) => void;
}

export default HCInputLongFullspace;
