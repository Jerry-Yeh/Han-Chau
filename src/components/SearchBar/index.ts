import { ChangeEvent } from 'react';

import SearchBar from './SearchBar';

export interface SearchBarProps {
  children?: React.ReactNode;
  value: string;
  placeholder?: string;
  prefixType?: 'search' | 'previous';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default SearchBar;
