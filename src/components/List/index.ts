import List from './List';
import Item from './Item';

export interface ListItemType {
  img: React.ReactNode;
  title: string;
  description?: string;
  value?: string | number;
  type?: string;
  key?: string;
  onClick?: () => void;
  onControl?: () => void;
}

export const HCList = List;
export const HCListItem = Item;
