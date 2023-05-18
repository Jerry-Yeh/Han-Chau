import { ReactNode } from 'react';

import HCHeader from './Header';
import HeaderIconButton from './HeaderIconButton';
import HeaderRegion from './HeaderRegion';

export type HeaderSize = 'l' | 'm' | 's';
export type HeaderBehaviorType = 'fixed' | 'expanded' | 'fully';

export interface HeaderProps {
  children?: ReactNode;
  className?: string;
  prefix?: ReactNode;
  title?: ReactNode;
  suffix?: ReactNode;
  size?: HeaderSize;
  toolBar?: boolean;
  behavior?: HeaderBehaviorType;
}

export type HeaderRegionType = 'toolBar' | 'tabBar' | 'flexibleSpace';

export interface HeaderRegionProps {
  children: ReactNode;
  className?: string;
  region?: HeaderRegionType;
  behavior: HeaderBehaviorType;
  top?: number;
}

export const HCHeaderIconButton = HeaderIconButton;
export const HCHeaderRegion = HeaderRegion;

export default HCHeader;
