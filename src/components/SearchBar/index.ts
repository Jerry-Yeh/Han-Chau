import { ChangeEvent } from 'react';

import SearchBar from './SearchBar';

export type SearchEventType = ChangeEvent<HTMLInputElement>;

export interface SearchBarProps {
  children?: React.ReactNode;
  className?: string;
  value: string;
  placeholder?: string;
  prefixType?: 'search' | 'previous';
  filter?: boolean;
  filtering?: boolean;
  onChange?: (e: SearchEventType) => void;
  onFilter?: () => void;
}

export default SearchBar;
