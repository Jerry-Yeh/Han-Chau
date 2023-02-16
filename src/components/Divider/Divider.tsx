import React from 'react';
import { Divider } from 'antd';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const HCDivider: React.FC<Props> = (props: Props) => {
  return <Divider className={props.className}>{props.children}</Divider>;
};

export default HCDivider;
