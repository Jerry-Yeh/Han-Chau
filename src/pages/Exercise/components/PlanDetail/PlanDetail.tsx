import React, { useState, useEffect, Fragment, SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { PencilIcon, TrashIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { useAppSelector, useAppDispatch } from '~/store/hook';

import HCHeader from '~/components/Header';
import HCHeaderIconButton from '~/components/Header/HeaderIconButton';
import HCButton from '~/components/Button';
import HCBottomSheet from '~/components/BottomSheet';
import { HCList, HCListItem, ListItemType } from '~/components/List';
import HCInput from '~/components/Input';
import ExerciseService from '~/services/exercise';
import HCModal from '~/components/Modal';
import HCRate from '~/components/Rate';
import AddExercise from '../AddExercise';
import ExerciseSetting from '../ExerciseSetting';
import ExerciseDetail from '../ExerciseDetail';
import SetExercise from '../SetExercise';
import DeleteExercise from '../DeleteExercise';
import ExerciseList from '../ExerciseList';

import type { Exercise } from '~/static/exercise/data';
import type { Nullable } from '~/typings/utils';

import ArrowLeft from '~/assets/img/heroicons/mini/arrow-left';
import EllipsisVertical from '~/assets/img/heroicons/mini/ellipsis-vertical';
import LogoMark from '~/assets/img/logo-mark.svg';
import Upper from '~/assets/img/exercise/upper.png';

interface Props {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

const PlanDetail: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.plan.detail' });
  const dispatch = useAppDispatch();

  const selectedPlan = useAppSelector((state) => state.exercise.selectedPlan);

  /** Content */
  const [selectedExercise, setSelectedExercise] = useState<Exercise>();
  const [selectedExerciseData, setSelectedExerciseData] = useState<{
    index: Nullable<number>;
    sets: number;
    reps: number;
  }>({
    index: null,
    sets: 0,
    reps: 0,
  });

  const handleSelectedExercise = (index: number) => {
    const data = selectedPlan.exerciseList[index];

    setSelectedExercise(data);
    setSelectedExerciseData((prev) => ({ ...prev, index, sets: data.sets, reps: data.reps }));
  };

  const handleClickItem = (index: number) => {
    handleSelectedExercise(index);
    setShowEditExercise(true);
  };

  const handleControlItem = (index: number) => {
    handleSelectedExercise(index);
    setShowExerciseSetting(true);
  };

  /** Edit */
  const [isShowEditPlan, setShowEditPlan] = useState(false);
  const [showEditName, setShowEditName] = useState(false);
  const [showDeletePlan, setShowDeletePlan] = useState(false);
  const [editActions] = useState<ListItemType[]>([
    {
      title: t('edit-name'),
      img: <PencilIcon />,
      onClick: () => {
        setShowEditPlan(false);
        setShowEditName(true);
      },
    },
    {
      title: t('delete-plan'),
      img: <TrashIcon />,
      category: 'warning',
      onClick: () => {
        setShowEditPlan(false);
        setShowDeletePlan(true);
      },
    },
  ]);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    setNewName(selectedPlan.name);
  }, [selectedPlan.name]);

  const editNameHandler = () => {
    dispatch({
      type: 'exercise/setSelectedPlan',
      payload: {
        ...selectedPlan,
        name: newName,
      },
    });
    ExerciseService.updateWorkoutPlanName(selectedPlan.id as string, newName);
    setShowEditName(false);
  };

  const editNamePreviousHandler = () => {
    setShowEditName(false);
    setShowEditPlan(true);
  };

  const closeEditNameHandler = () => {
    setNewName(selectedPlan.name);
    setShowEditName(false);
  };

  const cancelDeleteHandler = () => {
    setShowDeletePlan(false);
  };

  const confirmDeleteHandler = async () => {
    if (selectedPlan.id) {
      ExerciseService.deleteWorkoutPlan(selectedPlan.id);
    }
    setShowDeletePlan(false);
    props.onClose();
  };

  /** Add Exercise */
  const [isShowAddExercise, setShowAddExercise] = useState(false);

  /** Exercise settings */
  const [isShowExerciseSetting, setShowExerciseSetting] = useState(false);

  const handleCloseExerciseSetting = () => {
    setShowExerciseSetting(false);
  };

  const handleKnowExerciseSetting = () => {
    setShowExerciseSetting(false);
    setShowExerciseDetail(true);
  };

  const handleEditExerciseSetting = () => {
    setShowExerciseSetting(false);
    setShowEditExercise(true);
  };

  const handleDeleteExerciseSetting = () => {
    setShowExerciseSetting(false);
    setShowDeleteExercise(true);
  };

  /** Exercise detail */
  const [isShowExerciseDetail, setShowExerciseDetail] = useState(false);

  const handleCloseExerciseDetail = () => {
    setShowExerciseDetail(false);
  };

  const handleConfirmExerciseDetail = () => {
    setShowExerciseDetail(false);
  };

  /** Edit exercise */
  const [isShowEditExercise, setShowEditExercise] = useState(false);

  const handleCloseEditExercise = () => {
    setShowEditExercise(false);
  };

  /** Delete exercise */
  const [isShowDeleteExercise, setShowDeleteExercise] = useState(false);

  const handleCloseDeleteExercise = () => {
    setShowDeleteExercise(false);
  };

  return (
    <div
      className={`flex flex-col w-screen h-screen bg-primary z-10 transition-all duration-800
        absolute top-0 ${props.show ? 'right-0' : '-right-full'}`}
    >
      <HCHeader
        expand
        title={selectedPlan.name}
        prefix={
          <HCHeaderIconButton onClick={props.onClose}>
            <ArrowLeft />
          </HCHeaderIconButton>
        }
        suffix={
          <HCHeaderIconButton onClick={() => setShowEditPlan(true)}>
            <EllipsisVertical />
          </HCHeaderIconButton>
        }
      >
        {selectedPlan.exerciseList.length > 0 && (
          <Fragment>
            <div className='px-4 py-2 flex items-center'>
              <img src={Upper} alt='default' />
              <div className='text-body-s text-tertiary'>
                <div className='mb-2 flex'>
                  <span className='mr-1'>
                    {ExerciseService.getPlanUpperLowerCoreText(selectedPlan.upperLowerCoreList)}
                    {` · ${t('challenge')}`}
                  </span>
                  <HCRate level={selectedPlan.challenge} />
                </div>
                <div>{ExerciseService.getPlanModalityText(selectedPlan.modalityList)}</div>
              </div>
            </div>
            <div className='flex p-4 gap-x-2'>
              <HCButton color='tertiary' onClick={() => setShowAddExercise(true)}>
                <span className='mr-2 break-keep'>{t('add-exercise')}</span>
                <PlusSmallIcon className='w-5 h-5' />
              </HCButton>
              <HCButton color='highlight'>{t('start-fitness')}</HCButton>
            </div>
          </Fragment>
        )}
      </HCHeader>

      {/* Content */}
      {selectedPlan.exerciseList.length === 0 ? (
        <div className='px-4 pt-3'>
          <div className='px-4 py-6 flex flex-col items-center border border-secondary rounded-2xl'>
            <img src={LogoMark} alt='logoMark' className='w-13 mb-2' />
            <h3 className='text-heading-xs text-secondary mb-2'>{t('empty.title')}</h3>
            <p className='text-tertiary text-body-s mb-6'>{t('empty.subtitle')}</p>
            <HCButton color='highlight' onClick={() => setShowAddExercise(true)}>
              {t('add-exercise')}
            </HCButton>
          </div>
        </div>
      ) : (
        <ExerciseList
          data={selectedPlan.exerciseList}
          type='info'
          onClick={handleClickItem}
          onControl={handleControlItem}
        />
      )}

      {/* Edit plan */}
      <HCBottomSheet
        show={isShowEditPlan}
        title={t('edit-plan')}
        onClose={() => setShowEditPlan(false)}
      >
        <HCList data={editActions} bleed renderItem={(item) => <HCListItem {...item} />} />
      </HCBottomSheet>

      {/* Edit name */}
      <HCBottomSheet
        show={showEditName}
        title={t('edit-name')}
        keyboard
        prefix
        onPrefix={editNamePreviousHandler}
        onClose={closeEditNameHandler}
      >
        <div className='px-4 pt-4'>
          <HCInput
            value={newName}
            placeholder={t('input-workout-plan-name')}
            onChange={(e) => setNewName(e.target.value)}
            className='mb-3'
          />
          <HCButton color='highlight' disabled={!selectedPlan.name} onClick={editNameHandler}>
            {t('confirm-edit')}
          </HCButton>
        </div>
      </HCBottomSheet>

      {/* Delete plan */}
      <HCModal
        open={showDeletePlan}
        type='warning'
        title={t('delete.title')}
        description={t('delete.description', { name: selectedPlan.name })}
        cancel={t('delete.cancel')}
        confirm={t('delete.confirm')}
        onCancel={cancelDeleteHandler}
        onConfirm={confirmDeleteHandler}
      />

      {/* Add exercise */}
      <AddExercise show={isShowAddExercise} onClose={() => setShowAddExercise(false)} />

      {/* Exercise setting */}
      <ExerciseSetting
        show={isShowExerciseSetting}
        onClose={handleCloseExerciseSetting}
        onKnow={handleKnowExerciseSetting}
        onEdit={handleEditExerciseSetting}
        onDelete={handleDeleteExerciseSetting}
      />

      {/* Exercise detail */}
      <ExerciseDetail
        show={isShowExerciseDetail}
        onClose={handleCloseExerciseDetail}
        onConfirm={handleConfirmExerciseDetail}
      />

      {/* Edit Exercise */}
      {selectedExercise && (
        <SetExercise
          show={isShowEditExercise}
          exercise={selectedExercise}
          type='edit'
          index={selectedExerciseData.index}
          sets={selectedExerciseData.sets}
          reps={selectedExerciseData.reps}
          onClose={handleCloseEditExercise}
        />
      )}

      {/* Delete Exercise */}
      {selectedExerciseData.index !== null && (
        <DeleteExercise
          show={isShowDeleteExercise}
          index={selectedExerciseData.index}
          onClose={handleCloseDeleteExercise}
        />
      )}
    </div>
  );
};

export default PlanDetail;
