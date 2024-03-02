import { ReactNode } from 'react';

import HCAccordion from './Accordion';

export enum ACCORDION_SIZE {
  m,
  s,
}

export interface AccordionProps {
  children?: ReactNode;
  className?: string;
  label: string;
  extra?: ReactNode;
  size?: ACCORDION_SIZE;
}

export default HCAccordion;
