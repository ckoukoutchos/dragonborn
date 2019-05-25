import { all } from 'redux-saga/effects';

import watchAuth from './auth/authSagas';
import watchHero from './hero/heroSagas';

/*
* root saga combinator
*/
export default function* rootSage() {
  yield all([
    watchAuth(),
    watchHero()
  ]);
}
