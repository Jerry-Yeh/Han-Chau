import React, { Fragment, useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '~/store/hook';

import HCBottomSheet from '~/components/BottomSheet';
import type { Exercise } from '~/static/exercise/data';
import { HCList } from '~/components/List';
import ExerciseService from '~/services/exercise';
import { level, muscles } from '~/static/exercise/dataType';
import HCInput, { InputChangeEventType } from '~/components/Input';
import HCButton from '~/components/Button';
import HCSnackBar, { HandleSnackBar } from '~/components/SnackBar';
import HCModal from '~/components/Modal';
import type { PlanExerciseData } from '~/services/exercise';
import type { Nullable } from '~/typings/utils';

// export interface TempSetsAndReps {
//   sets: number;
//   reps: number;
// }

interface Props {
  children?: React.ReactNode;
  show: boolean;
  exercise: Exercise;
  type: 'add' | 'edit';
  index?: Nullable<number>;
  sets?: number;
  reps?: number;
  onClose: () => void;
  onPrevious?: () => void;
}

const SetExercise: React.FC<Props> = ({
  show,
  exercise,
  type,
  index,
  sets,
  reps,
  onClose,
  onPrevious,
}: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.setting' });
  const language = useAppSelector((state) => state.language.language);
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);
  const dispatch = useAppDispatch();

  const [tempValue, setTempValue] = useState<Omit<PlanExerciseData, 'id'>>({
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

  const handleConfirm = () => {
    if (exercise) {
      const data = { id: exercise.id, ...tempValue };
      const existIndex = index || index === 0;
      const changed = tempValue.sets !== sets || tempValue.reps !== reps;

      switch (type) {
        case 'add':
          ExerciseService.addExerciseToPlan(selectedPlan.id, data)
            .then(() => {
              dispatch({
                type: 'exercise/setSelectedPlan',
                payload: {
                  ...selectedPlan,
                  exerciseList: selectedPlan.exerciseList.concat([
                    ExerciseService.transExerciseFromRawData(data),
                  ]),
                },
              });

              snackBarRef.current?.open({
                type: 'success',
                content: t('add.snackbar.success', { name: selectedPlan.name }),
              });
            })
            .catch(() => {
              snackBarRef.current?.open({
                type: 'error',
                content: t('add.snackbar.error', { name: selectedPlan.name }),
              });
            });
          break;
        case 'edit':
          if (existIndex && changed) {
            const exerciseList = [...selectedPlan.exerciseList];
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
                  content: t('edit.snackbar.success', {
                    name: exercise[`name${capitalizeLanguage}`],
                  }),
                });
              })
              .catch(() => {
                snackBarRef.current?.open({
                  type: 'error',
                  content: t('edit.snackbar.error', {
                    name: exercise[`name${capitalizeLanguage}`],
                  }),
                });
              });
          }
          break;
      }
    }

    onClose();
  };

  const handleClose = () => {
    setOpenAbandon(true);
  };

  const handleCancelAbandon = () => {
    setOpenAbandon(false);
  };

  const resetTempValue = () => {
    if (sets && reps) {
      setTempValue({ sets, reps });
    }
  };

  const handleConfirmAbandon = () => {
    resetTempValue();
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
            {t('confirm', { name: selectedPlan.name })}
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
