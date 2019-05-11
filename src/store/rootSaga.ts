import { all, takeEvery } from 'redux-saga/effects';

import { loginSaga } from './auth/authSagas';
import { LOGIN } from './auth/authActionTypes';
import watchHero from './hero/heroSagas';

/**
 * @name rootSaga
 * @description root saga combinator
 */
export default function* rootSage() {
  yield all([
    watchHero(),
    takeEvery(LOGIN, loginSaga)
  ]);
}
