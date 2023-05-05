import ExerciseSetting from './ExerciseSetting';

export interface ExerciseSettingProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
  onKnow: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default ExerciseSetting;
