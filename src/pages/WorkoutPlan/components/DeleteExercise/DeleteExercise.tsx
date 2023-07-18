import React, { Fragment, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '~/store/hook';

import HCModal from '~/components/Modal';
import HCSnackBar, { HandleSnackBar } from '~/components/SnackBar';
import ExerciseService from '~/services/exercise';

import useUrlPlan from '~/hooks/exercise/useUrlPlan';

import type { DeleteExerciseProps } from '.';

const DeleteExercise: React.FC<DeleteExerciseProps> = ({
  show,
  exercise,
  onClose,
  onConfirm,
}: DeleteExerciseProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.setting' });
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);
  const dispatch = useAppDispatch();

  const [plan, updatePlan] = useUrlPlan();
  const snackBarRef = useRef<HandleSnackBar>(null);

  const handleCancelDelete = () => {
    onClose();
  };

  const handleConfirmDelete = () => {
    const exerciseList = [...plan.exerciseList];
    const index = exerciseList.findIndex((item) => item.id === exercise.id);
    exerciseList.splice(index, 1);

    ExerciseService.deleteExerciseInPlan(plan.id, exerciseList)
      .then(() => {
        dispatch({
          type: 'exercise/setSelectedPlan',
          payload: {
            ...plan,
            exerciseList,
            ...ExerciseService.calculatePlan(exerciseList),
          },
        });

        snackBarRef.current?.open({
          type: 'success',
          content: t('delete.snack-bar.success', {
            name: exercise[`name${capitalizeLanguage}`],
          }),
        });

        updatePlan();
        onConfirm();
      })
      .catch(() => {
        snackBarRef.current?.open({
          type: 'error',
          content: t('delete.snack-bar.error', {
            name: exercise[`name${capitalizeLanguage}`],
          }),
        });
      });
  };

  return (
    <Fragment>
      <HCModal
        open={show}
        type='warning'
        title={t('delete.modal.title')}
        description={t('delete.modal.description', {
          name: exercise[`name${capitalizeLanguage}`],
        })}
        cancel={t('delete.modal.cancel')}
        confirm={t('delete.modal.confirm')}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      ></HCModal>

      <HCSnackBar ref={snackBarRef} />
    </Fragment>
  );
};

export default DeleteExercise;
