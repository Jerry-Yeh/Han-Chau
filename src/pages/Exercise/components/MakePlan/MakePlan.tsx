import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '~/store/hook';

import HCBottomSheet from '~/components/BottomSheet';
import HCInput, { InputChangeEventType } from '~/components/Input';
import HCButton from '~/components/Button';

import type { MakePlanProps } from '.';

const MakePlan: React.FC<MakePlanProps> = ({ show, onClose, onConfirm }: MakePlanProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise' });
  const dispatch = useAppDispatch();

  const selectedPlan = useAppSelector((state) => state.exercise.selectedPlan);

  const handleChangePlanName = (e: InputChangeEventType) => {
    dispatch({
      type: 'exercise/setSelectedPlan',
      payload: { ...selectedPlan, name: e.target.value },
    });
  };

  return (
    <HCBottomSheet show={show} title={t('make-new-workout-plan')} keyboard onClose={onClose}>
      <div className='px-4 pt-4'>
        <HCInput
          value={selectedPlan.name}
          placeholder={t('input-workout-plan-name')}
          onChange={handleChangePlanName}
          className='mb-3'
        />
        <HCButton color='highlight' disabled={!selectedPlan.name} onClick={onConfirm}>
          {t('make-workout-plan')}
        </HCButton>
      </div>
    </HCBottomSheet>
  );
};

export default MakePlan;
