import React, { useEffect, useState, ReactNode, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '~/store/hook';

import HCHeader, { HCHeaderIconButton } from '~/components/Header';
import HCSearchBar, { SearchEventType } from '~/components/SearchBar';
import { HCList, HCListItem, ListItemType } from '~/components/List';
import { exerciseList, Exercise } from '~/static/exercise/data';
import ExerciseService from '~/services/exercise';
import HCBottomSheet from '~/components/BottomSheet';
import { LEVEL } from '~/enums/user';
import { MODALITY, MUSCLEGROUP, MUSCLES } from '~/enums/exercise';
import type { Nullable } from '~/typings/utils';
import { HCCheckboxGroup } from '~/components/Checkbox';
import { HCRadioGroup } from '~/components/Radio';
import { muscles, modality, level } from '~/static/exercise/dataType';
import ExerciseDetail from '../ExerciseDetail';
import JoinPlan, { TempSetsAndReps } from '../JoinPlan';

import XMark from '~/assets/img/heroicons/mini/x-mark';
import Abdominals from '~/assets/img/muscle-group/abdominals.png';
import Back from '~/assets/img/muscle-group/back.png';
import Arms from '~/assets/img/muscle-group/arms.png';
import Chest from '~/assets/img/muscle-group/chest.png';
import Shoulders from '~/assets/img/muscle-group/shoulders.png';
import Legs from '~/assets/img/muscle-group/legs.png';
import Calves from '~/assets/img/muscle-group/calves.png';
import HCButton from '~/components/Button';

interface Props {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

interface Filter {
  muscleGroup: number[];
  modalities: number[];
  level: Nullable<LEVEL>;
}

const AddExercise: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.add' });

  const capitalizeLanguage = useAppSelector((state) => state.language.capitalizeLanguage);
  const language = useAppSelector((state) => state.language.language);

  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState<Exercise[]>([]);

  const searchTextChangeHandler = (e: SearchEventType) => {
    setSearchText(e.target.value);
  };

  /** Exercises filter */
  const [isShowFilterExercises, setShowFilterExercises] = useState(false);
  const [filter, setFilter] = useState<Filter>({
    muscleGroup: [],
    modalities: [],
    level: null,
  });
  const [tempFilter, setTempFilter] = useState<Filter>({
    muscleGroup: [],
    modalities: [],
    level: null,
  });
  const [muscleGroupOptions] = useState([
    {
      label: muscles[MUSCLEGROUP.ABDOMINALS][language],
      value: MUSCLEGROUP.ABDOMINALS,
      image: <img src={Abdominals} alt='Abdominals' />,
    },
    {
      label: muscles[MUSCLEGROUP.BACK][language],
      value: MUSCLEGROUP.BACK,
      image: <img src={Back} alt='Back' />,
    },
    {
      label: muscles[MUSCLEGROUP.ARMS][language],
      value: MUSCLEGROUP.ARMS,
      image: <img src={Arms} alt='Arms' />,
    },
    {
      label: muscles[MUSCLEGROUP.CHEST][language],
      value: MUSCLEGROUP.CHEST,
      image: <img src={Chest} alt='Chest' />,
    },
    {
      label: muscles[MUSCLEGROUP.SHOULDERS][language],
      value: MUSCLEGROUP.SHOULDERS,
      image: <img src={Shoulders} alt='Shoulders' />,
    },
    {
      label: muscles[MUSCLEGROUP.LEGS][language],
      value: MUSCLEGROUP.LEGS,
      image: <img src={Legs} alt='Legs' />,
    },
    {
      label: muscles[MUSCLEGROUP.CLAVES][language],
      value: MUSCLEGROUP.CLAVES,
      image: <img src={Calves} alt='Calves' />,
    },
  ]);
  const [modalityOptions] = useState([
    { label: modality[MODALITY.FREEWEIGHT][language], value: MODALITY.FREEWEIGHT },
    { label: modality[MODALITY.CABLE][language], value: MODALITY.CABLE },
    { label: modality[MODALITY.MACHINE][language], value: MODALITY.MACHINE },
  ]);
  const [levelOptions] = useState([
    { label: level[LEVEL.BEGINNER][language], value: LEVEL.BEGINNER },
    { label: level[LEVEL.INTERMEDIATE][language], value: LEVEL.INTERMEDIATE },
    { label: level[LEVEL.ADVANCED][language], value: LEVEL.ADVANCED },
  ]);
  const [renderFilter, setRenderFilter] = useState<{ title: string; content: ReactNode }[]>([]);

  useEffect(() => {
    setRenderFilter(() => [
      {
        title: t('filter.muscle-group-title'),
        content: (
          <HCCheckboxGroup
            value={tempFilter.muscleGroup}
            options={muscleGroupOptions}
            image
            onChange={(list) =>
              setTempFilter((prev) => ({ ...prev, muscleGroup: list as number[] }))
            }
          />
        ),
      },
      {
        title: t('filter.modality-title'),
        content: (
          <HCCheckboxGroup
            value={tempFilter.modalities}
            options={modalityOptions}
            onChange={(list) =>
              setTempFilter((prev) => ({ ...prev, modalities: list as number[] }))
            }
          />
        ),
      },
      {
        title: t('filter.level-title'),
        content: (
          <HCRadioGroup
            value={tempFilter.level}
            options={levelOptions}
            onChange={(value) => setTempFilter((prev) => ({ ...prev, level: value as number }))}
          />
        ),
      },
    ]);
  }, [tempFilter, muscleGroupOptions, modalityOptions, levelOptions, t]);

  const handlerShowFilter = () => {
    setShowFilterExercises(true);
  };

  const handleCloseFilter = () => {
    setTempFilter({ muscleGroup: [], modalities: [], level: null });
    setShowFilterExercises(false);
  };

  const handlerCancelFilter = () => {
    handleCloseFilter();
    setFilter({ muscleGroup: [], modalities: [], level: null });
  };

  const handlerConfirmFilter = () => {
    setFilter(tempFilter);
    setShowFilterExercises(false);
  };

  useEffect(() => {
    const isCorrectName = (name: string): boolean => name.includes(searchText);
    const isCorrectMuscle = (muscles: Array<MUSCLES | MUSCLEGROUP>): boolean =>
      filter.muscleGroup.length === 0 ||
      muscles.some((muscle) => filter.muscleGroup.includes(muscle));
    const isCorrectModality = (modality: MODALITY): boolean =>
      filter.modalities.length === 0 || filter.muscleGroup.includes(modality);
    const isCorrectLevel = (level: LEVEL): boolean => !filter.level || filter.level === level;

    const searchResult = exerciseList.filter(
      (item) =>
        isCorrectName(item[`name${capitalizeLanguage}`]) &&
        isCorrectMuscle(item.muscles) &&
        isCorrectModality(item.modality) &&
        isCorrectLevel(item.level),
    );

    setResult(searchResult);
  }, [searchText, capitalizeLanguage, filter]);

  /** Exercise details */
  const [isShowExerciseDetail, setShowExerciseDetail] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise>();
  const [isShowJoinPlan, setShowJoinPlan] = useState(false);

  const handleShowExerciseDetail = (key: ListItemType['key']) => {
    const exercise = result.find((item) => item.id === key);

    if (exercise) {
      setSelectedExercise(exercise);
      setShowExerciseDetail(true);
    }
  };

  const handleCloseExerciseDetail = () => {
    setShowExerciseDetail(false);
  };

  const handleConfirmExerciseDetail = () => {
    setShowExerciseDetail(false);
    setShowJoinPlan(true);
  };

  /** Join plan */
  const handleCloseJoinPlan = () => {
    setShowJoinPlan(false);
  };

  const handleClickJoinPlanPrevious = () => {
    setShowJoinPlan(false);
    setShowExerciseDetail(true);
  };

  return (
    <div
      className={`
        w-screen h-screen z-20 absolute transition-bottom duration-400 flex flex-col
        ${props.show ? 'bottom-0' : '-bottom-full'}`}
    >
      <HCHeader
        title={t('header')}
        suffix={
          <HCHeaderIconButton onClick={props.onClose}>
            <XMark />
          </HCHeaderIconButton>
        }
        className='border-b border-secondary'
      >
        <div className='px-4 pt-3 pb-4'>
          <HCSearchBar
            value={searchText}
            filtering={
              filter.muscleGroup.length > 0 || filter.modalities.length > 0 || !!filter.level
            }
            onChange={searchTextChangeHandler}
            onFilter={handlerShowFilter}
          />
        </div>
      </HCHeader>

      <div className='bg-primary grow overflow-y-scroll'>
        <h3 className='text-heading-s text-primary px-4 pt-4 pb-2'>
          {t('list-title', { number: result.length })}
        </h3>
        <HCList
          data={result.map((item) => ({
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
              onClick={() => handleShowExerciseDetail(item.key)}
            />
          )}
          bleed
        />
      </div>

      {/* Filter exercises */}
      <HCBottomSheet
        show={isShowFilterExercises}
        title={t('filter.title')}
        description={`
          ${t('filter.muscle-group')}*${tempFilter.muscleGroup.length}、
          ${t('filter.modality')}*${tempFilter.modalities.length}
          ${tempFilter.level ? `、${level[tempFilter.level][language]}` : ''}`}
        handle
        footer={
          <div className='flex gap-x-2'>
            <HCButton color='secondary' onClick={handlerCancelFilter}>
              {t('filter.cancel')}
            </HCButton>
            <HCButton color='highlight' onClick={handlerConfirmFilter}>
              {t('filter.confirm')}
            </HCButton>
          </div>
        }
        onClose={handleCloseFilter}
      >
        <div className='bg-tertiary flex flex-col gap-y-2'>
          {renderFilter.map((item, index) => (
            <div className='bg-primary px-4 pt-4 pb-6' key={index}>
              <h3 className='text-heading-s text-primary mb-4'>{item.title}</h3>
              {item.content}
            </div>
          ))}
        </div>
      </HCBottomSheet>

      <ExerciseDetail
        show={isShowExerciseDetail}
        exercise={selectedExercise}
        onClose={handleCloseExerciseDetail}
        onConfirm={handleConfirmExerciseDetail}
      />

      {selectedExercise && (
        <JoinPlan
          show={isShowJoinPlan}
          exercise={selectedExercise}
          onClose={handleCloseJoinPlan}
          onPrevious={handleClickJoinPlanPrevious}
        />
      )}
    </div>
  );
};

export default AddExercise;
