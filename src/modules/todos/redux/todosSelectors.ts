import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@store';

import { TTodo } from './todosSlice';

const selectSelf = (state: RootState) => state;
const selectTodos = createSelector(selectSelf, (state) => state.todos);

export const fetchingSelector = createSelector(
  selectTodos,
  ({ isLoading, isError }) => ({
    isLoading,
    isError,
  }),
);

export const todosSelector = createSelector(
  selectTodos,
  ({ todos }) => todos,
);
