import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@store';

import { TTodo } from './todosSlice';

const selectSelf = (state: RootState) => state;
const selectTodos = createSelector(selectSelf, (state) => state.todos);

export const searchTodos = (todos: TTodo[], query: string) => {
  return [...todos].filter(todo => todo['title'].toLowerCase().includes(query.toLowerCase()));
};

export const filterTodos = (todos: TTodo[], query: string) => {
  const filteredTodos = [...todos].filter(todo => todo['completed'].toString() === query);
  return filteredTodos.length ? filteredTodos : todos;
}

export const getCurrentTodos = (todos: TTodo[], searchQuery: string, completed: string) => {
  if (!searchQuery.length && completed === "all") {
    return todos;
  }

  const searchedTodos = searchTodos(todos, searchQuery);
  const filteredTodos = filterTodos(searchedTodos, completed);
  return filteredTodos;
}

export const fetchingSelector = createSelector(
  selectTodos,
  ({ isLoading, isError }) => ({
    isLoading,
    isError,
  }),
);

export const todosSelector = createSelector(
  selectTodos,
  ({ todos, searchQuery, completed }) => getCurrentTodos(todos, searchQuery, completed),
);
