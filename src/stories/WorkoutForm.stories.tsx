import { useState, useEffect } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useAppSelector } from '~/store/hook';

import HCWorkoutForm from '~/pages/WorkoutPlan/components/WorkoutForm';
import StoreDecorator from '../../.storybook/decorators/StoreDecorator';
import ExerciseImg from '~/pages/WorkoutPlan/components/ExerciseImg';

import ExerciseService from '~/services/exercise';
import { level } from '~/static/exercise/dataType';
import { Exercise, exerciseList } from '~/static/exercise/data';

import type { WorkoutFormExercise } from '~/pages/WorkoutPlan/components/WorkoutForm';
import type { WorkoutRecordExerciseData } from '~/services/exercise';

export default {
    title: 'Components/WorkoutForm',
    component: HCWorkoutForm,
    decorators: [StoreDecorator],
    argTypes: {},
} as Meta<typeof HCWorkoutForm>;

type Story = StoryFn<typeof HCWorkoutForm>;

export const Basic: Story = () => {
    const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);
    const language = useAppSelector((state) => state.language.language);

    const mockData = [
        {
            id: 1692522598611,
            exerciseId: 77,
            sets: [
                {
                    reps: 8,
                    weight: 0,
                    id: 'be9a25a5-adc0-4c41-bab7-1cdb4649d268',
                },
                {
                    reps: 8,
                    weight: 0,
                    id: '8de36560-30e5-461f-bf0e-6b6b079640c4',
                },
                {
                    reps: 8,
                    weight: 0,
                    id: '1589d6e3-df03-47e7-bea8-1a875bb03b94',
                },
            ],
        },
    ];
    const [workoutFormData, setWorkoutFormData] = useState<WorkoutFormExercise[]>([]);

    useEffect(() => {
        const transExerciseFromTemplate = ({
            id,
            exerciseId,
            sets,
        }: WorkoutRecordExerciseData): WorkoutFormExercise => {
            const exercise = exerciseList.find(
                (exercise) => exercise.id === exerciseId,
            ) as Exercise;

            return {
                ...exercise,
                id,
                exerciseId,
                sets,
                img: <ExerciseImg id={id} />,
                title: exercise[`name${capitalizeLanguage}`],
                description: `${
                    level[exercise.level][language]
                } · ${ExerciseService.getExerciseMusclesText(exercise.muscles)}`,
                isCompleted: false,
            };
        };

        const mockData = [
            {
                id: 1692522598611,
                exerciseId: 77,
                sets: [
                    {
                        reps: 8,
                        weight: 0,
                        id: 'be9a25a5-adc0-4c41-bab7-1cdb4649d268',
                    },
                    {
                        reps: 8,
                        weight: 0,
                        id: '8de36560-30e5-461f-bf0e-6b6b079640c4',
                    },
                    {
                        reps: 8,
                        weight: 0,
                        id: '1589d6e3-df03-47e7-bea8-1a875bb03b94',
                    },
                ],
            },
        ].map((item) => transExerciseFromTemplate(item));

        setWorkoutFormData(mockData.map((item) => transExerciseFromTemplate(item)));
    }, [mockData]);

    return <HCWorkoutForm data={workoutFormData} setData={setWorkoutFormData} />;
};
