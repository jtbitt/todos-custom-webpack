import { takeEvery, call, put } from 'redux-saga/effects';

import * as api from '@api';

import { transformTodosData, fetchDataSaga, todosSaga } from '../redux/todosSaga';
import { todosActions } from '../redux/todosSlice';

const data: api.ITodosData[] = [];

describe('transformTodosData works', () => {
  it('works', () => {
    const data = [
      {
        completed: true,
        id: 1,
        title: 'foo &copy; bar &ne; baz &#x1D306; qux',
        userId: 1
      },
      {
        completed: false,
        id: 2,
        title: 'et porro tempora',
        userId: 1
      },
    ];

    const result = [
      {
        completed: true,
        id: 1,
        title: 'foo © bar ≠ baz 𝌆 qux',
        userId: 1
      },
      { 
        completed: false,
        id: 2,
        title: 'et porro tempora',
        userId: 1
      },
    ];

    expect(transformTodosData(data)).toEqual(result);
  });
});

describe('fetchDataSaga works', () => {
  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks();
  });
  it('should execute happy path', () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify(data));

    const gen = fetchDataSaga();

    expect(gen.next().value).toEqual(call(api.fetchTodosData));
  });
  it('should execute error path', () => {
    const gen = fetchDataSaga();

    expect(gen.next().value).toEqual(call(api.fetchTodosData));

    expect(gen.throw({ error: 'API error' }).value).toEqual(
      put(todosActions.fetchFailure()),
    );

    expect(gen.next().done).toBe(true);
  });
});

describe('quizSaga works', () => {
  const gen = todosSaga();

  expect(gen.next().value).toEqual(
    takeEvery(todosActions.fetch().type, fetchDataSaga),
  );
  expect(gen.next().done).toBe(true);
});
