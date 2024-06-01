import { ReactNode } from 'react';

import Steps from './Steps';

export interface StepItem {
  id: string;
  title: ReactNode | string;
  description: ReactNode | string;
}

export interface StepsProps {
  children?: React.ReactNode;
  className?: string;
  items: StepItem[];
  dark?: boolean;
}

export enum TAIL {
  BEFORE,
  AFTER,
}

export interface TailProps {
  className?: string;
  isShow: boolean;
  type: TAIL;
}

export default Steps;
