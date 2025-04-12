import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '~/store/hook';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import Layout from '../components/Layout';
import HCHeader, { HCHeaderIconButton, HCHeaderRegion } from '~/components/Header';
import HCProgress from '~/components/Progress';
import HCWorkoutForm, { WorkoutFormExercise } from '~/pages/WorkoutPlan/components/WorkoutForm';
import AddExercise, { ADD_EXERCISE_TYPE, AddExerciseValue } from '~/pages/WorkoutPlan/AddExercise';
import HCButton from '~/components/Button';
import ExerciseImg from '../components/ExerciseImg';

import useUrlPlan from '~/hooks/exercise/useUrlPlan';
import ExerciseService from '~/services/exercise';
import { level } from '~/static/exercise/dataType';
import { Exercise, exerciseList } from '~/static/exercise/data';

import type { AddRecordProps } from '.';
import type {
    WorkoutRecord,
    WorkoutRecordExerciseSetData,
    WorkoutRecordExerciseData,
} from '~/services/exercise';

import XMark from '~/assets/img/heroicons/mini/x-mark';
import Plus from '~/assets/img/heroicons/mini/plus';
import EllipsisVertical from '~/assets/img/heroicons/mini/ellipsis-vertical';

const AddRecord: React.FC<AddRecordProps> = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'exercise.record' });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);
    const language = useAppSelector((state) => state.language.language);
    const { planId } = useParams();
    const user = useAppSelector((state) => state.user.user);

    const [plan] = useUrlPlan();
    const [record, setRecord] = useState<WorkoutRecord>({
        userId: user.id,
        planId: planId as string,
        note: '',
        time: moment().format('YYYY/MM/DD HH:MM'),
        exerciseList: [],
    });

    useEffect(() => {
        dispatch({ type: 'loading/setShow', payload: true });

        setRecord({
            ...record,
            exerciseList: plan.exerciseList.map((item) => {
                const { id, exerciseId, sets, reps } = item;
                const recordSets: WorkoutRecordExerciseSetData[] = Array(sets)
                    .fill(null)
                    .map(() => ({
                        reps,
                        weight: 0,
                        id: uuidv4(),
                    }));

                return { id, exerciseId, sets: recordSets };
            }),
        });

        dispatch({ type: 'loading/setShow', payload: false });
    }, [dispatch, plan.exerciseList]);

    const handleClose = () => {
        navigate(`/workout-plan/${planId}`);
    };

    /** Workout form */
    const [workoutFormData, setWorkoutFormData] = useState<WorkoutFormExercise[]>([]);
    const [percentage, setPercentage] = useState(0);
    const [isDisabledSave, setDisabledSave] = useState(false);

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

        setWorkoutFormData(record.exerciseList.map((item) => transExerciseFromTemplate(item)));
    }, [record.exerciseList]);

    useEffect(() => {
        const total = workoutFormData.length;
        const completedAmount = workoutFormData.filter((item) => item.isCompleted).length;

        setPercentage(total ? Math.round((completedAmount / total) * 100) : 0);
        setDisabledSave(!completedAmount);
    }, [workoutFormData]);

    /** Add exercise */
    const [isShowAddExercise, setShowAddExercise] = useState(false);

    const addExercise = () => {
        setShowAddExercise(true);
    };

    const handleCloseAddExercise = () => {
        setShowAddExercise(false);
    };

    const handleConfirmAddExercise = (value: AddExerciseValue) => {
        const { id, exerciseId, sets, reps } = value;

        setRecord({
            ...record,
            exerciseList: [
                ...record.exerciseList,
                {
                    id,
                    exerciseId,
                    sets: Array(sets)
                        .fill(null)
                        .map(() => ({ reps, weight: 0, id: uuidv4() })),
                },
            ],
        });
        handleCloseAddExercise();
    };

    /** Save record */
    const handleSaveRecord = async () => {
        const recordId = await ExerciseService.addRecord(record);

        navigate(`/workout-plan/${planId}/record/${recordId}`);
    };

    return (
        <Layout
            header={
                <HCHeader
                    prefix={
                        <HCHeaderIconButton onClick={handleClose}>
                            <XMark />
                        </HCHeaderIconButton>
                    }
                    suffix={
                        <div className='flex'>
                            <HCHeaderIconButton onClick={addExercise}>
                                <Plus />
                            </HCHeaderIconButton>
                            <HCHeaderIconButton>
                                <EllipsisVertical />
                            </HCHeaderIconButton>
                        </div>
                    }
                    title={t('title')}
                    behavior='fully'
                >
                    <HCHeaderRegion behavior='fully' className='bg-primary'>
                        <div className='text-heading-m text-primary pl-4 pb-3'>
                            {t('expanded-title')}
                        </div>
                    </HCHeaderRegion>
                    <HCHeaderRegion behavior='fully' className='bg-primary px-4'>
                        <div className='text-body-s text-tertiary mb-4'>
                            {plan.name}· {record.time}
                        </div>
                        <HCProgress percentage={percentage} className='mb-2' />
                        <div className='text-body-xs'>
                            <span className='text-placeholder'>
                                {t('completeness')}: {percentage}%
                            </span>
                            <span className='text-tertiary'></span>
                        </div>
                    </HCHeaderRegion>
                </HCHeader>
            }
            footer={
                <div className='p-4 w-full border border-secondary bg-primary'>
                    <HCButton color='primary' disabled={isDisabledSave} onClick={handleSaveRecord}>
                        {t('end-of-record')}
                    </HCButton>
                </div>
            }
        >
            <HCWorkoutForm data={workoutFormData} setData={setWorkoutFormData} />

            <AddExercise
                isShow={isShowAddExercise}
                type={ADD_EXERCISE_TYPE.RECORD}
                onClose={handleCloseAddExercise}
                onConfirm={handleConfirmAddExercise}
            />
        </Layout>
    );
};

export default AddRecord;
