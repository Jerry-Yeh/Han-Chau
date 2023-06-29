import React, { useState, useEffect, Fragment, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { PencilIcon, TrashIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { useAppSelector, useAppDispatch } from '~/store/hook';
import { useNavigate, useParams } from 'react-router-dom';

import HCHeader, { HCHeaderRegion } from '~/components/Header';
import HCHeaderIconButton from '~/components/Header/HeaderIconButton';
import HCButton from '~/components/Button';
import HCBottomSheet from '~/components/BottomSheet';
import { HCList, HCListItem, ListItemType } from '~/components/List';
import HCInput from '~/components/Input';
import ExerciseService from '~/services/exercise';
import HCModal from '~/components/Modal';
import HCRate from '~/components/Rate';
import ExerciseSetting from '../components/ExerciseSetting';
import ExerciseDetail from '../components/ExerciseDetail';
import SetExercise from '../components/SetExercise';
import DeleteExercise from '../components/DeleteExercise';
import ExerciseList from '../components/ExerciseList';
import Layout from '../components/Layout';

import useHeight from '~/hooks/utils/useHeight';
import useUrlPlan from '~/hooks/exercise/useUrlPlan';
import useDisableBackgroundEvents from '~/hooks/utils/useDisableBackgroundEvent';
import usePlanList from '~/hooks/exercise/usePlanList';

import type { CompleteExerciseData } from '~/services/exercise';

import ArrowLeft from '~/assets/img/heroicons/mini/arrow-left';
import EllipsisVertical from '~/assets/img/heroicons/mini/ellipsis-vertical';
import LogoMark from '~/assets/img/logo-mark.svg';
import Upper from '~/assets/img/exercise/upper.png';

const PlanDetail: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.plan.detail' });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { exerciseId } = useParams();
  const user = useAppSelector((state) => state.user.user);

  const [plan, updatePlan] = useUrlPlan();
  const [_, updatePlanList] = usePlanList();

  useEffect(() => {
    if (!plan) {
      navigate(-1);
    }
  }, [plan, navigate]);

  const handleClickPrevious = () => {
    dispatch({
      type: 'exercise/resestSelectedPlan',
      payload: user.id,
    });
    navigate('/workout-plan');
  };

  /** Header */
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = useHeight(headerRef);

  /** Content */
  const [selectedExercise, setSelectedExercise] = useState<CompleteExerciseData>();

  const handleSelectedExercise = (id: number) => {
    const data = plan.exerciseList.find((exercise) => exercise.id === id);

    if (data) {
      setSelectedExercise(data);
    }
  };

  const handleClickExercise = (id: number) => {
    const data = plan.exerciseList.find((exercise) => exercise.id === id);

    handleSelectedExercise(id);
    if (data) {
      navigate(`${data.id}`);
    }
  };

  const handleControlExercise = (id: number) => {
    handleSelectedExercise(id);
    setShowExerciseSetting(true);
  };

  /** Edit */
  const [isShowEditPlan, setShowEditPlan] = useState(false);
  const [isShowEditName, setShowEditName] = useState(false);
  const [isShowDeletePlan, setShowDeletePlan] = useState(false);
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
    setNewName(plan.name);
  }, [plan.name]);

  const handleEditName = async () => {
    // dispatch({
    //   type: 'exercise/setPlan',
    //   payload: {
    //     ...plan,
    //     name: newName,
    //   },
    // });
    await ExerciseService.updatePlanName(plan.id as string, newName);
    updatePlan();
    setShowEditName(false);
  };

  const editNamePreviousHandler = () => {
    setShowEditName(false);
    setShowEditPlan(true);
  };

  const closeEditNameHandler = () => {
    setNewName(plan.name);
    setShowEditName(false);
  };

  const handleCancelDelete = () => {
    setShowDeletePlan(false);
  };

  const handleConfirmDelete = async () => {
    if (plan.id) {
      ExerciseService.deletePlan(plan.id);
    }
    setShowDeletePlan(false);
    navigate('/workout-plan');
  };

  /** Add Exercise */
  const handleAddExercise = () => {
    navigate('exercises');
  };

  /** Exercise settings */
  const [isShowExerciseSetting, setShowExerciseSetting] = useState(false);

  const handleCloseExerciseSetting = () => {
    setShowExerciseSetting(false);
  };

  const handleReviewExerciseSetting = () => {
    setShowExerciseSetting(false);
    if (selectedExercise) navigate(`${selectedExercise.id}`);
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

  useEffect(() => {
    if (exerciseId) {
      const exercise = plan.exerciseList.find((item) => item.id === +exerciseId);

      if (exercise) {
        setSelectedExercise(exercise);
        setShowExerciseDetail(true);
      }
    }
  }, [exerciseId, plan]);

  const handleCloseExerciseDetail = () => {
    setShowExerciseDetail(false);
    navigate(`/workout-plan/${plan.id}`);
  };

  const handleEditExerciseDetail = () => {
    setShowExerciseDetail(false);
    setShowEditExercise(true);
  };

  /** Edit exercise */
  const [isShowEditExercise, setShowEditExercise] = useState(false);

  const handleCloseEditExercise = () => {
    setShowEditExercise(false);
    navigate(`/workout-plan/${plan.id}`);
  };

  const handleConfirmEditExercise = () => {
    updatePlan();
    setShowEditExercise(false);
    navigate(`/workout-plan/${plan.id}`);
  };

  const handlePreviousEditExercise = () => {
    setShowEditExercise(false);
    setShowExerciseDetail(true);
    if (selectedExercise) navigate(`/workout-plan/${plan.id}/${selectedExercise.id}`);
  };

  /** Delete exercise */
  const [isShowDeleteExercise, setShowDeleteExercise] = useState(false);

  const handleCloseDeleteExercise = () => {
    setShowDeleteExercise(false);
  };

  const handleConfirmDeleteExercise = () => {
    updatePlan();
    setShowDeleteExercise(false);
    updatePlanList();
  };

  /** Disable background events */
  useDisableBackgroundEvents([
    isShowEditPlan,
    isShowDeletePlan,
    isShowEditName,
    isShowExerciseSetting,
    isShowExerciseDetail,
    isShowEditExercise,
    isShowDeleteExercise,
  ]);

  return (
    <Layout
      className={`${plan.exerciseList.length === 0 ? 'bg-primary' : 'bg-tertiary'}`}
      header={
        <HCHeader
          ref={headerRef}
          title={plan.name}
          prefix={
            <HCHeaderIconButton onClick={handleClickPrevious}>
              <ArrowLeft />
            </HCHeaderIconButton>
          }
          suffix={
            <HCHeaderIconButton onClick={() => setShowEditPlan(true)}>
              <EllipsisVertical />
            </HCHeaderIconButton>
          }
          behavior='fully'
        >
          {plan.exerciseList.length > 0 ? (
            <Fragment>
              <HCHeaderRegion
                behavior='fully'
                className='bg-primary text-heading-m text-primary pl-4 pb-3'
              >
                {plan.name}
              </HCHeaderRegion>
              <HCHeaderRegion behavior='fully' className='bg-primary'>
                <div className='px-4 py-2 flex items-center'>
                  <img src={Upper} alt='default' className='mr-2' />
                  <div className='text-body-s text-tertiary'>
                    <div className='mb-2 flex'>
                      <span className='mr-1'>
                        {ExerciseService.getPlanUpperLowerCoreText(plan.upperLowerCoreList)}
                        {` · ${t('challenge')}`}
                      </span>
                      <HCRate level={plan.challenge} />
                    </div>
                    <div>{ExerciseService.getPlanModalityText(plan.modalityList)}</div>
                  </div>
                </div>
              </HCHeaderRegion>
              <HCHeaderRegion behavior='fixed' top={headerHeight} className='bg-primary'>
                <div className='flex p-4 gap-x-2'>
                  <HCButton color='tertiary' onClick={handleAddExercise}>
                    <span className='mr-2 break-keep'>{t('add-exercise')}</span>
                    <PlusSmallIcon className='w-5 h-5' />
                  </HCButton>
                  <HCButton color='highlight'>{t('start-fitness')}</HCButton>
                </div>
              </HCHeaderRegion>
            </Fragment>
          ) : (
            <HCHeaderRegion
              behavior='fixed'
              className='bg-primary text-heading-m text-primary pl-4 pb-3'
            >
              {plan.name}
            </HCHeaderRegion>
          )}
        </HCHeader>
      }
      content={
        plan.exerciseList.length === 0 ? (
          <div className='px-4 pt-3'>
            <div className='px-4 py-6 flex flex-col items-center border border-secondary rounded-2xl'>
              <img src={LogoMark} alt='logoMark' className='w-13 mb-2' />
              <h3 className='text-heading-xs text-secondary mb-2'>{t('empty.title')}</h3>
              <p className='text-tertiary text-body-s mb-6'>{t('empty.subtitle')}</p>
              <HCButton color='highlight' onClick={handleAddExercise}>
                {t('add-exercise')}
              </HCButton>
            </div>
          </div>
        ) : (
          <Fragment>
            <ExerciseList
              data={plan.exerciseList}
              type='info'
              bleed={false}
              title={false}
              onClick={handleClickExercise}
              onControl={handleControlExercise}
            />
          </Fragment>
        )
      }
    >
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
        show={isShowEditName}
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
          <HCButton color='highlight' disabled={!plan.name} onClick={handleEditName}>
            {t('confirm-edit')}
          </HCButton>
        </div>
      </HCBottomSheet>

      {/* Delete plan */}
      <HCModal
        open={isShowDeletePlan}
        type='warning'
        title={t('delete.title')}
        description={t('delete.description', { name: plan.name })}
        cancel={t('delete.cancel')}
        confirm={t('delete.confirm')}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />

      {/* Exercise setting */}
      <ExerciseSetting
        show={isShowExerciseSetting}
        onClose={handleCloseExerciseSetting}
        onReview={handleReviewExerciseSetting}
        onEdit={handleEditExerciseSetting}
        onDelete={handleDeleteExerciseSetting}
      />

      {/* Exercise detail */}
      <ExerciseDetail
        show={isShowExerciseDetail}
        exercise={selectedExercise}
        onClose={handleCloseExerciseDetail}
        onEdit={handleEditExerciseDetail}
        // onConfirm={handleConfirmExerciseDetail}
      />

      {/* Edit Exercise */}
      {selectedExercise && (
        <SetExercise
          show={isShowEditExercise}
          exercise={selectedExercise}
          type='edit'
          sets={selectedExercise.sets}
          reps={selectedExercise.reps}
          onClose={handleCloseEditExercise}
          onConfirm={handleConfirmEditExercise}
          onPrevious={handlePreviousEditExercise}
        />
      )}

      {/* Delete Exercise */}
      {selectedExercise && (
        <DeleteExercise
          show={isShowDeleteExercise}
          exercise={selectedExercise}
          onClose={handleCloseDeleteExercise}
          onConfirm={handleConfirmDeleteExercise}
        />
      )}
    </Layout>
  );
};

export default PlanDetail;
