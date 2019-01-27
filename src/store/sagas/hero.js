import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* fetchHeroesSaga(action) {
  yield put(actions.fetchHeroes());
  try {
    const res = yield axios.get('');
    yield put(actions.fetchHeroesSuccess());
  } catch (error) {
    yield;
  }
}

export function* updateHeroSaga(action) {}
