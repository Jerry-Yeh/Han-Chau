import React from 'react';

import { CheckboxGroupContextProps } from './interface';

const CheckboxGroupContext = React.createContext<CheckboxGroupContextProps | null>(null);

export const CheckboxGroupContextProvider = CheckboxGroupContext.Provider;

export default CheckboxGroupContext;
