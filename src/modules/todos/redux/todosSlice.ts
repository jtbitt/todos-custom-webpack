import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface ITodosState {
  todos: TTodo[];
  filteredTodos: TTodo[];
  paginatedTodos: TTodo[];
  isError: boolean;
  isLoading: boolean;
}

export const initialState: ITodosState = {
  todos: [],
  filteredTodos: [],
  paginatedTodos: [],
  isLoading: true,
  isError: false,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // saveUserAnswer: (state, action: PayloadAction<boolean>) => {
    //   state.userAnswers = [...state.userAnswers, action.payload];
    // },
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
