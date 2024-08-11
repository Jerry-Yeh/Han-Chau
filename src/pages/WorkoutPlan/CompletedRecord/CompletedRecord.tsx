import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { PencilIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useAppSelector } from '~/store/hook';

import HCHeader, { HCHeaderIconButton } from '~/components/Header';
import ExerciseService from '~/services/exercise';
import HCButton from '~/components/Button';
import { exerciseList, Exercise } from '~/static/exercise/data';

import XMark from '~/assets/img/heroicons/mini/x-mark';
import CelebrateBg from '~/assets/img/celebrate-bg.svg';
import BodyPartBadge from '~/assets/img/exercise/body-part-badge.png';

import type { CompletedRecordProps } from '.';
import type { WorkoutRecord, WorkoutRecordExerciseData } from '~/services/exercise';

type CompletedWorkoutRecord = Omit<WorkoutRecord, 'exerciseList'> & {
    exerciseList: Array<Exercise & WorkoutRecordExerciseData>;
};

const CompletedRecord: React.FC<CompletedRecordProps> = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'exercise.completed-record' });
    const navigate = useNavigate();
    const { recordId } = useParams();
    const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);

    const handleClose = () => {

    };
    const [record, setRecord] = useState<CompletedWorkoutRecord>({
        id: recordId,
        userId: '',
        note: '',
        time: '',
        exerciseList: []
    });

    useEffect(() => {
        const fetchData = async () => {
            if (recordId) {
                let record = await ExerciseService.getRecord(recordId);

                record.exerciseList = record.exerciseList.map(item => {
                    const exercise = exerciseList.find(it => it.id === item.exerciseId);

                    return {
                        ...exercise, ...item
                    } as Exercise & WorkoutRecordExerciseData;
                });
                console.log('record', record.exerciseList);
                setRecord(record as CompletedWorkoutRecord);
            }
        };

        fetchData();
    }, [recordId]);

    const handleClickNoteBtn = () => { };

    return <div>
        <HCHeader
            title={t('title')}
            prefix={
                <HCHeaderIconButton onClick={handleClose}>
                    <XMark />
                </HCHeaderIconButton>
            }
        />
        <div className='relative'>
            <img src={CelebrateBg} alt="celebrate-background" className='absolute top-0 left-0 w-full' />
            <div className='relative z-10 flex flex-col items-center p-4'>
                <img src={BodyPartBadge} alt="body-part-badge" className='mb-2' />
                <h2 className="text-body-bold-l">{t('subtitle')}</h2>
                <div className="text-body-s text-tertiary mb-2">{moment(record.time).format('YYYY/MM/DD')}</div>
                {record.note ?
                    <div className="border border-secondary w-full rounded-lg bg-primary flex">
                        <div className="overflow-hidden py-4 pl-4">
                            <div className="text-body-bold-m text-secondary mb-1">{t('note-title')}</div>
                            <p className="text-body-s text-tertiary whitespace-nowrap text-ellipsis overflow-hidden">{record.note}</p>
                        </div>
                        <button className="p-4 flex items-center" onClick={handleClickNoteBtn}>
                            <ChevronRightIcon className='w-6' />
                        </button>
                    </div> :
                    <HCButton color='primary' onClick={handleClickNoteBtn}><PencilIcon className='w-5 mr-2' />{t('note-button')}</HCButton>}
            </div>
        </div>
        <div className="flex flex-col gap-y-4 p-4">
            {record.exerciseList.map(exercise => (<div className='border border-secondary rounded-xl'>
                <div className="bg-secondary text-body-bold-s text-secondary border-b border-secondary px-4 py-2">
                    {exercise[`name${capitalizeLanguage}`]}
                </div>
                <div className='py-2'>
                    {exercise.sets.map((set, setIndex) => (
                        <div className='flex items-center text-body-s  px-4 py-2'>
                            <div className='text-secondary grow'>Set {setIndex + 1 > 9 ? setIndex + 1 : `0${setIndex + 1}`}</div>
                            <div className='text-primary'>{set.reps} reps</div>
                            <div className='text-primary min-w-[58px] text-right'>{set.weight} kg</div>
                        </div>))}
                </div>
            </div>))}
        </div>
    </div>;
};

export default CompletedRecord;