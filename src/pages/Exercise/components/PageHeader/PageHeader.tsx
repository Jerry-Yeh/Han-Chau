import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const PageHeader: React.FC<Props> = (props: Props) => {
  return <div className='px-4 pt-6 pb-3 bg-primary'>{props.children}</div>;
};

export default PageHeader;
