import React from 'react';

export type User = {
  height?: number;
  weight?: number;
  gender?: string;
  age?: number;
  amount?: number;
  level?: number;
  target?: number;
  name?: string;
  login?: string;
};

export type ContextType = { user: User; setUser: React.Dispatch<React.SetStateAction<User>> };
