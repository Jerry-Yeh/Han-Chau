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
import HCSnackBar, { HandleSnackBar, SnackBarHandler } from '~/components/SnackBar';
import HCModal from '~/components/Modal';

export interface TempSetsAndReps {
  sets: number;
  reps: number;
}

interface Props {
  children?: React.ReactNode;
  show: boolean;
  exercise: Exercise;
  onClose: () => void;
  onPrevious: () => void;
}

const JoinPlan: React.FC<Props> = ({ show, exercise, onClose, onPrevious }: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.join' });
  const language = useAppSelector((state) => state.language.language);
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);
  const dispatch = useAppDispatch();

  const [tempValue, setTempValue] = useState<TempSetsAndReps>({
    sets: 0,
    reps: 0,
  });
  const [isDisabled, setDisabled] = useState(false);
  const selectedPlan = useAppSelector((state) => state.exercise.selectedPlan);
  const snackBarRef = useRef<HandleSnackBar>(null);
  const [isOpenAbandon, setOpenAbandon] = useState(false);

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

  const handleConfirm = () => {
    if (exercise) {
      const data = { id: exercise.id, ...tempValue };

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
            content: t('snackbar.success', { name: selectedPlan.name }),
          });
        })
        .catch(() => {
          snackBarRef.current?.open({
            type: 'error',
            content: t('snackbar.error', { name: selectedPlan.name }),
          });
        });
    }

    onClose();
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
        title={t('title')}
        handle
        prefix
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
            <div className='border-t border-secondary'></div>
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

      {/* <HCSnackBar ref={snackBarRef} type={snackBarHandler.type} content={snackBarHandler.content} /> */}
      <HCSnackBar ref={snackBarRef} />

      <HCModal
        open={isOpenAbandon}
        type='warning'
        title={t('modal.title')}
        description={t('modal.description')}
        cancel={t('modal.cancel')}
        confirm={t('modal.confirm')}
        onCancel={handleCancelAbandon}
        onConfirm={handleConfirmAbandon}
      />
    </Fragment>
  );
};

export default JoinPlan;
