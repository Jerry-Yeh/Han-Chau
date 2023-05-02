import React, { useEffect, useState, Fragment, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~/store/hook';
import { BookmarkIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import { BookmarkIcon as OutlinedBookmarkIcon } from '@heroicons/react/24/outline';

import HCBottomSheet from '~/components/BottomSheet';
import { HCList, HCListItem } from '~/components/List';
import { Exercise } from '~/static/exercise/data';
import ExerciseService from '~/services/exercise';
import { level, modality, upperLowerCore, muscles } from '~/static/exercise/dataType';
import { MUSCLEGROUP } from '~/enums/exercise';
import HCPlayer, { HandlePlayer } from '~/components/Player';
import type { WorkoutPlan } from '~/pages/Exercise/interface';
import PlanList from '~/pages/Exercise/components/PlanList';
import HCButton from '~/components/Button';
import HCTags from '~/components/Tags';
import HCLogo from '~/components/Logo';

import { ReactComponent as ChevronDown } from '~/assets/img/heroicons/mini/chevron-down.svg';

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
  const playerRef = useRef<HandlePlayer>(null);

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

  useEffect(() => {
    playerRef.current?.reRender();
  }, [show]);

  const handleClickScrollToPlayer = () => {
    const element = document.getElementById('player');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HCBottomSheet
      show={show}
      title={t('title')}
      handle
      footer={
        <HCButton color='highlight' onClick={handleConfirm}>
          {t('confirm')}
        </HCButton>
      }
      onClose={onClose}
    >
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
                <HCTags
                  data={[
                    level[exercise.level][language],
                    modality[exercise.modality][language],
                    upperLowerCore[exercise.upperLowerCore][language],
                  ]}
                  className='mb-6'
                />
                <div className='text-body-s text-tertiary'>
                  <p className='flex items-center mb-4'>
                    {joinedPlanList.length > 0 ? (
                      <Fragment>
                        <BookmarkIcon className='w-5 h-5 icon-tertiary mr-2' />
                        <span>{t('added-plan.added', { number: joinedPlanList.length })}</span>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <OutlinedBookmarkIcon className='w-5 h-5 icon-tertiary mr-2' />
                        <span>{t('added-plan.without', { number: 0 })}</span>
                      </Fragment>
                    )}
                  </p>
                  <button className='flex items-center' onClick={handleClickScrollToPlayer}>
                    <PlayCircleIcon className='w-5 h-5 icon-tertiary mr-2' />
                    {exercise.url ? (
                      <Fragment>
                        <span className='mr-1'>{t('to-tutorial')}</span>
                        <ChevronDown />
                      </Fragment>
                    ) : (
                      t('without-tutorial')
                    )}
                  </button>
                </div>
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
                renderItem={(item) => <HCListItem {...item} imgClass='shadow-media-inner' />}
                bleed
              />
            </div>
            {exercise.url && (
              <div id='player' className='bg-primary p-4'>
                <h3 className='text-heading-xs mb-4'>{t('tutorial')}</h3>
                {exercise.url && (
                  <HCPlayer
                    ref={playerRef}
                    url={exercise.url}
                    start={exercise.start}
                    end={exercise.end}
                  />
                )}
              </div>
            )}
            <div className='bg-primary'>
              <h3 className='text-heading-xs p-4'>{t('added-plan.title')}</h3>
              {joinedPlanList.length > 0 ? (
                <PlanList data={joinedPlanList} />
              ) : (
                <div className='p-4'>
                  <div className='flex flex-col items-center p-6'>
                    <HCLogo size='s' className='mb-4' />
                    <h4 className='text-body-bold-m mb-2'>{t('added-plan.subtitle')}</h4>
                    <p className='text-body-s text-placeholder'>{t('added-plan.description')}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </HCBottomSheet>
  );
};

export default ExerciseDetail;
