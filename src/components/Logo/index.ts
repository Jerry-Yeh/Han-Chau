import Logo from './Logo';

export type LogoSize = 'l' | 'm' | 's';

export interface LogoProps {
  children?: React.ReactNode;
  className?: string;
  size?: LogoSize;
}

export default Logo;
