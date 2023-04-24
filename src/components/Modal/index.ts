import HCModal from './Modal';

export interface ModalProps {
  children?: React.ReactNode;
  open: boolean;
  type: 'warning' | 'success' | 'error';
  title?: string;
  description?: string;
  cancel?: string;
  confirm?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default HCModal;
