import SelectPlan from './SelectPlan';

export interface SelectPlanProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default SelectPlan;
