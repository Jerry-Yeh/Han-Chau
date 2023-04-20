import React, { Fragment } from 'react';

import type { ListItem } from '.';

interface Props {
  children?: React.ReactNode;
  className?: string;
  data: ListItem[];
  bleed?: boolean;
  renderItem: (item: ListItem, index: number) => React.ReactNode;
}

const List: React.FC<Props> = (props: Props) => {
  const renderInnerItem = (item: ListItem, index: number) => {
    return <Fragment key={`list-item-${index}`}>{props.renderItem(item, index)}</Fragment>;
  };

  return (
    <div className={`flex flex-col ${props.className} ${!props.bleed && 'p-4 gap-y-4'}`}>
      {props.data.map(renderInnerItem)}
    </div>
  );
};

List.defaultProps = {
  bleed: true,
};

export default List;
