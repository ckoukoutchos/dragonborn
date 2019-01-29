import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* createHeroSaga({ hero, route }) {
  try {
    const {
      data: { name }
    } = yield axios.post(
      'https://dragonborn-1077c.firebaseio.com/heroes.json',
      hero
    );
    hero.id = name;
    yield put(actions.createHeroSuccess(hero));
    yield route.push(`/track/${name}/stats`);
  } catch (error) {
    // TODO: swap out action for fail
    yield put(actions.createHeroSuccess(error));
  }
}

export function* fetchHeroesSaga(action) {
  try {
    const { data } = yield axios.get(
      'https://dragonborn-1077c.firebaseio.com/heroes.json'
    );

    const heroes = [];
    for (const key in data) {
      heroes.push({ ...data[key], id: key });
    }

    yield put(actions.fetchHeroesSuccess(heroes));
  } catch (error) {
    yield put(actions.fetchHeroesFail(error));
  }
}

export function* updateHeroSaga({ hero }) {
  try {
    const data = yield axios.put(
      `https://dragonborn-1077c.firebaseio.com/heroes/${hero.id}.json`,
      hero
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
