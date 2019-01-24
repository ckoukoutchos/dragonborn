import * as actionTypes from './actionTypes';

export const fetchHeroes = userId => ({
  type: actionTypes.FETCH_HEROES,
  userId
});

export const fetchHeroesSuccess = heroes => ({
  type: actionTypes.FETCH_HEROES_SUCCESS,
  heroes
});
