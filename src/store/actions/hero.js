import * as actionTypes from './actionTypes';

export const createHero = (hero, route) => ({
  type: actionTypes.CREATE_HERO,
  hero,
  route
});

export const createHeroFail = error => ({
  type: actionTypes.CREATE_HERO_FAIL,
  error
});

export const createHeroSuccess = hero => ({
  type: actionTypes.CREATE_HERO_SUCCESS,
  hero
});

export const fetchHero = heroId => ({
  type: actionTypes.FETCH_HERO,
  heroId
});

export const fetchHeroFail = error => ({
  type: actionTypes.FETCH_HERO_FAIL,
  error
});

export const fetchHeroSuccess = hero => ({
  type: actionTypes.FETCH_HERO_SUCCESS,
  hero
});

export const fetchHeroes = () => ({
  type: actionTypes.FETCH_HEROES
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

export const updateHero = hero => ({
  type: actionTypes.UPDATE_HERO,
  hero
});

export const updateHeroFail = error => ({
  type: actionTypes.UPDATE_HERO_FAIL,
  error
});

export const updateHeroSuccess = hero => ({
  type: actionTypes.UPDATE_HERO_SUCCESS,
  hero
});
