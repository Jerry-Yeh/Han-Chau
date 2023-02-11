import React from 'react';

interface Props {
  children?: React.ReactNode;
  heading: string;
  subheading: string;
}

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <div className='pt-12 px-4'>
      <h2 className='text-heading-m mb-2'>{props.heading}</h2>
      <h3 className='text-body-s text-tertiary mb-6'>{props.subheading}</h3>
      {props.children}
    </div>
  );
};

export default Layout;
