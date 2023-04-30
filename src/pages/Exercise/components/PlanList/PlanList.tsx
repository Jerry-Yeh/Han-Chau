import React from 'react';
import { useTranslation } from 'react-i18next';

import { HCList, HCListItem, ListItemType } from '~/components/List';
import HCBadge from '~/components/Badge';
import type { WorkoutPlan } from '../../interface';
import ExerciseService from '~/services/exercise';

import Upper from '~/assets/img/exercise/upper.png';

interface Props {
  children?: React.ReactNode;
  data: WorkoutPlan[];
  onClick?: (item: ListItemType) => void;
}

const PlanList: React.FC<Props> = ({ data, onClick }: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise' });

  const handleClickItem = (item: ListItemType) => {
    if (onClick) onClick(item);
  };

  return (
    <HCList
      data={data.map((item) => ({
        key: item.id,
        title: item.name,
        description: `${t(`plan.exercises`, {
          number: item.exerciseList.length,
        })} · ${
          item.upperLowerCoreList.length > 0
            ? ExerciseService.getPlanUpperLowerCoreText(item.upperLowerCoreList)
            : t('plan.without-training-parts')
        }`,
        img: (
          <HCBadge type='rate' level={item.challenge}>
            <img src={Upper} alt='default' />
          </HCBadge>
        ),
      }))}
      renderItem={(item) => (
        <HCListItem {...item} actionType='next' onClick={() => handleClickItem(item)} />
      )}
    />
  );
};

export default PlanList;
