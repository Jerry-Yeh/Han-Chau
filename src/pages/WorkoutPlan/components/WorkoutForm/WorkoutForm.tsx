import React, { Fragment, useEffect, useState } from 'react';
import { useAppSelector } from '~/store/hook';
import { PlusIcon } from '@heroicons/react/20/solid';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

import { HCList, HCListItem, ListItemType } from '~/components/List';
import { Exercise, exerciseList } from '~/static/exercise/data';
import ExerciseImg from '../ExerciseImg';
import { level } from '~/static/exercise/dataType';
import ExerciseService from '~/services/exercise';
import HCAccordion, { ACCORDION_SIZE } from '~/components/Accordion';
import HCSteps, { StepItem } from '~/components/Steps';
import HCInput, { InputChangeEventType } from '~/components/Input';
import HCButton from '~/components/Button';
import HCModal from '~/components/Modal';

import type { WorkoutFormProps, WorkoutFormExercise } from '.';
import type { WorkoutPlanTemplateExercise } from '~/services/exercise';

const WorkoutForm: React.FC<WorkoutFormProps> = (props: WorkoutFormProps) => {
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);
  const language = useAppSelector((state) => state.language.language);

  const [listData, setListData] = useState<ListItemType[]>([]);
  const [exerciseListData, setExerciseListData] = useState<WorkoutFormExercise[]>([]);

  useEffect(() => {
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

    setExerciseListData(props.data.map((item) => transExerciseFromTemplate(item)));
    setListData(
      props.data
        .map((item) => transExerciseFromTemplate(item))
        .map((item) => ({
          img: <ExerciseImg id={item.id} />,
          title: item[`name${capitalizeLanguage}`],
          description: `${level[item.level][language]} · ${ExerciseService.getExerciseMusclesText(
            item.muscles,
          )}`,
        })),
    );
  }, [props.data, capitalizeLanguage, language]);

  /** Add Set */
  const addSet = (index: number) => {
    const newList = [...exerciseListData];
    const currentSets = newList[index].sets;
    const reps = currentSets.length > 0 ? currentSets[currentSets.length - 1].reps : 0;

    currentSets.push({ reps, weight: 0 });
    setExerciseListData(newList);
  };

  /** Remove Set */
  const [isShowRemoveSetModal, setShowRemoveSetModal] = useState(false);
  const [removedIndex, setRemovedIndex] = useState({
    index: 0,
    setIndex: 0,
  });

  const removeSet = (index: number, setIndex: number) => {
    setRemovedIndex({ index, setIndex });
    setShowRemoveSetModal(true);
  };

  const confirmRemoveSet = () => {
    const newList = [...exerciseListData];
    const currentSets = newList[removedIndex.index].sets;

    currentSets.splice(removedIndex.setIndex, 1);
    setExerciseListData(newList);
    closeRemoveSetModal();
  };

  const closeRemoveSetModal = () => {
    setShowRemoveSetModal(false);
  };

  return (
    <HCList data={listData} bleed>
      <Fragment>
        {exerciseListData.map((item, index) => (
          <HCListItem {...listData[index]} key={index}>
            <HCAccordion
              className='px-4'
              label='訓練組數'
              extra={<button className='text-highlight underline'>查看紀錄</button>}
            >
              <HCSteps
                className='mb-4'
                items={item.sets.map((set, setIndex) => ({
                  title: (
                    <div className='flex pt-2 pb-4 gap-x-2'>
                      <HCInput value={set.reps} suffix='reps' />
                      <HCInput value={set.weight} suffix='kg' />
                    </div>
                  ),
                  description: (
                    <HCAccordion
                      label={`目前的加乘重量為 ${+set.reps * +set.weight} kg`}
                      size={ACCORDION_SIZE.s}
                    >
                      <div className='pt-1'>
                        <p className='text-body-xs text-tertiary mb-8'>
                          若加乘重量為 0 kg，則此組訓練將不計入紀錄總和
                        </p>
                        <button
                          className='text-destructive'
                          onClick={() => removeSet(index, setIndex)}
                        >
                          刪除此組
                        </button>
                      </div>
                    </HCAccordion>
                  ),
                }))}
              />
              {/* <HCButton color='tertiary' className='mb-4'>
                <div className='flex items-center'>
                  <PlusIcon className='h-5 w-5 mr-2' />
                  <span>新增組數</span>
                </div>
              </HCButton> */}
              <button className='flex items-center pl-2' onClick={() => addSet(index)}>
                <PlusCircleIcon className='w-5 h-5 mr-1' />
                <span>新增組數</span>
              </button>
            </HCAccordion>
            <div className='flex p-4 gap-x-2'>
              <HCButton color='secondary'>完成動作</HCButton>
            </div>
          </HCListItem>
        ))}
        {exerciseListData.length > 0 && (
          <HCModal
            open={isShowRemoveSetModal}
            type='error'
            title='確認刪除？'
            description={`你確定要刪除「${
              exerciseListData[removedIndex.index][`name${capitalizeLanguage}`]
            }」的第${
              removedIndex.setIndex + 1
            }組訓練？如果確定，請按下確認刪除，刪除後紀錄將無法復原。`}
            cancel='取消'
            confirm='確認刪除'
            onCancel={closeRemoveSetModal}
            onConfirm={confirmRemoveSet}
          />
        )}
      </Fragment>
    </HCList>
  );
};

export default WorkoutForm;
