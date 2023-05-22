import React, { Fragment, useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '~/store/hook';

import HCBottomSheet from '~/components/BottomSheet';
import { HCList } from '~/components/List';
import ExerciseService, { CompleteExerciseData } from '~/services/exercise';
import { level, muscles } from '~/static/exercise/dataType';
import HCInput, { InputChangeEventType } from '~/components/Input';
import HCButton from '~/components/Button';
import HCSnackBar, { HandleSnackBar } from '~/components/SnackBar';
import HCModal from '~/components/Modal';
import UtilsService from '~/services/utils';

import type { Exercise } from '~/static/exercise/data';
import type { PlanExerciseData } from '~/services/exercise';

interface Props {
  children?: React.ReactNode;
  show: boolean;
  exercise: Exercise | CompleteExerciseData;
  type: 'add' | 'edit';
  sets?: number;
  reps?: number;
  onClose: () => void;
  onConfirm: () => void;
  onPrevious?: () => void;
}

const SetExercise: React.FC<Props> = ({
  show,
  exercise,
  type,
  sets,
  reps,
  onClose,
  onConfirm,
  onPrevious,
}: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.setting' });
  const language = useAppSelector((state) => state.language.language);
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);
  const dispatch = useAppDispatch();

  const [tempValue, setTempValue] = useState<Omit<PlanExerciseData, 'id' | 'exerciseId'>>({
    sets: sets ? sets : 0,
    reps: reps ? reps : 0,
  });
  const [isDisabled, setDisabled] = useState(false);
  const selectedPlan = useAppSelector((state) => state.exercise.selectedPlan);
  const snackBarRef = useRef<HandleSnackBar>(null);
  const [isOpenAbandon, setOpenAbandon] = useState(false);
  const [modalContext, setModalContext] = useState({
    title: '',
    description: '',
    cancel: '',
    confirm: '',
  });

  const handleChangeSets = (e: InputChangeEventType) => {
    setTempValue((prev) => ({ ...prev, sets: +e.target.value }));
  };

  const handleChangeReps = (e: InputChangeEventType) => {
    setTempValue((prev) => ({ ...prev, reps: +e.target.value }));
  };

  useEffect(() => {
    if (!tempValue.sets || !tempValue.reps) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [tempValue]);

  useEffect(() => {
    setModalContext((prev) => ({
      ...prev,
      title: t(`${type}.modal.title`),
      description: t(`${type}.modal.description`),
      cancel: t(`${type}.modal.cancel`),
      confirm: t(`${type}.modal.confirm`),
    }));
  }, [type, t]);

  useEffect(() => {
    if (!show) {
      setTempValue({ sets: 0, reps: 0 });
    } else {
      if (sets) setTempValue((prev) => ({ ...prev, sets }));
      if (reps) setTempValue((prev) => ({ ...prev, reps }));
    }
  }, [show, sets, reps]);

  const handleConfirm = () => {
    if (exercise) {
      const data = { id: UtilsService.getTimestamp(), exerciseId: exercise.id, ...tempValue };
      const changed = tempValue.sets !== sets || tempValue.reps !== reps;
      const rawExerciseList = ExerciseService.transPlanToRawData(selectedPlan).exerciseList.concat([
        data,
      ]);

      switch (type) {
        case 'add':
          ExerciseService.addExerciseToPlan(selectedPlan.id, rawExerciseList)
            .then(() => {
              const newExerciseList = selectedPlan.exerciseList.concat([
                ExerciseService.transExerciseFromRawData(data),
              ]);

              dispatch({
                type: 'exercise/setSelectedPlan',
                payload: {
                  ...selectedPlan,
                  exerciseList: newExerciseList,
                  ...ExerciseService.calculatePlan(newExerciseList),
                },
              });

              snackBarRef.current?.open({
                type: 'success',
                content: t('add.snack-bar.success', { name: selectedPlan.name }),
              });
            })
            .catch(() => {
              snackBarRef.current?.open({
                type: 'error',
                content: t('add.snack-bar.error', { name: selectedPlan.name }),
              });
            });
          break;
        case 'edit':
          if (changed) {
            const exerciseList = selectedPlan.exerciseList.map((item) =>
              ExerciseService.transExerciseToRawData(item),
            );
            const index = exerciseList.findIndex((item) => item.id === exercise.id);
            exerciseList[index] = { ...exerciseList[index], ...tempValue };

            ExerciseService.editExerciseInPlan(selectedPlan.id, exerciseList)
              .then(() => {
                dispatch({
                  type: 'exercise/setSelectedPlan',
                  payload: {
                    ...selectedPlan,
                    exerciseList,
                  },
                });

                snackBarRef.current?.open({
                  type: 'success',
                  content: t('edit.snack-bar.success', {
                    name: exercise[`name${capitalizeLanguage}`],
                  }),
                });
              })
              .catch(() => {
                snackBarRef.current?.open({
                  type: 'error',
                  content: t('edit.snack-bar.error', {
                    name: exercise[`name${capitalizeLanguage}`],
                  }),
                });
              });
          }
          break;
      }
    }

    onConfirm();
  };

  const handleClose = () => {
    setOpenAbandon(true);
  };

  const handleCancelAbandon = () => {
    setOpenAbandon(false);
  };

  const handleConfirmAbandon = () => {
    setOpenAbandon(false);
    onClose();
  };

  return (
    <Fragment>
      <HCBottomSheet
        show={show}
        title={t(`${type}.title`)}
        handle
        prefix={!!onPrevious}
        footer={
          <HCButton color='highlight' disabled={isDisabled} onClick={handleConfirm}>
            {t(`${type}.confirm`, { name: selectedPlan.name })}
          </HCButton>
        }
        onClose={handleClose}
        onPrefix={onPrevious}
      >
        <Fragment>
          <div className='pt-4'>
            <HCList
              data={[
                {
                  title: exercise[`name${capitalizeLanguage}`],
                  description: `${level[exercise.level][language]} · ${exercise.muscles
                    .map((item) => muscles[item][language])
                    .join('/')}`,
                  img: (
                    <img
                      className='w-full'
                      src={ExerciseService.getExerciseImageUrl('1.png')}
                      alt='img'
                    />
                  ),
                },
              ]}
              bleed
            />
          </div>
          <div className='px-4 py-2'>
            <div className='border-t border-secondary' />
          </div>
          <div className='p-4'>
            <HCInput
              label={t('sets.label')}
              value={tempValue.sets}
              placeholder={t('sets.placeholder')}
              suffix='sets'
              className='mb-6'
              onChange={handleChangeSets}
            />
            <HCInput
              label={t('reps.label')}
              value={tempValue.reps}
              placeholder={t('reps.placeholder')}
              suffix='reps'
              className='mb-6'
              onChange={handleChangeReps}
            />
            <p className='text-body-xs text-tertiary'>{t('description')}</p>
          </div>
        </Fragment>
      </HCBottomSheet>

      <HCSnackBar ref={snackBarRef} />

      <HCModal
        open={isOpenAbandon}
        type='warning'
        title={modalContext.title}
        description={modalContext.description}
        cancel={modalContext.cancel}
        confirm={modalContext.confirm}
        onCancel={handleCancelAbandon}
        onConfirm={handleConfirmAbandon}
      />
    </Fragment>
  );
};

export default SetExercise;
