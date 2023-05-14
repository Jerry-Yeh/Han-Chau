import React from 'react';

import type { LayoutProps } from '.';

const Layout: React.FC<LayoutProps> = ({ children, className, style }: LayoutProps) => {
  return (
    <main className={`${className} min-h-screen overflow-y-scroll`} style={style}>
      {children}
    </main>
  );
};

export default Layout;
