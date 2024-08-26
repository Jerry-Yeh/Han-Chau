import { ChangeEvent } from 'react';

import HCInputLongFullspace from './InputLongFullspace';

export type InputChangeEventType = ChangeEvent<HTMLTextAreaElement>;

export interface InputLongFullspaceProps {
    children?: React.ReactNode;
    placeholder?: string;
    label?: string;
    prompt?: string;
    disabled?: boolean;
    onChange?: (e: InputChangeEventType) => void;
}

export default HCInputLongFullspace;
