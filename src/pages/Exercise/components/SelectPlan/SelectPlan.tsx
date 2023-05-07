import React from 'react';
import { useAppSelector, useAppDispatch } from '~/store/hook';
import { useTranslation } from 'react-i18next';

import HCBottomSheet from '~/components/BottomSheet';
import PlanList from '../PlanList';

import type { ListItemType } from '~/components/List';
import type { SelectPlanProps } from '.';

const SelectPlan: React.FC<SelectPlanProps> = ({
  show,
  onClose,
  onPrevious,
  onNext,
}: SelectPlanProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.select-plan' });

  const planList = useAppSelector((state) => state.exercise.planList);

  const handleClickItem = (item: ListItemType) => {
    const clickedPlan = planList.find((plan) => plan.id === item.key);

    if (clickedPlan) {
      dispatch({
        type: 'exercise/setSelectedPlan',
        payload: clickedPlan,
      });

      onNext();
    }
  };

  return (
    <HCBottomSheet show={show} title={t(`title`)} prefix onClose={onClose} onPrefix={onPrevious}>
      <PlanList data={planList} bleed onClick={handleClickItem} />
    </HCBottomSheet>
  );
};

export default SelectPlan;
