import React from 'react';

import { AMOUNT } from '~/enums/user';

export type User = {
  id?: string;
  height?: number;
  weight?: number;
  gender?: number;
  birth?: number;
  amount?: AMOUNT;
  level?: number;
  target?: number;
  name?: string;
  login?: string;
};

export type ContextType = { user: User; setUser: React.Dispatch<React.SetStateAction<User>> };
