import { all, takeEvery } from 'redux-saga/effects';

import * as actionTypes from './actions/actionTypes';
import {
  createHeroSaga,
  deleteHeroSaga,
  fetchHeroSaga,
  fetchHeroesSaga,
  updateHeroSaga
} from './hero/heroReducer';

export function* watchHero() {
  yield all([
    takeEvery(actionTypes.CREATE_HERO, createHeroSaga),
    takeEvery(actionTypes.DELETE_HERO, deleteHeroSaga),
    takeEvery(actionTypes.FETCH_HERO, fetchHeroSaga),
    takeEvery(actionTypes.FETCH_HEROES, fetchHeroesSaga),
    takeEvery(actionTypes.UPDATE_HERO, updateHeroSaga)
  ]);
}
