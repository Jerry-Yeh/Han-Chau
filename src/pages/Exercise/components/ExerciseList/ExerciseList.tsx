import React, { SyntheticEvent } from 'react';
import { useAppSelector } from '~/store/hook';
import { useTranslation } from 'react-i18next';

import { HCList, HCListItem } from '~/components/List';
import ExerciseService from '~/services/exercise';
import { level } from '~/static/exercise/dataType';

import type { ExerciseListProps } from '.';
import type { Exercise } from '~/static/exercise/data';
import type { PlanExerciseData } from '~/services/exercise';

import LogoMark from '~/assets/img/logo-mark.svg';

const ExerciseList: React.FC<ExerciseListProps> = ({
  data,
  type,
  onClick,
  onControl,
}: ExerciseListProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.add' });

  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);
  const language = useAppSelector((state) => state.language.language);

  const handleItemDescription = (item: Exercise | (Exercise & PlanExerciseData)): string => {
    switch (type) {
      case 'add':
        return `${level[item.level][language]} · ${ExerciseService.getExerciseMusclesText(
          item.muscles,
        )}`;
      case 'info':
        return `${(item as Exercise & PlanExerciseData).sets} sets·${
          (item as Exercise & PlanExerciseData).reps
        } reps`;
        break;
      default:
        return '';
    }
  };

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = LogoMark;
  };

  return (
    <div className='h-full bg-primary grow overflow-y-scroll'>
      <h3 className='text-heading-s text-primary px-4 pt-4 pb-2'>
        {t('list-title', { number: data.length })}
      </h3>
      <HCList
        data={data.map((item) => ({
          title: item[`name${capitalizeLanguage}`],
          description: handleItemDescription(item),
          img: (
            <img
              src={ExerciseService.getExerciseImageUrl(`${item.id}.png`)}
              onError={handleImageError}
              alt='img'
            />
          ),
        }))}
        renderItem={(item, index) => (
          <HCListItem
            {...item}
            actionType={type}
            onClick={() => onClick(index)}
            onControl={() => onControl(index)}
          />
        )}
        bleed
      />
    </div>
  );
};

ExerciseList.defaultProps = {
  type: 'add',
};

export default ExerciseList;
