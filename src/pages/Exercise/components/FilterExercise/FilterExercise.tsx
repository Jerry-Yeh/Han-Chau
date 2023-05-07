import React, { useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~/store/hook';

import HCBottomSheet from '~/components/BottomSheet';
import HCButton from '~/components/Button';
import { HCCheckboxGroup } from '~/components/Checkbox';
import { HCRadioGroup } from '~/components/Radio';
import { muscles, modality, level } from '~/static/exercise/dataType';
import { MODALITY, MUSCLEGROUP, LEVEL } from '~/enums/exercise';

import type { FilterExerciseProps, FilterType } from '.';

import Abdominals from '~/assets/img/muscle-group/abdominals.png';
import Back from '~/assets/img/muscle-group/back.png';
import Arms from '~/assets/img/muscle-group/arms.png';
import Chest from '~/assets/img/muscle-group/chest.png';
import Shoulders from '~/assets/img/muscle-group/shoulders.png';
import Legs from '~/assets/img/muscle-group/legs.png';
import Calves from '~/assets/img/muscle-group/calves.png';

const FilterExercise: React.FC<FilterExerciseProps> = ({
  show,
  onClose,
  onClear,
  onConfirm,
}: FilterExerciseProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.add' });

  const language = useAppSelector((state) => state.language.language);

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
  const [tempFilter, setTempFilter] = useState<FilterType>({
    muscleGroup: [],
    modalities: [],
    level: null,
  });
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

  const handleClear = () => {
    setTempFilter({ muscleGroup: [], modalities: [], level: null });
    onClear();
  };

  const handleConfirm = () => {
    onConfirm(tempFilter);
  };

  const handleClose = () => {
    setTempFilter({ muscleGroup: [], modalities: [], level: null });
    onClose();
  };

  return (
    <HCBottomSheet
      show={show}
      title={t('filter.title')}
      description={`
        ${t('filter.muscle-group')}*${tempFilter.muscleGroup.length}、
        ${t('filter.modality')}*${tempFilter.modalities.length}
        ${tempFilter.level ? `、${level[tempFilter.level][language]}` : ''}`}
      handle
      footer={
        <div className='flex gap-x-2'>
          <HCButton color='secondary' onClick={handleClear}>
            {t('filter.cancel')}
          </HCButton>
          <HCButton color='highlight' onClick={handleConfirm}>
            {t('filter.confirm')}
          </HCButton>
        </div>
      }
      onClose={handleClose}
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
  );
};

export default FilterExercise;
