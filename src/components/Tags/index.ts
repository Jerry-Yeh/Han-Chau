import Tags from './Tags';

export type TagType =
  | string
  | {
      text: string;
    };

export interface TagsProps {
  children?: React.ReactNode;
  className?: string;
  data: TagType[];
}

export default Tags;
