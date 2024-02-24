import React, { Fragment } from 'react';

import { ListItemType, HCListItem } from '.';

interface Props {
  children?: React.ReactNode;
  className?: string;
  data: ListItemType[];
  bleed?: boolean;
  renderItem?: (item: ListItemType, index: number) => React.ReactNode;
}

const List: React.FC<Props> = (props: Props) => {
  const renderInnerItem = (item: ListItemType, index: number): React.ReactNode => {
    let node: React.ReactNode;

    if (props.renderItem) {
      node = props.renderItem(item, index);
    } else if (props.children) {
      node = props.children;
    } else {
      node = <HCListItem {...item} />;
    }

    return <Fragment key={item.key ? item.key : `list-item-${index}`}>{node}</Fragment>;
  };

  return (
    <div
      className={`flex flex-col ${props.className} ${
        !props.bleed && props.data.length > 0 ? 'p-4 gap-y-4' : ''
      }`}
    >
      {props.data.map(renderInnerItem)}
      {props.children}
    </div>
  );
};

List.defaultProps = {
  bleed: false,
};

export default List;
