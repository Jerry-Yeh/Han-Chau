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
  bleed = true,
  title = true,
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
    <div className={`${bleed ? 'bg-primary' : 'bg-tertiary'} h-full grow overflow-y-scroll`}>
      {title && (
        <h3 className='text-heading-s px-4 pt-4 pb-2'>
          {t('list-title', { number: data.length })}
        </h3>
      )}
      <HCList
        data={data.map((item) => ({
          id: item.id,
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
        renderItem={(item) => (
          <HCListItem
            {...item}
            actionType={type}
            onClick={() => onClick(item.id as number)}
            onControl={() => onControl(item.id as number)}
          />
        )}
        bleed={bleed}
      />
    </div>
  );
};

ExerciseList.defaultProps = {
  type: 'add',
};

export default ExerciseList;
