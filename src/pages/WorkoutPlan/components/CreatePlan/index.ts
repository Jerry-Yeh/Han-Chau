import CreatePlan from './CreatePlan';

export interface CreatePlanProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default CreatePlan;
