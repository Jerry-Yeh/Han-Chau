import { ReactNode, CSSProperties } from 'react';

import Layout from './Layout';

export interface LayoutProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  header?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
}

export default Layout;
