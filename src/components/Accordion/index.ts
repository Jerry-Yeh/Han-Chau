import { ReactNode } from 'react';

import Accordion from './Accordion';

export interface AccordionProps {
  children?: ReactNode;
  label: string;
  extra?: ReactNode;
}

export default Accordion;
