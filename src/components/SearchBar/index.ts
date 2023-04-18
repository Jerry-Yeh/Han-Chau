import { ChangeEvent } from 'react';

import SearchBar from './SearchBar';

export interface SearchBarProps {
  children?: React.ReactNode;
  className?: string;
  value: string;
  placeholder?: string;
  prefixType?: 'search' | 'previous';
  filter?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default SearchBar;
