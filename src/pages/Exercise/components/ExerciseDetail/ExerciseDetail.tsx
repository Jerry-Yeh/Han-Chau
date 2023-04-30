import React, { useEffect, useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~/store/hook';

import HCBottomSheet from '~/components/BottomSheet';
import { HCList, HCListItem } from '~/components/List';
import { Exercise } from '~/static/exercise/data';
import ExerciseService from '~/services/exercise';
import { level, modality, upperLowerCore, muscles } from '~/static/exercise/dataType';
import { MUSCLEGROUP } from '~/enums/exercise';
import HCPlayer from '~/components/Player/Player';
import type { WorkoutPlan } from '~/pages/Exercise/interface';
import PlanList from '~/pages/Exercise/components/PlanList';
import HCButton from '~/components/Button';

interface Props {
  children?: React.ReactNode;
  show: boolean;
  exercise?: Exercise;
  onClose: () => void;
  onConfirm: () => void;
}

const ExerciseDetail: React.FC<Props> = ({ show, exercise, onClose, onConfirm }: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.detail' });
  const language = useAppSelector((state) => state.language.language);
  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);

  const muscleGroupImages = useAppSelector((state) => state.exercise.muscleGroupImages);
  const planList = useAppSelector((state) => state.exercise.planList);
  const [joinedPlanList, setJoinedPlanList] = useState<WorkoutPlan[]>([]);

  const getMusclesDescription = () => {
    return exercise?.muscles
      .filter((item) => !MUSCLEGROUP[item])
      .map((item) => muscles[item][language])
      .join('、');
  };

  useEffect(() => {
    if (exercise) {
      setJoinedPlanList(
        planList.filter((plan) => plan.exerciseList.some((item) => item.id === exercise.id)),
      );
    }
  }, [planList, exercise]);

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <HCBottomSheet show={show} header={t('title')} handle onClose={onClose}>
      {exercise && (
        <Fragment>
          <div className='bg-tertiary flex flex-col gap-y-2'>
            <div>
              <div className='w-full aspect-video text-center overflow-hidden flex items-center'>
                <img
                  className='w-full'
                  src={ExerciseService.getExerciseImageUrl('1.png')}
                  alt='img'
                />
              </div>
              <div className='p-4 bg-primary'>
                <h3 className='text-heading-m mb-2'>{exercise[`name${capitalizeLanguage}`]}</h3>
                <p className='text-tertiary mb-2'>
                  {`${level[exercise.level][language]} ·
                ${modality[exercise.modality][language]} ·
                ${upperLowerCore[exercise.upperLowerCore][language]}`}
                </p>
                <p className='text-body-bold-xs text-secondary'>
                  {t('added-plan', { number: joinedPlanList.length })}
                </p>
              </div>
            </div>
            <div className='bg-primary'>
              <h3 className='px-4 pt-4 text-heading-xs'>{t('training-muscle-group')}</h3>
              <HCList
                data={[
                  {
                    title: muscles[exercise.muscles[0]][language],
                    description: getMusclesDescription(),
                    img: (
                      <img
                        className='w-full'
                        src={muscleGroupImages[exercise.muscles[0] as MUSCLEGROUP]}
                        alt='muscle'
                      />
                    ),
                  },
                ]}
                renderItem={(item) => <HCListItem {...item} imgClass='shadow-inner' />}
                bleed
              />
            </div>
            <div className='bg-primary p-4'>
              <h3 className='text-heading-xs mb-4'>{t('tutorial')}</h3>
              {exercise.url && (
                <HCPlayer url={exercise.url} start={exercise.start} end={exercise.end} />
              )}
            </div>
            <div className='bg-primary'>
              <h3 className='text-heading-xs p-4 mb-4'>{t('add-to-plan')}</h3>
              <PlanList data={joinedPlanList} />
            </div>
          </div>
          <div className='p-4 border-t border-secondary'>
            <HCButton color='highlight' onClick={handleConfirm}>
              {t('confirm')}
            </HCButton>
          </div>
        </Fragment>
      )}
    </HCBottomSheet>
  );
};

export default ExerciseDetail;
