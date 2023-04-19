import React from 'react';

import type { Nullable } from '~/typings/utils';

export type User = {
  id?: string;
  height: Nullable<number>;
  weight: Nullable<number>;
  gender: Nullable<number>;
  birth?: Nullable<number>;
  amount: Nullable<number>;
  level: Nullable<number>;
  targetWeight?: number;
  name: string;
  login?: string;
};

export type ContextType = { user: User; setUser: React.Dispatch<React.SetStateAction<User>> };
