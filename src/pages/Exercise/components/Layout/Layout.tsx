import React from 'react';

import type { LayoutProps } from '.';

const Layout: React.FC<LayoutProps> = ({
  children,
  className = '',
  header,
  content,
  footer,
  style,
}: LayoutProps) => {
  return (
    <div className='relative flex flex-col'>
      {header}
      <main className={`${className} overflow-y-scroll`} style={style}>
        {content}
      </main>
      {footer}
      {children}
    </div>
  );
};

export default Layout;
