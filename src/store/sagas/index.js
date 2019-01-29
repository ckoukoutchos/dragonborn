import { all, takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { createHeroSaga, fetchHeroesSaga, updateHeroSaga } from './hero';

export function* watchHero() {
  yield all([
    takeEvery(actionTypes.CREATE_HERO, createHeroSaga),
    takeEvery(actionTypes.FETCH_HEROES, fetchHeroesSaga),
    takeEvery(actionTypes.UPDATE_HERO, updateHeroSaga)
  ]);
}
