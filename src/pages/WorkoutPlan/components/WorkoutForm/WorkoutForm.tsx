import React, { Fragment, useEffect } from 'react';
import { useAppSelector } from '~/store/hook';
import { PlusIcon } from '@heroicons/react/20/solid';

import { HCList, HCListItem, ListItemType } from '~/components/List';
import { Exercise, exerciseList } from '~/static/exercise/data';
import ExerciseImg from '../ExerciseImg';
import { level } from '~/static/exercise/dataType';
import ExerciseService from '~/services/exercise';
import HCAccordion from '~/components/Accordion';
import HCSteps, { StepItem } from '~/components/Steps';
import HCInput, { InputChangeEventType } from '~/components/Input';
import HCButton from '~/components/Button';

import type { WorkoutFormProps, WorkoutFormExercise } from '.';
import type { WorkoutPlanTemplateExercise } from '~/services/exercise';

const WorkoutForm: React.FC<WorkoutFormProps> = (props: WorkoutFormProps) => {
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);
  const language = useAppSelector((state) => state.language.language);

  // useEffect(() => {}, []);

  const transExerciseFromTemplate = ({
    id,
    exerciseId,
    sets,
    reps,
  }: WorkoutPlanTemplateExercise): WorkoutFormExercise => {
    const { id: _exerciseDataId, ...restExerciseData } =
      exerciseList.find((exercise) => exercise.id === exerciseId) || {};

    return {
      id,
      exerciseId,
      sets: new Array(sets).fill({
        reps,
        weight: 0,
      }),
      ...restExerciseData,
    } as WorkoutFormExercise;
  };

  const exerciseListData = props.data.map((item) => transExerciseFromTemplate(item));
  const listData: ListItemType[] = exerciseListData.map((item) => ({
    img: <ExerciseImg id={item.id} />,
    title: item[`name${capitalizeLanguage}`],
    description: `${level[item.level][language]} · ${ExerciseService.getExerciseMusclesText(
      item.muscles,
    )}`,
  }));

  const handleViewRecord = () => {
    console.log('handleViewRecord');
  };

  return (
    <HCList data={listData} bleed>
      <Fragment>
        {exerciseListData.map((item, index) => (
          <HCListItem {...listData[index]} key={index}>
            <HCAccordion
              label='訓練組數'
              extra={
                <button onClick={handleViewRecord} className='text-highlight underline'>
                  查看紀錄
                </button>
              }
            >
              <HCSteps
                className='mb-4'
                items={item.sets.map((set) => ({
                  title: (
                    <div className='flex pt-2 pb-4 gap-x-2'>
                      <HCInput value={set.reps} suffix='reps' />
                      <HCInput value={set.weight} suffix='kg' />
                    </div>
                  ),
                  description: `目前的加乘重量為 ${+set.reps * +set.weight} kg`,
                }))}
              />
              <HCButton color='tertiary' className='mb-4'>
                <div className='flex items-center'>
                  <PlusIcon className='h-5 w-5 mr-2' />
                  <span>新增組數</span>
                </div>
              </HCButton>
            </HCAccordion>
            <div className='flex p-4 gap-x-2'>
              <HCButton color='secondary'>完成動作</HCButton>
            </div>
          </HCListItem>
        ))}
      </Fragment>
    </HCList>
  );
};

export default WorkoutForm;
