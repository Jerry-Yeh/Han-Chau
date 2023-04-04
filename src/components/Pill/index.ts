import Pill from './Pill';

export type PillValue = string | number;

export interface PillItem {
  label: string;
  value: PillValue;
}

export default Pill;
