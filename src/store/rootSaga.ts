import { all } from 'redux-saga/effects';

import watchAuth from './auth/authSagas';
import watchHero from './hero/heroSagas';

/**
 * @name rootSaga
 * @description root saga combinator
 */
export default function* rootSage() {
  yield all([
    watchAuth(),
    watchHero()
  ]);
}
