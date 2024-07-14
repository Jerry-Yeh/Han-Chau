import { ReactNode, MouseEvent } from 'react';

import HCButton from './Button';

export type ClickEvent = MouseEvent<HTMLButtonElement>;

export interface ButtonProps {
    children?: ReactNode;
    className?: string;
    color: 'primary' | 'secondary' | 'tertiary' | 'success' | 'destructive';
    disabled?: boolean;
    block?: boolean;
    textColor?: string;
    next?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
    onClick?: (e: ClickEvent) => void;
}

export default HCButton;
