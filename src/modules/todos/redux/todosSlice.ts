import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface ITodosState {
  todos: TTodo[];
  searchQuery: string;
  completed: string;
  pageSize: number;
  currentPage: number;
  isError: boolean;
  isLoading: boolean;
}

export const initialState: ITodosState = {
  todos: [],
  searchQuery: "",
  completed: "",
  pageSize: 20,
  currentPage: 1,
  isLoading: true,
  isError: false,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    updateSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    updateCompletedFilter: (state, action: PayloadAction<string>) => {
      state.completed = action.payload;
    },
    fetch: (state) => {
      (state.todos = []),
      (state.isLoading = true),
      (state.isError = false);
    },
    fetchSuccess: (state, action: PayloadAction<TTodo[]>) => {
      (state.todos = action.payload), (state.isLoading = false);
    },
    fetchFailure: (state) => {
      (state.isLoading = false), (state.isError = true);
    },
  },
});

export const { actions: todosActions, reducer: todosReducer } = todosSlice;
