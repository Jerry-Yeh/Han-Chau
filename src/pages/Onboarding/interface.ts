import React from 'react';

export type User = {
  height: string;
  weight: string;
  gender: string;
};

export type ContextType = { user: User; setUser: React.Dispatch<React.SetStateAction<User>> };
