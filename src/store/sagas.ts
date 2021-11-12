import { fork } from 'redux-saga/effects';

import { todosSaga } from '@modules/todos';

export function* rootSaga() {
  yield fork(todosSaga);
}
