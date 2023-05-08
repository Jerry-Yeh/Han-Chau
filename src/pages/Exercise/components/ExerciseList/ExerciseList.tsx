import React from 'react';
import { useAppSelector } from '~/store/hook';
import { useTranslation } from 'react-i18next';

import { HCList, HCListItem } from '~/components/List';
import ExerciseService from '~/services/exercise';
import { level } from '~/static/exercise/dataType';

import type { ExerciseListProps } from '.';

const ExerciseList: React.FC<ExerciseListProps> = ({
  data,
  onClick,
  onControl,
}: ExerciseListProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.add' });

  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);
  const language = useAppSelector((state) => state.language.language);

  return (
    <div className='h-full bg-primary grow overflow-y-scroll'>
      <h3 className='text-heading-s text-primary px-4 pt-4 pb-2'>
        {t('list-title', { number: data.length })}
      </h3>
      <HCList
        data={data.map((item) => ({
          key: item.id,
          title: item[`name${capitalizeLanguage}`],
          description: `${level[item.level][language]} · ${ExerciseService.getExerciseMusclesText(
            item.muscles,
          )}`,
          img: <img src={ExerciseService.getExerciseImageUrl('1.png')} alt='img' />,
        }))}
        renderItem={(item) => (
          <HCListItem
            {...item}
            actionType='add'
            onClick={() => onClick(item.key as number)}
            onControl={() => onControl(item.key as number)}
          />
        )}
        bleed
      />
    </div>
  );
};

export default ExerciseList;
