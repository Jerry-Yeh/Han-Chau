import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~/store/hook';

import PageHeader from '../PageHeader';
import HCSearchBar from '~/components/SearchBar';
import HCPill, { PillItem, PillValue } from '~/components/Pill';
import HCTabBar from '~/components/TabBar';
import HCButton from '~/components/Button';
import HCBottomSheet from '~/components/BottomSheet';
import HCInput from '~/components/Input';
import PlanDetail from '../PlanDetail';
import { HCList, HCListItem, ListItemType } from '~/components/List';
import ExerciseService, { WorkoutPlanData } from '~/services/exercise';
import { WORKOUTPLANFILTER, UPPERLOWERCORE, MODALITY } from '~/enums/exercise';
import { exerciseList, Exercise } from '~/static/exercise/data';
import type { WorkoutPlan } from '~/pages/Exercise/interface';
import { getPlanChallenge } from '~/services/formula';
import HCBadge from '~/components/Badge';

import EmptyFitnessPlan from '~/assets/img/empty-fitnessplan.svg';
import Upper from '~/assets/img/exercise/upper.png';

interface Props {
  children?: React.ReactNode;
}

const Plan: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise' });

  const user = useAppSelector((state) => state.user.user);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const pillList: PillItem[] = [
    { label: t('all-workout-plan'), value: WORKOUTPLANFILTER.ALL },
    { label: t('upper-workout-plan'), value: WORKOUTPLANFILTER.UPPER },
    { label: t('lower-workout-plan'), value: WORKOUTPLANFILTER.LOWER },
    { label: t('core-workout-plan'), value: WORKOUTPLANFILTER.CORE },
  ];
  const [searchText, setSearchText] = useState('');
  const [activePillKey, setActivePillKey] = useState<PillValue>(WORKOUTPLANFILTER.ALL);
  const [planList, setPlanList] = useState<WorkoutPlan[]>([]);
  const [showCreatePlan, setShowCreatePlan] = useState(false);
  const [plan, setPlan] = useState<WorkoutPlan>({
    id: '',
    userId: user.id as string,
    name: '',
    challenge: 1,
    upperLowerCoreList: [],
    modalityList: [],
    exerciseList: [
      {
        id: 1,
        sets: 4,
        reps: 8,
        nameZh: '反向捲腹',
        start: null,
        joint: 1,
        pushPull: 1,
        nameEn: 'Full Reverse Crunch',
        level: 3,
        muscles: [1, 12],
        url: '',
        modality: 1,
        end: null,
        upperLowerCore: 3,
      },
      {
        id: 42,
        sets: 4,
        reps: 8,
        nameZh: '反握滑輪下拉',
        pushPull: 2,
        modality: 2,
        url: 'https://www.youtube.com/watch?v=Bq6V2WLVl5I&ab_channel=%E5%81%A5%E4%BA%BA%E8%93%8B%E4%BC%8A',
        level: 2,
        nameEn: 'Reverse-Grip Lat Pulldown',
        muscles: [2, 16],
        end: 666,
        start: 633,
        upperLowerCore: 1,
        joint: 1,
      },
    ],
  });
  const [showDetailPage, setShowDetailPage] = useState(false);

  useEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.clientHeight);
    if (footerRef.current) setFooterHeight(footerRef.current.clientHeight);
  }, [headerRef, footerRef]);

  useEffect(() => {
    const resetCurrentPlan = () => {
      setPlan({
        id: '',
        userId: user.id as string,
        name: '',
        challenge: 1,
        upperLowerCoreList: [],
        modalityList: [],
        exerciseList: [
          {
            id: 1,
            sets: 4,
            reps: 8,
            nameZh: '反向捲腹',
            start: null,
            joint: 1,
            pushPull: 1,
            nameEn: 'Full Reverse Crunch',
            level: 3,
            muscles: [1, 12],
            url: '',
            modality: 1,
            end: null,
            upperLowerCore: 3,
          },
          {
            id: 42,
            sets: 4,
            reps: 8,
            nameZh: '反握滑輪下拉',
            pushPull: 2,
            modality: 2,
            url: 'https://www.youtube.com/watch?v=Bq6V2WLVl5I&ab_channel=%E5%81%A5%E4%BA%BA%E8%93%8B%E4%BC%8A',
            level: 2,
            nameEn: 'Reverse-Grip Lat Pulldown',
            muscles: [2, 16],
            end: 666,
            start: 633,
            upperLowerCore: 1,
            joint: 1,
          },
        ],
      });
    };

    const transExerciseData = (data: WorkoutPlanData[]): WorkoutPlan[] => {
      // Get exercise raw data.
      const result = data.map((item) => ({
        ...item,
        exerciseList: item.exerciseList.map((exercise) => {
          const exerciseData = exerciseList.find(
            (exerciseData) => exerciseData.id === exercise.id,
          ) as Exercise;

          return { ...exercise, ...exerciseData };
        }),
      }));

      // Calculate other plan data.
      return result.map(({ id, ...rest }) => ({
        id: id as string,
        ...rest,
        challenge: getPlanChallenge(rest.exerciseList),
        upperLowerCoreList: rest.exerciseList.reduce((acc: UPPERLOWERCORE[], cur) => {
          if (!acc.includes(cur.upperLowerCore)) {
            acc.push(cur.upperLowerCore);
          }
          return acc;
        }, []),
        modalityList: rest.exerciseList.reduce((acc: MODALITY[], cur) => {
          if (!acc.includes(cur.modality)) {
            acc.push(cur.modality);
          }
          return acc;
        }, []),
      }));
    };

    const queryWorkoutPlans = async () => {
      if (user.id && !showDetailPage) {
        const data = await ExerciseService.queryWorkoutPlans(user.id);

        setPlanList(transExerciseData(data));
        resetCurrentPlan();
      }
    };

    queryWorkoutPlans();
  }, [user.id, showDetailPage]);

  const closeAddPlanHandler = () => {
    setShowCreatePlan(false);
    setPlan((prev) => ({ ...prev, name: '' }));
  };

  const addPlanHandler = () => {
    if (user.id) {
      const { id, ...rest } = plan;
      ExerciseService.addWorkoutPlan(rest);
    }
    setShowCreatePlan(false);
    setShowDetailPage(true);
  };

  const clickItemHandler = (item: ListItemType) => {
    const clickedPlan = planList.find((plan) => plan.id === item.key);

    if (clickedPlan) {
      setPlan(clickedPlan);
      setShowDetailPage(true);
    }
  };

  return (
    <div className='relative h-screen flex flex-col overflow-hidden'>
      <header ref={headerRef}>
        <PageHeader>
          <HCSearchBar
            value={searchText}
            filter={false}
            placeholder={t('search-exercise')}
            className='mb-3'
            onChange={(e) => setSearchText(e.target.value)}
          />
          <HCPill
            activeKey={activePillKey}
            list={pillList}
            onChange={(nV) => setActivePillKey(nV)}
          />
        </PageHeader>
      </header>

      <main
        className='bg-tertiary'
        style={{ height: `calc(100vh - ${headerHeight}px - ${footerHeight}px)` }}
      >
        {planList.length === 0 ? (
          <div className='h-full flex flex-col items-center justify-center px-4'>
            <img src={EmptyFitnessPlan} alt='empty fitness plan' className='mb-6' />
            <h3 className='text-heading-m mb-6 px-15 text-center'>{t('empty-fitness-plan')}</h3>
            <HCButton color='highlight' block={false} onClick={() => setShowCreatePlan(true)}>
              {t('make-workout-plan-immediately')}
            </HCButton>
          </div>
        ) : (
          <HCList
            data={planList.map((item) => ({
              key: item.id,
              title: item.name,
              description: `${t(`plan.exercises`, {
                number: item.exerciseList.length,
              })}·${ExerciseService.getPlanUpperLowerCoreText(item.upperLowerCoreList)}`,
              img: (
                <div className='relative'>
                  <img src={Upper} alt='default' />
                  <HCBadge
                    type='star'
                    level={item.challenge}
                    className='absolute bottom-0 right-1/2 translate-x-1/2'
                  />
                </div>
              ),
            }))}
            renderItem={(item) => (
              <HCListItem {...item} actionType='next' onClick={() => clickItemHandler(item)} />
            )}
          />
        )}
      </main>
      <footer ref={footerRef} className='fixed left-0 bottom-0 w-full'>
        <HCTabBar />
      </footer>

      {/* Bottom sheet */}
      <HCBottomSheet
        show={showCreatePlan}
        header={t('make-new-workout-plan')}
        keyboard
        onClose={closeAddPlanHandler}
      >
        <HCInput
          value={plan.name}
          placeholder={t('input-workout-plan-name')}
          onChange={(e) => setPlan((prev) => ({ ...prev, name: e.target.value }))}
          className='mb-3'
        />
        <HCButton color='highlight' disabled={!plan.name} onClick={addPlanHandler}>
          {t('make-workout-plan')}
        </HCButton>
      </HCBottomSheet>

      {/* Add or edit plan pag */}
      <PlanDetail
        show={showDetailPage}
        plan={plan}
        setPlan={setPlan}
        onClose={() => setShowDetailPage(false)}
      />
    </div>
  );
};

export default Plan;
