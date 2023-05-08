import MakePlan from './MakePlan';

export interface MakePlanProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default MakePlan;
