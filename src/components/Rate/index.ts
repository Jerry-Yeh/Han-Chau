import HCRate from './Rate';

export type RateLevel = 0 | 1 | 2 | 3;

export interface RateProps {
  children?: React.ReactNode;
  className?: string;
  level: RateLevel;
  onColor?: boolean;
  size?: 's' | 'm' | 'l';
}

export default HCRate;
