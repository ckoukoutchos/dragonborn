import * as actionTypes from './actionTypes';

export const createHero = hero => ({
  type: actionTypes.CREATE_HERO,
  hero
});

export const createHeroFail = error => ({
  type: actionTypes.CREATE_HERO_FAIL,
  error
});

export const createHeroSuccess = hero => ({
  type: actionTypes.CREATE_HERO_SUCCESS,
  hero
});

export const fetchHeroes = userId => ({
  type: actionTypes.FETCH_HEROES,
  userId
});

export const fetchHeroesFail = error => ({
  type: actionTypes.FETCH_HEROES_FAIL,
  error
});

export const fetchHeroesSuccess = heroes => ({
  type: actionTypes.FETCH_HEROES_SUCCESS,
  heroes
});

export const deleteHero = heroId => ({
  type: actionTypes.DELETE_HERO,
  heroId
});

export const getHero = heroId => ({
  type: actionTypes.GET_HERO,
  heroId
});
