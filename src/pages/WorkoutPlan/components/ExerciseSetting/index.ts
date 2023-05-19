import ExerciseSetting from './ExerciseSetting';

export interface ExerciseSettingProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
  onReview: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default ExerciseSetting;
