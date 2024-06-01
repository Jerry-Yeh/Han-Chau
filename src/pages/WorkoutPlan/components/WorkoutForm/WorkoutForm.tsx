import React, { Fragment, useState } from 'react';
import { useAppSelector } from '~/store/hook';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { v4 as uuidv4 } from 'uuid';

import { HCList, HCListItem } from '~/components/List';
import ExerciseImg from '../ExerciseImg';
import HCAccordion, { ACCORDION_SIZE } from '~/components/Accordion';
import HCSteps from '~/components/Steps';
import HCInput from '~/components/Input';
import HCButton from '~/components/Button';
import HCModal from '~/components/Modal';
import EllipsisVertical from '~/assets/img/heroicons/mini/ellipsis-vertical';

import type { WorkoutFormProps, WorkoutRecordExerciseSetData } from '.';

const WorkoutForm: React.FC<WorkoutFormProps> = (props: WorkoutFormProps) => {
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);

  /** Edit */
  const handleChangeInput = (value: string, index: number, setId: string, property: 'reps' | 'weight') => {

    const newList = [...props.data];
    const item = newList[index];
    const set = item.sets.find(it => it.id === setId);

    if (set) {
      set[property] = Number(value);
    }

    props.setData(newList);
  };

  /** Add Set */
  const addSet = (index: number) => {
    const newList = [...props.data];
    const currentSets = newList[index].sets;
    const reps = currentSets.length > 0 ? currentSets[currentSets.length - 1].reps : 0;

    currentSets.push({ reps, weight: 0, id: uuidv4() });
    props.setData(newList);
  };

  /** Remove Set */
  const [isShowRemoveSetModal, setShowRemoveSetModal] = useState(false);
  const [removedIndex, setRemovedIndex] = useState({
    index: 0,
    setIndex: 0,
    setId: '',
  });

  const removeSet = (index: number, setIndex: number, setId: string) => {
    setRemovedIndex({ index, setIndex, setId });
    setShowRemoveSetModal(true);
  };

  const confirmRemoveSet = () => {
    const newList = [...props.data];
    const currentSets = newList[removedIndex.index].sets;
    const setIndex = currentSets.findIndex(it => it.id === removedIndex.setId);

    if (setIndex) {
      currentSets.splice(setIndex, 1);
    }

    props.setData(newList);
    closeRemoveSetModal();
  };

  const closeRemoveSetModal = () => {
    setShowRemoveSetModal(false);
  };

  return (
    <Fragment>
      <HCList data={props.data} bleed className={props.className} renderItem={(item, index) => (
        <HCListItem title={item.title} description={item.description} key={index} img={<ExerciseImg id={item.id} />}>
          <HCAccordion
            className='px-4'
            label='訓練組數'
            extra={<button className='text-highlight underline'>查看紀錄</button>}
          >
            <HCSteps
              className='mb-4'
              items={item.sets.map((set: WorkoutRecordExerciseSetData, setIndex: number) => ({
                id: set.id,
                title: (
                  <div className='flex pt-2 pb-4 gap-x-2' key={set.id}>
                    <HCInput value={set.reps} suffix='reps' onChange={(e) => handleChangeInput(e.target.value, index, set.id, 'reps')} />
                    <HCInput value={set.weight} suffix='kg' onChange={(e) => handleChangeInput(e.target.value, index, set.id, 'weight')} />
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
                        onClick={() => removeSet(index, setIndex, set.id)}
                      >
                        刪除此組
                      </button>
                    </div>
                  </HCAccordion>
                ),
              }))}
            />
            <button className='flex items-center pl-2' onClick={() => addSet(index)}>
              <PlusCircleIcon className='w-5 h-5 mr-1' />
              <span>新增組數</span>
            </button>
          </HCAccordion>
          <div className='flex p-4 gap-x-2'>
            <HCButton color='secondary'>完成動作</HCButton>
            <HCButton block={false} color='secondary' prefix={<EllipsisVertical />} />
          </div>
        </HCListItem>)}>
      </HCList >
      {props.data.length > 0 && (
        <HCModal
          open={isShowRemoveSetModal}
          type='error'
          title='確認刪除？'
          description={`你確定要刪除「${props.data[removedIndex.index][`name${capitalizeLanguage}`]
            }」的第${removedIndex.setIndex + 1
            }組訓練？如果確定，請按下確認刪除，刪除後紀錄將無法復原。`}
          cancel='取消'
          confirm='確認刪除'
          onCancel={closeRemoveSetModal}
          onConfirm={confirmRemoveSet}
        />
      )}
    </Fragment>

  );
};

export default WorkoutForm;
