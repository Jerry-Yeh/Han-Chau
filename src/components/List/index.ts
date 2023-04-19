import List from './List';

export interface ListItem {
  img: React.ReactNode;
  title: string;
  description?: string;
  value?: string | number;
  type?: string;
}

export default List;
