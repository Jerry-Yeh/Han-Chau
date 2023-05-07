import React, { Fragment, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '~/store/hook';

import HCModal from '~/components/Modal';
import HCSnackBar, { HandleSnackBar } from '~/components/SnackBar';
import ExerciseService from '~/services/exercise';
import type { DeleteExerciseProps } from '.';

const DeleteExercise: React.FC<DeleteExerciseProps> = ({
  show,
  index,
  onClose,
}: DeleteExerciseProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.setting' });
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);
  const dispatch = useAppDispatch();

  const selectedPlan = useAppSelector((state) => state.exercise.selectedPlan);
  const snackBarRef = useRef<HandleSnackBar>(null);
  const [deletedExercise] = useState(selectedPlan.exerciseList[index]);

  const handleCancelDelete = () => {
    onClose();
  };

  const handleConfirmDelete = () => {
    const exerciseList = [...selectedPlan.exerciseList];
    exerciseList.splice(index, 1)[0];

    ExerciseService.deleteExerciseInPlan(selectedPlan.id, exerciseList)
      .then(() => {
        dispatch({
          type: 'exercise/setSelectedPlan',
          payload: {
            ...selectedPlan,
            exerciseList,
            ...ExerciseService.calculatePlan(exerciseList),
          },
        });

        snackBarRef.current?.open({
          type: 'success',
          content: t('delete.snack-bar.success', {
            name: deletedExercise[`name${capitalizeLanguage}`],
          }),
        });
      })
      .catch(() => {
        snackBarRef.current?.open({
          type: 'error',
          content: t('delete.snack-bar.error', {
            name: deletedExercise[`name${capitalizeLanguage}`],
          }),
        });
      });

    onClose();
  };

  return (
    <Fragment>
      <HCModal
        open={show}
        type='warning'
        title={t('delete.modal.title')}
        description={t('delete.modal.description', {
          name: deletedExercise[`name${capitalizeLanguage}`],
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
