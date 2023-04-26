import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~/store/hook';

import HCHeader, { HCHeaderIconButton } from '~/components/Header';
import HCSearchBar, { SearchEventType } from '~/components/SearchBar';
import { HCList, HCListItem, ListItemType } from '~/components/List';
import { exerciseList, Exercise } from '~/static/exercise/data';
import { level } from '~/static/exercise/dataType';
import ExerciseService from '~/services/exercise';

import XMark from '~/assets/img/heroicons/mini/x-mark';

interface Props {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
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

  useEffect(() => {
    setResult(
      exerciseList.filter((item) => item[`name${capitalizeLanguage}`].includes(searchText)),
    );
  }, [searchText, capitalizeLanguage]);

  return (
    <div
      className={`w-screen h-screen z-20 absolute top-0 flex flex-col
      ${props.show ? 'block' : 'hidden'}`}
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
          <HCSearchBar value={searchText} onChange={searchTextChangeHandler} />
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
            description: `${level[item.level][language]}·${ExerciseService.getExerciseMusclesText(
              item.muscles,
            )}`,
            img: (
              <img
                src={`https://storage.cloud.google.com/${
                  import.meta.env.VITE_STORAGE_BUCKET
                }/exercise/1.png`}
                alt='img'
              />
            ),
          }))}
          renderItem={(item) => <HCListItem {...item} actionType='add' />}
          bleed
        />
      </div>
    </div>
  );
};

export default AddExercise;
