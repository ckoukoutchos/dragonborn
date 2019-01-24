import * as actionTypes from './actionTypes';

export const fetchHeroes = userId => ({
  type: actionTypes.FETCH_HEROES,
  userId
});
