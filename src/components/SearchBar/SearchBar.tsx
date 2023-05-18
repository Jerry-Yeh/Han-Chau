import React, { useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import MagnifyingGlass from '~/assets/img/heroicons/mini/magnifying-glass';
import ArrowLeft from '~/assets/img/heroicons/mini/arrow-left';
import XCircle from '~/assets/img/heroicons/mini/x-circle';
import AdjustmentsHorizontal from '~/assets/img/heroicons/mini/adjustments-horizontal';
import HCBadge from '~/components/Badge';

import type { SearchBarProps } from '.';

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  placeholder,
  className = '',
  filter,
  filtering,
  onFilter,
  onChange,
  onPrefix,
  onFocus,
}: SearchBarProps) => {
  const { t } = useTranslation();

  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
    setFocus(true);
  };

  const hanleBlur = () => {
    setFocus(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <div className={`${className} relative rounded-lg bg-secondary overflow-hidden`}>
      <label className='flex'>
        <button
          className='cursor-pointer icon-secondary pointer-events-none py-3.5 px-4'
          onClick={onPrefix}
        >
          <div>{focus ? <ArrowLeft /> : <MagnifyingGlass />}</div>
        </button>
        <input
          id='search-bar'
          type='search'
          value={value}
          placeholder={placeholder ? placeholder : t('search')}
          className={`
          search-cancel:appearance-none search-cancel:bg-[url('~/assets/img/heroicons/mini/x-circle.svg')] search-cancel:w-5 search-cancel:h-5 search-cancel:icon-tertiary
          grow h-12 bg-secondary outline-0 placeholder:text-placeholder text-body-s
          ${focus && value ? 'pr-3' : 'pr-4'}`}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={hanleBlur}
        />
      </label>

      {focus && !value && (
        <div className='w-13 h-12 absolute top-0 right-0 py-3.5 px-4'>
          <XCircle className='icon-disabled' />
        </div>
      )}
      {!focus && filter && (
        <button
          className='absolute top-0 right-0 w-13 h-12 py-3.5 px-4 cursor-pointer'
          onClick={onFilter}
        >
          <HCBadge type='dot' show={filtering} className=''>
            <AdjustmentsHorizontal className='icon-secondary' />
          </HCBadge>
        </button>
      )}
      {filtering}
    </div>
  );
};

SearchBar.defaultProps = {
  prefixType: 'search',
  filter: true,
  filtering: false,
};

export default SearchBar;
