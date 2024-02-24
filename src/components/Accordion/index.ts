import { ReactNode } from 'react';

import HCAccordion from './Accordion';

export interface AccordionProps {
  children?: ReactNode;
  label: string;
  extra?: ReactNode;
}

export default HCAccordion;
