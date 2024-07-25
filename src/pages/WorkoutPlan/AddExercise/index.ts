import AddExercise from './AddExercise';

import type {SetExerciseValue} from '../components/SetExercise';

export enum ADD_EXERCISE_TYPE {
    PLAN,
    RECORD
}

export interface AddExerciseValue extends SetExerciseValue {
    id: number;
    exerciseId: number;
}

export interface AddExerciseProps {
    children?: React.ReactNode;
    isShow: boolean;
    type?: ADD_EXERCISE_TYPE;
    onClose: () => void;
    onConfirm: (value: AddExerciseValue) => void;
}

export default AddExercise;
