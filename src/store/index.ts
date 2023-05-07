import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import languageReducer from './features/language';
import userReducer from './features/user';
import exerciseReducer from './features/exercise';
import loadingReducer from './features/loading';

const rootPersistConfig = { key: 'root', storage };
const userPersistConfig = { key: 'user', storage };

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  language: languageReducer,
  exercise: exerciseReducer,
  loading: loadingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default persistReducer(rootPersistConfig, rootReducer);
