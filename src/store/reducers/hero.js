import * as actionTypes from '../actions/actionTypes';
import { updateObject, updateArray } from '../../shared/Utility';
import Hero from '../../shared/Hero';

const initialState = {
  hero: new Hero(),
  heroes: [],
  userId: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_HERO_FAIL:
      return state;
    case actionTypes.CREATE_HERO_SUCCESS:
      return createHeroSuccess(state, action);
    case actionTypes.DELETE_HERO_SUCCESS:
      return deleteHeroSuccess(state, action);
    case actionTypes.FETCH_HERO_SUCCESS:
      return fetchHeroSuccess(state, action);
    case actionTypes.FETCH_HEROES_SUCCESS:
      return fetchHeroesSuccess(state, action);
    case actionTypes.GET_HERO:
      return getHero(state, action);
    case actionTypes.UPDATE_HERO_SUCCESS:
      return updateHeroSuccess(state, action);
    default:
      return state;
  }
};

const createHeroSuccess = (state, { hero }) => {
  return updateObject(state, { heroes: state.heroes.concat(hero) });
};

const deleteHeroSuccess = (state, { heroId }) => {
  const newHeroes = state.heroes.filter(hero => hero.id !== heroId);
  return updateObject(state, { heroes: newHeroes });
};

const fetchHeroSuccess = (state, { hero }) => {
  return updateObject(state, { hero });
};

const fetchHeroesSuccess = (state, { heroes }) => {
  return updateObject(state, { heroes });
};

const getHero = (state, { heroId }) => {
  const selectedHero = state.heroes.find(hero => hero.id === heroId);
  return updateObject(state, { hero: selectedHero });
};

const updateHeroSuccess = (state, { hero }) => {
  const index = state.heroes.findIndex(item => item.id === hero.id);
  const updatedHeroes = updateArray(state.heroes, hero, index);
  return updateObject({ heroes: updatedHeroes, hero });
};

export default reducer;
