import { all, takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchHeroesSaga, createHeroSaga } from './hero';

export function* watchHero() {
  yield all([
    takeEvery(actionTypes.CREATE_HERO, createHeroSaga),
    takeEvery(actionTypes.FETCH_HEROES, fetchHeroesSaga)
  ]);
}
