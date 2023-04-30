import Badge from './Badge';

import { RateLevel } from '../Rate';

export interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
  type: 'rate' | 'dot';
  level?: RateLevel;
  show?: boolean;
}

export default Badge;
