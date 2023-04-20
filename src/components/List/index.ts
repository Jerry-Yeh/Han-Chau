import List from './List';
import Item from './Item';

export interface ListItem {
  img: React.ReactNode;
  title: string;
  description?: string;
  value?: string | number;
  type?: string;
  onClick?: () => void;
  onControl?: () => void;
}

export const HCList = List;
export const HCListItem = Item;
