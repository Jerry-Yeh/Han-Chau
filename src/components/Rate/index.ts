import HCRate from './Rate';

export interface RateProps {
  children?: React.ReactNode;
  className?: string;
  level: 1 | 2 | 3;
  onColor?: boolean;
  size?: 's' | 'm' | 'l';
}

export default HCRate;
