import React, { Fragment, useState } from 'react';
import { useAppSelector } from '~/store/hook';
import { PlusCircleIcon, TrashIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

import { HCList, HCListItem, ListItemType } from '~/components/List';
import ExerciseImg from '../ExerciseImg';
import HCAccordion, { ACCORDION_SIZE } from '~/components/Accordion';
import HCSteps from '~/components/Steps';
import HCInput from '~/components/Input';
import HCButton from '~/components/Button';
import HCModal from '~/components/Modal';
import HCBottomSheet from '~/components/BottomSheet';

import EllipsisVertical from '~/assets/img/heroicons/mini/ellipsis-vertical';

import type { WorkoutFormProps, WorkoutRecordExerciseSetData, WorkoutFormExercise } from '.';
import type { Nullable } from '~/typings/utils';

const WorkoutForm: React.FC<WorkoutFormProps> = (props: WorkoutFormProps) => {
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);
  const { t } = useTranslation('translation', {
    keyPrefix: 'exercise.plan.detail.workout-form',
  });

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

    if (setIndex >= 0) {
      currentSets.splice(setIndex, 1);
    }

    props.setData(newList);
    closeRemoveSetModal();
  };

  const closeRemoveSetModal = () => {
    setShowRemoveSetModal(false);
  };

  /** More */
  const [isShowMore, setShowMore] = useState(false);
  const [isShowDeleteExerciseModal, setShowDeleteExerciseModal] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Nullable<WorkoutFormExercise>>(null);
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(-1);

  const handleDeleteExercise = () => {
    setShowDeleteExerciseModal(true);
  };
  const moreActions: ListItemType[] = [
    {
      title: t('delete'),
      img: <TrashIcon />,
      category: 'warning',
      onClick: handleDeleteExercise,
    },
  ];

  const handleClickMore = (exercise: WorkoutFormExercise) => {
    setShowMore(true);
    setSelectedExercise(exercise);
  };

  const handleCloseMore = () => {
    setShowMore(false);
  };

  const handleCloseDeleteExerciseModal = () => {
    setShowDeleteExerciseModal(false);
  };

  const handleConfirmDeleteExercise = () => {
    if (!selectedExercise) {
      return;
    } else {
      const newList = [...props.data].filter(item => item.id !== selectedExercise.id);

      props.setData(newList);
      setShowDeleteExerciseModal(false);
      setShowMore(false);
    }
  };

  /** Status */
  const [isShowToggleStatusModal, setShowToggleStatusModal] = useState(false);
  const completedExercise = (exercise: WorkoutFormExercise) => {
    return exercise.sets.every(item => item.weight);
  };

  const handleToggleExerciseCompleted = (index: number, exercise: WorkoutFormExercise) => {
    const newList = [...props.data];
    const item = newList[index];

    if (!item.isCompleted) {
      item.isCompleted = true;
    } else {

      setSelectedExercise(exercise);
      setSelectedExerciseIndex(index);
      setShowToggleStatusModal(true);
    }

    props.setData(newList);
  };

  const handleCloseToggleStatusModal = () => {
    setShowToggleStatusModal(false);
  };

  const handleConfirmToggleStatus = () => {
    const newList = [...props.data];
    const item = newList[selectedExerciseIndex];

    item.isCompleted = false;
    props.setData(newList);
    setShowToggleStatusModal(false);
  };

  return (
    <Fragment>
      <HCList data={props.data} bleed className={props.className} renderItem={(item, index) => (
        <HCListItem title={item.title} description={item.description} key={index} img={<ExerciseImg id={item.id} />}>
          <HCAccordion
            className='px-4'
            label={t('workout-sets')}
            extra={<button className='text-highlight underline'>{t('view-record')}</button>}
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
                    label={t('set-result', { number: +set.reps * +set.weight })}
                    size={ACCORDION_SIZE.s}
                  >
                    <div className='pt-1'>
                      <p className='text-body-xs text-tertiary mb-8'>{t('set-remark')}</p>
                      <button
                        className='text-destructive'
                        onClick={() => removeSet(index, setIndex, set.id)}
                      >
                        {t('delete-set')}
                      </button>
                    </div>
                  </HCAccordion>
                ),
              }))}
            />
            <button className='flex items-center pl-2' onClick={() => addSet(index)}>
              <PlusCircleIcon className='w-5 h-5 mr-1' />
              <span>{t('add-set')}</span>
            </button>
          </HCAccordion>
          <div className='flex p-4 gap-x-2'>
            {completedExercise(item)
              ? item.isCompleted ?
                <HCButton color='success' onClick={() => handleToggleExerciseCompleted(index, item)}><CheckCircleIcon className='w-5 h-5 mr-2' />動作完成</HCButton> :
                <HCButton color='secondary' onClick={() => handleToggleExerciseCompleted(index, item)}>完成動作</HCButton>
              : <HCButton color='secondary' disabled>動作準備中</HCButton>}
            <HCButton onClick={() => handleClickMore(item)} block={false} color='secondary' prefix={<EllipsisVertical />} />
          </div>
        </HCListItem>)}>
      </HCList >

      {/* Remove set modal */}
      {props.data.length > 0 && (
        <HCModal
          open={isShowRemoveSetModal}
          type='error'
          title={t('delete-set-modal.title')}
          description={t('delete-set-modal.description', {
            name: props.data[removedIndex.index][`name${capitalizeLanguage}`],
            number: removedIndex.setIndex + 1
          })}
          cancel={t('delete-set-modal.cancel')}
          confirm={t('delete-set-modal.confirm')}
          onCancel={closeRemoveSetModal}
          onConfirm={confirmRemoveSet}
        />
      )}

      {selectedExercise && <Fragment>
        {/* More */}
        <HCBottomSheet show={isShowMore} onClose={handleCloseMore} title={t('more.title')}>
          <HCList data={moreActions} bleed />
        </HCBottomSheet>

        <HCModal
          open={isShowDeleteExerciseModal}
          title={t('delete-exercise-modal.title')}
          type='error'
          description={t('delete-exercise-modal.description', { name: selectedExercise[`name${capitalizeLanguage}`] })}
          cancel={t('delete-exercise-modal.cancel')}
          confirm={t('delete-exercise-modal.confirm')}
          onCancel={handleCloseDeleteExerciseModal}
          onConfirm={handleConfirmDeleteExercise} />

        {/* Status */}
        <HCModal
          open={isShowToggleStatusModal}
          title={t('change-exercise-status-modal.title')}
          type='warning'
          description={t('change-exercise-status-modal.description', { name: selectedExercise[`name${capitalizeLanguage}`] })}
          cancel={t('change-exercise-status-modal.cancel')}
          confirm={t('change-exercise-status-modal.confirm')}
          onCancel={handleCloseToggleStatusModal}
          onConfirm={handleConfirmToggleStatus} />
      </Fragment>}


    </Fragment>
  );
};

export default WorkoutForm;
