import React from 'react';

import type { LayoutProps } from '.';

const Layout: React.FC<LayoutProps> = ({
  children,
  className = '',
  header,
  footer,
  style,
  contentClassName = '',
}: LayoutProps) => {
  return (
    <div className={`${className ? className : 'relative'} flex flex-col h-screen`}>
      {header}
      <main className={`${contentClassName} overflow-y-scroll grow`} style={style}>
        {children}
      </main>
      {footer}
    </div>
  );
};

export default Layout;
