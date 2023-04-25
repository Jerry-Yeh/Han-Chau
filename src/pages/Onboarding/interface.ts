import React from 'react';

import { GENDER, AMOUNT, LEVEL } from '~/enums/user';
import type { Nullable } from '~/typings/utils';

export type User = {
  id?: string;
  height: Nullable<number>;
  weight: Nullable<number>;
  gender: Nullable<GENDER>;
  birth?: Nullable<number>;
  amount: Nullable<AMOUNT>;
  level: Nullable<LEVEL>;
  targetWeight?: number;
  name: string;
  login?: string;
};

export type ContextType = { user: User; setUser: React.Dispatch<React.SetStateAction<User>> };
