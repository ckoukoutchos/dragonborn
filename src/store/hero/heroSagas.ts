/* eslint-disable no-unused-vars */
import { put, all, takeEvery } from 'redux-saga/effects';
import { DATABASE } from '../../firebase/firebase';

import {
  CREATE_HERO,
  DELETE_HERO,
  FETCH_HERO,
  FETCH_HEROES,
  UPDATE_HERO
} from '../hero/heroActionTypes';
import {
  createHeroSuccess,
  deleteHeroSuccess,
  fetchHeroesStart,
  fetchHeroSuccess,
  fetchHeroesSuccess,
  fetchHeroesFail,
  updateHeroSuccess
} from './heroActionCreators';
import Hero from '../../shared/Hero';

// TODO: function docs

/**
 * @name watchHero
 * @description hero saga combinator
 */
export default function* watchHero() {
  yield all([
    takeEvery(CREATE_HERO, createHeroSaga),
    takeEvery(DELETE_HERO, deleteHeroSaga),
    takeEvery(FETCH_HERO, fetchHeroSaga),
    takeEvery(FETCH_HEROES, fetchHeroesSaga),
    takeEvery(UPDATE_HERO, updateHeroSaga)
  ]);
}

function* createHeroSaga({ hero, route, uid }: { hero: Hero; route: any, uid: string }) {
  try {
    // create new entry spot in Firebase
    const newHeroRef = yield DATABASE.ref(`users/${uid}/heroes`).push();

    // set new hero in created spot
    const res = yield newHeroRef.set(hero);

    // grab unique DB id created by Firebase
    hero.id = newHeroRef.key;

    yield put(createHeroSuccess(hero));

    // redirect to track page
    yield route.push(`/track/${hero.id}/stats`);
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}

function* deleteHeroSaga({ heroId, uid }: { heroId: number, uid: string }) {
  try {
    // grab specific hero DB ref
    const heroRef = yield DATABASE.ref(`users/${uid}/heroes/${heroId}`);

    // delete hero
    const res = yield heroRef.remove();

    yield put(deleteHeroSuccess(heroId));
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}

function* fetchHeroSaga({ heroId, uid }: { heroId: number, uid: string }) {
  try {
    // hero specific DB ref
    const heroRef = yield DATABASE.ref(`users/${uid}/heroes/${heroId}`);

    // retrieve snapshot of hero
    const heroData = yield heroRef.once('value');

    // pull value of of snapshot
    const hero = heroData.val();

    yield put(fetchHeroSuccess(hero));
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}

function* fetchHeroesSaga({ uid }: { uid: string }) {
  yield put(fetchHeroesStart());

  try {
    // hero list specific DB reference
    const heroesRef = yield DATABASE.ref(`users/${uid}/heroes`);

    // retrieve snapshot of heroes list
    const heroesData = yield heroesRef.once('value');

    // pull values out of snapshot
    const heroes = heroesData.val();

    const heroesList = [];
    for (const key in heroes) {
      heroesList.push({ ...heroes[key], id: key });
    }

    yield put(fetchHeroesSuccess(heroesList));
  } catch (error) {
    yield put(fetchHeroesFail(error));
  }
}

function* updateHeroSaga({ hero, uid }: { hero: Hero, uid: string }) {
  try {
    // grab specific hero DB ref
    const heroRef = yield DATABASE.ref(`users/${uid}/heroes/${hero.id}`);

    // set updated hero
    const res = yield heroRef.set(hero);

    yield put(updateHeroSuccess(hero));
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}
