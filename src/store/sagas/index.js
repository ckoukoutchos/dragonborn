import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchHeroesSaga, createHeroSaga } from './hero';

export function* watchHero() {
  yield takeEvery(actionTypes.CREATE_HERO, createHeroSaga);
  yield takeEvery(actionTypes.FETCH_HEROES, fetchHeroesSaga);
}
