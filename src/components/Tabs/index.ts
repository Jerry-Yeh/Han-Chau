import Tabs from './Tabs';

export type ActiveKey = string | number;

export interface TabsItem {
  label: string;
  sublabel?: string;
  value: ActiveKey;
}

export interface TabProps {
  data: TabsItem;
  actived: boolean;
  onClick: (value: ActiveKey) => void;
}

export interface TabsProps {
  children?: React.ReactNode;
  items: TabsItem[];
  activeKey: ActiveKey;
  onChange: (value: ActiveKey) => void;
}

export default Tabs;
