import { put } from 'redux-saga/effects';
import axios from 'axios';
import { DB } from '../../firebase/firebase';
import {
  deleteHeroSuccess,
  fetchHeroesStart,
  fetchHeroSuccess,
  fetchHeroesSuccess,
  fetchHeroesFail,
  updateHeroSuccess
} from './heroActions';

export function* createHeroSaga({ hero, route }) {
  try {
    const data = yield DB.ref('heroes').push();
    const data2 = yield data.set(hero);

    console.log(data.key);
  } catch (error) {
    console.log(error);
  }
  // try {
  //   const {
  //     data: { name }
  //   } = yield axios.post(
  //     'https://dragonborn-1077c.firebaseio.com/heroes.json',
  //     hero
  //   );
  //   hero.id = name;
  //   yield put(actions.createHeroSuccess(hero));
  //   yield route.push(`/track/${name}/stats`);
  // } catch (error) {
  //   // TODO: swap out action for fail
  //   yield put(actions.createHeroSuccess(error));
  // }
}

export function* deleteHeroSaga({ heroId }) {
  try {
    yield axios.delete(
      `https://dragonborn-1077c.firebaseio.com/heroes/${heroId}.json`
    );
    yield put(deleteHeroSuccess(heroId));
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}

export function* fetchHeroSaga({ heroId }) {
  try {
    const { data } = yield axios.get(
      `https://dragonborn-1077c.firebaseio.com/heroes/${heroId}.json`
    );
    yield put(fetchHeroSuccess(data));
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}

export function* fetchHeroesSaga(action) {
  yield put(fetchHeroesStart());

  try {
    const data = yield DB.ref('heroes').once('value');

    const heroData = data.val();

    const heroes = [];
    for (const key in heroData) {
      heroes.push({ ...heroData[key], id: key });
    }

    yield put(fetchHeroesSuccess(heroes));
  } catch (error) {
    yield put(fetchHeroesFail(error));
  }
}

export function* updateHeroSaga({ hero }) {
  try {
    const { data } = yield axios.put(
      `https://dragonborn-1077c.firebaseio.com/heroes/${hero.id}.json`,
      hero
    );
    yield put(updateHeroSuccess(data));
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}
