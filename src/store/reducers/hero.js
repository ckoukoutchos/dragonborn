import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/Utility';
import Hero from '../../shared/Hero';

const initialState = {
  hero: new Hero(),
  heroes: [
    // TODO: remove dummy data
    new Hero()
  ],
  userId: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_HERO:
      return deleteHero(state, action);
    case actionTypes.FETCH_HEROES:
      return state;
    case actionTypes.FETCH_HEROES_SUCCESS:
      return fetchHeroesSuccess(state, action);
    case actionTypes.GET_HERO:
      return getHero(state, action);
    default:
      return state;
  }
};

const deleteHero = (state, { heroId }) => {
  const newHeroes = state.heroes.filter(hero => hero.id !== heroId);
  return updateObject(state, { heroes: newHeroes });
};

const fetchHeroesSuccess = (state, { heroes }) => updateObject(state, heroes);

const getHero = (state, { heroId }) => {
  const selectedHero = state.heroes.find(hero => hero.id === heroId);
  return updateObject(state, { hero: selectedHero });
};

export default reducer;
