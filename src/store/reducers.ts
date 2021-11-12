import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { todosReducer } from '@modules/todos';

export const createRootReducer = (history: History) =>
  combineReducers({
    todos: todosReducer,
    router: connectRouter(history),
  });
