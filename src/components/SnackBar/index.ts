import SnackBar from './SnackBar';

export interface HandleSnackBar {
  open: (value: SnackBarHandler) => void;
}

export type SnackBarType = 'success' | 'error' | 'warning';

export interface SnackBarHandler {
  type: SnackBarType;
  content: string;
}

export interface SnackBarProps {
  children?: React.ReactNode;
  className?: string;
}

export default SnackBar;
