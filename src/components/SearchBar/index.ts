import { ChangeEvent } from 'react';

import SearchBar from './SearchBar';

export type SearchEventType = ChangeEvent<HTMLInputElement>;

export interface HandleSearchBar {
  focus: () => void;
}

export type PrefixType = 'search' | 'previous';

export interface SearchBarProps {
  children?: React.ReactNode;
  className?: string;
  value: string;
  placeholder?: string;
  filter?: boolean;
  filtering?: boolean;
  doneType?: PrefixType;
  onChange?: (e: SearchEventType) => void;
  onFilter?: () => void;
  onPrefix?: () => void;
  onFocus?: () => void;
}

export default SearchBar;
