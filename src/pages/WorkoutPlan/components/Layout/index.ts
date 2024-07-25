import { ReactNode, CSSProperties } from 'react';

import Layout from './Layout';

export interface LayoutProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  header?: ReactNode;
  footer?: ReactNode;
  contentClassName?: string;
}

export default Layout;
