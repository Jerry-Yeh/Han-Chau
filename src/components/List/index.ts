import List from './List';
import Item from './Item';

export type ListItemActionType = 'add' | 'next' | 'info';

export interface ListItemType {
  img: React.ReactNode;
  title: string;
  description?: string;
  value?: string | number;
  actionType?: ListItemActionType;
  key?: string | number;
  type?: 'warning';
  imgClass?: string;
  onClick?: () => void;
  onControl?: () => void;
}

export const HCList = List;
export const HCListItem = Item;
