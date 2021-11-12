import { call, takeEvery, put, StrictEffect } from 'redux-saga/effects';
import he from 'he';

import { fetchTodosData, ITodosData } from '@api';

import { todosActions } from './todosSlice';

export const transformTodosData = (results: ITodosData[]) =>
  results.map(({ userId, id, title, completed }) => ({
    userId: userId,
    id: id,
    title: he.decode(title),
    completed: completed
  }));

export function* fetchDataSaga(): Generator<StrictEffect, void, any> {
  try {
    const data: ITodosData[] = yield call(fetchTodosData);

    yield put(todosActions.fetchSuccess(transformTodosData(data)));
  } catch (e) {
    yield put(todosActions.fetchFailure());
  }
}

export function* todosSaga() {
  yield takeEvery(todosActions.fetch().type, fetchDataSaga);
}
