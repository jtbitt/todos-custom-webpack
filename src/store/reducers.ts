import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

// import { quizReducer } from '@modules/quiz';

export const createRootReducer = (history: History) =>
  combineReducers({
    // quiz: quizReducer,
    router: connectRouter(history),
  });
