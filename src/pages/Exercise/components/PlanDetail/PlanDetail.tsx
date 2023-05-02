import React, { useState, useEffect, Fragment } from 'react';
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

import ArrowLeft from '~/assets/img/heroicons/mini/arrow-left';
import EllipsisVertical from '~/assets/img/heroicons/mini/ellipsis-vertical';
import Logomark from '~/assets/img/logomark.svg';
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

  /** Edit */
  const [showEditPlan, setShowEditPlan] = useState(false);
  const [showEditName, setShowEditName] = useState(false);
  const [showDeletePlan, setShowDeletePlan] = useState(false);
  const [editActions] = useState<ListItemType[]>([
    {
      title: t('edit-name'),
      img: (
        <div className='bg-tertiary icon-secondary p-1.5'>
          <PencilIcon />
        </div>
      ),
      onClick: () => {
        setShowEditPlan(false);
        setShowEditName(true);
      },
    },
    {
      title: t('delete-plan'),
      img: (
        <div className='bg-destructive-light icon-destructive p-1.5'>
          <TrashIcon />
        </div>
      ),
      type: 'warning',
      onClick: () => {
        setShowEditPlan(false);
        setShowDeletePlan(true);
      },
    },
  ]);
  const [newName, setNewName] = useState('');
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);

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
  const [showAddExercise, setShowAddExercise] = useState(false);

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
            <img src={Logomark} alt='logomark' className='w-13 mb-2' />
            <h3 className='text-heading-xs text-secondary mb-2'>{t('empty.title')}</h3>
            <p className='text-tertiary text-body-s mb-6'>{t('empty.subtitle')}</p>
            <HCButton color='highlight' onClick={() => setShowAddExercise(true)}>
              {t('add-exercise')}
            </HCButton>
          </div>
        </div>
      ) : (
        <HCList
          data={selectedPlan.exerciseList.map((item) => ({
            title: item[`name${capitalizeLanguage}`],
            description: `${item.sets} sets·${item.reps} reps`,
            img: (
              <img
                src={`https://storage.cloud.google.com/${
                  import.meta.env.VITE_STORAGE_BUCKET
                }/exercise/${item.id}.png`}
                alt='img'
              />
            ),
          }))}
          renderItem={(item) => <HCListItem {...item} actionType='info' />}
          className='grow bg-tertiary overflow-y-scroll'
        />
      )}

      {/* Edit plan */}
      <HCBottomSheet
        show={showEditPlan}
        title={t('edit-plan')}
        onClose={() => setShowEditPlan(false)}
      >
        <HCList
          data={editActions}
          renderItem={(item) => <HCListItem {...item}></HCListItem>}
          bleed
        />
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

      {/* Add Exercise */}
      <AddExercise show={showAddExercise} onClose={() => setShowAddExercise(false)} />
    </div>
  );
};

export default PlanDetail;
