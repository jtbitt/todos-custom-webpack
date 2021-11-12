import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import { createRootReducer } from './reducers';
import { rootSaga } from './sagas';

export const history = createBrowserHistory();

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
