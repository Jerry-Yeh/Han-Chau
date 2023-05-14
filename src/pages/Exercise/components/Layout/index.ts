import { CSSProperties } from 'react';

import Layout from './Layout';

export interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default Layout;
