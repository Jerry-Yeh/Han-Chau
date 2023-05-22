import { useInterpret } from '@xstate/react';
import { createContext, ReactNode } from 'react';
import { ActorRefFrom } from 'xstate';

import { machine } from './machine';

interface ProviderType {
  children: ReactNode;
}

interface GlobalStateContextType {
  service: ActorRefFrom<typeof machine>;
}

export const GlobalStateContext = createContext({} as GlobalStateContextType);

export const GlobalStateProvider = ({ children }: ProviderType) => {
  const service = useInterpret(machine);

  return <GlobalStateContext.Provider value={{ service }}>{children}</GlobalStateContext.Provider>;
};
