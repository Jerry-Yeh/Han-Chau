import List from './List';
import Item from './Item';

export interface ListItemType {
  img: React.ReactNode;
  title: string;
  description?: string;
  value?: string | number;
  actionType?: string;
  key?: string;
  type?: 'warning';
  onClick?: () => void;
  onControl?: () => void;
}

export const HCList = List;
export const HCListItem = Item;
