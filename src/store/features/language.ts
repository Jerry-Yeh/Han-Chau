import { createSlice } from '@reduxjs/toolkit';

import { store } from '~/store';
import { capitalize } from '~/services/utiles';

type Language = 'en' | 'zh';
type CapitalizeLanguage = 'En' | 'Zh';

export interface LanguageState {
  language: Language;
  capitalizeLanguage: CapitalizeLanguage;
}

const initialState: LanguageState = {
  language: navigator.language.slice(0, 2) as Language,
  capitalizeLanguage: capitalize(navigator.language.slice(0, 2)) as CapitalizeLanguage,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {},
});

// export const {} = languageSlice.actions;

export const getLanguage = (state: ReturnType<typeof store.getState>): Language => {
  return state.language.language;
};

export default languageSlice.reducer;
