import List from './List';
import Item from './Item';

export type ListItemCategoryType = 'warning';
export type ListItemActionType = 'default' | 'add' | 'next' | 'info';

export interface ListItemType {
  children?: React.ReactNode;
  id?: string | number;
  img: React.ReactNode;
  title: string;
  description?: string;
  value?: string | number;
  actionType?: ListItemActionType;
  key?: string | number;
  category?: ListItemCategoryType;
  imgClass?: string;
  onClick?: () => void;
  onControl?: () => void;
}

export const HCList = List;
export const HCListItem = Item;
