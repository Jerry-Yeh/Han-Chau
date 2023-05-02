import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~/store/hook';

import HCBottomSheet from '~/components/BottomSheet';
import type { Exercise } from '~/static/exercise/data';
import { HCList } from '~/components/List';
import ExerciseService from '~/services/exercise';
import { level, muscles } from '~/static/exercise/dataType';
import HCInput, { InputChangeEventType } from '~/components/Input';
import HCButton from '~/components/Button';

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
  onConfirm: (value: TempSetsAndReps) => void;
}

const JoinPlan: React.FC<Props> = ({ show, exercise, onClose, onPrevious, onConfirm }: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.join' });
  const language = useAppSelector((state) => state.language.language);
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);

  const [tempValue, setTempValue] = useState<TempSetsAndReps>({
    sets: 0,
    reps: 0,
  });
  const [isDisabled, setDisabled] = useState(false);
  const selectedPlan = useAppSelector((state) => state.exercise.selectedPlan);

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
    onConfirm(tempValue);
  };

  return (
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
      onClose={onClose}
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
  );
};

export default JoinPlan;
