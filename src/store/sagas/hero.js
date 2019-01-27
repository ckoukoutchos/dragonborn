import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* createHeroSaga(action) {
  yield put(actions.createHero());
  try {
    const res = yield axios.post(
      'https://dragonborn-1077c.firebaseio.com/heroes.json',
      action.hero
    );
    yield put(actions.createHeroSuccess(res));
  } catch (error) {
    // TODO: swap out action for fail
    yield put(actions.createHeroSuccess(error));
  }
}

export function* fetchHeroesSaga(action) {
  yield put(actions.fetchHeroes());
  try {
    const res = yield axios.get('');
    yield put(actions.fetchHeroesSuccess(res));
  } catch (error) {
    yield put(actions.fetchHeroesFail(error));
  }
}

export function* updateHeroSaga(action) {}
