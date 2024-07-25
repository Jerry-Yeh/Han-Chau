import React, { Fragment, useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '~/store/hook';

import HCBottomSheet from '~/components/BottomSheet';
import { HCList } from '~/components/List';
import ExerciseService from '~/services/exercise';
import { level, muscles } from '~/static/exercise/dataType';
import HCInput, { InputChangeEventType } from '~/components/Input';
import HCButton from '~/components/Button';
// import HCSnackBar, { HandleSnackBar } from '~/components/SnackBar';
import HCModal from '~/components/Modal';
// import UtilsService from '~/services/utils';

import { SetExerciseProps, SET_EXERCISE_ACTION, SetExerciseValue } from '.';
// import type { WorkoutPlanTemplateExercise } from '~/services/exercise';

const SetExercise: React.FC<SetExerciseProps> = ({
  show,
  exercise,
  action,
  sets,
  reps,
  onClose,
  onConfirm,
  onPrevious,
}: SetExerciseProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.setting' });
  const language = useAppSelector((state) => state.language.language);
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);

  const [tempValue, setTempValue] = useState<SetExerciseValue>({
    sets: sets ? sets : 0,
    reps: reps ? reps : 0,
  });
  const [isDisabled, setDisabled] = useState(false);
  const selectedPlan = useAppSelector((state) => state.exercise.selectedPlan);
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
      title: t(`${action}.modal.title`),
      description: t(`${action}.modal.description`),
      cancel: t(`${action}.modal.cancel`),
      confirm: t(`${action}.modal.confirm`),
    }));
  }, [action, t]);

  useEffect(() => {
    if (!show) {
      setTempValue({ sets: 0, reps: 0 });
    } else {
      if (sets) setTempValue((prev) => ({ ...prev, sets }));
      if (reps) setTempValue((prev) => ({ ...prev, reps }));
    }
  }, [show, sets, reps]);

  const handleConfirm = () => {
    onConfirm(tempValue);
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
        title={t(`${action}.title`)}
        handle
        prefix={!!onPrevious}
        footer={
          <HCButton color='primary' disabled={isDisabled} onClick={handleConfirm}>
            {t(`${action}.confirm`, { name: selectedPlan.name })}
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

      {/* <HCSnackBar ref={snackBarRef} /> */}

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
