// library
import { put, all, takeEvery } from 'redux-saga/effects';
import { DATABASE } from '../../firebase/firebase';

// action types
import {
  CREATE_HERO,
  DELETE_HERO,
  FETCH_HERO,
  FETCH_HEROES,
  UPDATE_HERO
} from '../hero/heroActionTypes';

// action creators
import {
  createHeroSuccess,
  deleteHeroSuccess,
  fetchHeroesStart,
  fetchHeroSuccess,
  fetchHeroesSuccess,
  fetchHeroesFail,
  updateHeroSuccess,
  createHeroFail,
  deleteHeroFail,
  updateHeroFail
} from './heroActionCreators';

// shared
import Hero from '../../models/Hero';

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

/**
 * @name createHeroSaga
 * @description creates new hero in firebase db for current user
 * @param hero new hero
 * @param route router history object
 * @param uid firebase user id
 */
function* createHeroSaga({ hero, route, uid }: { hero: Hero; route: any, uid: string }): IterableIterator<{}> {
  try {
    // create new entry spot in Firebase
    const newHeroRef = yield DATABASE.ref(`users/${uid}/heroes`).push();

    // set new hero in created spot
    yield newHeroRef.set(hero);

    // grab unique DB id created by Firebase
    hero.id = newHeroRef.key;

    yield put(createHeroSuccess(hero));

    // redirect to track page
    yield route.push(`/track/${hero.id}/stats`);

  } catch (error) {
    yield put(createHeroFail(error));
  }
}

/**
 * @name deleteHeroSaga
 * @description deletes hero in firebase bd for current user
 * @param heroId hero db id
 * @param uid firebase user id
 */
function* deleteHeroSaga({ heroId, uid }: { heroId: number, uid: string }): IterableIterator<{}> {
  try {
    // grab specific hero DB ref
    const heroRef = yield DATABASE.ref(`users/${uid}/heroes/${heroId}`);

    // delete hero
    yield heroRef.remove();

    yield put(deleteHeroSuccess(heroId));

  } catch (error) {
    yield put(deleteHeroFail(error));
  }
}

/**
 * @name fetchHeroSaga
 * @description retrieves individual hero from firebase db for current user
 * @param heroId hero db id
 * @param uid firebase user id
 */
function* fetchHeroSaga({ heroId, uid }: { heroId: number, uid: string }): IterableIterator<{}> {
  try {
    // hero specific DB ref
    const heroRef = yield DATABASE.ref(`users/${uid}/heroes/${heroId}`);

    // retrieve snapshot of hero
    const heroData = yield heroRef.once('value');

    // pull value of of snapshot
    const hero = heroData.val();

    yield put(fetchHeroSuccess(hero));

  } catch (error) {
    console.log(error);
  }
}

/**
 * @name fetchHeroesSaga
 * @description retrieves all heroes from firebase db for current user
 * @param uid firebase user id
 */
function* fetchHeroesSaga({ uid }: { uid: string }): IterableIterator<{}> {
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

/**
 * @name updateHeroSaga
 * @description updates a hero in firebase db for current user
 * @param hero updated hero
 * @param uid firebase user id
 */
function* updateHeroSaga({ hero, uid }: { hero: Hero, uid: string }): IterableIterator<{}> {
  try {
    // grab specific hero DB ref
    const heroRef = yield DATABASE.ref(`users/${uid}/heroes/${hero.id}`);

    // set updated hero
    yield heroRef.set(hero);

    yield put(updateHeroSuccess(hero));

  } catch (error) {
    yield put(updateHeroFail(error));
  }
}
