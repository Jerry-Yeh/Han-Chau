import { ReactNode } from 'react';

import SnackBar from './SnackBar';

export interface HandleSnackBar {
  open: () => void;
}

export interface SnackBarProps {
  children?: React.ReactNode;
  className?: string;
  type: 'success' | 'error' | 'warning';
  content: ReactNode;
}

export default SnackBar;
