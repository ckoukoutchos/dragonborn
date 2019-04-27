import * as actionTypes from '../actions/actionTypes';
import { updateObject, updateArray } from '../../shared/Utility';
import { Action } from '../actions/index';
import Hero from '../../shared/Hero';

interface State {
  hero: Hero;
  heroes: Hero[];
  userId: number;
}

const initialState = {
  hero: new Hero(),
  heroes: [],
  userId: 1
};

const reducer = (
  state: State = initialState,
  action: any
): Function | State => {
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

const createHeroSuccess = (state: State, { hero }: { hero: Hero }): State => {
  return updateObject(state, {
    heroes: state.heroes.concat(hero),
    hero
  });
};

const deleteHeroSuccess = (
  state: State,
  { heroId }: { heroId: number }
): State => {
  const newHeroes = state.heroes.filter((hero: Hero) => hero.id !== heroId);
  return updateObject(state, { heroes: newHeroes });
};

const fetchHeroSuccess = (state: State, { hero }: { hero: Hero }): State => {
  return updateObject(state, { hero });
};

const fetchHeroesSuccess = (
  state: State,
  { heroes }: { heroes: Hero[] }
): State => {
  return updateObject(state, { heroes });
};

const getHero = (state: State, { heroId }: { heroId: number }): State => {
  const selectedHero = state.heroes.find((hero: Hero) => hero.id === heroId);
  return updateObject(state, { hero: selectedHero });
};

const updateHeroSuccess = (state: State, { hero }: { hero: Hero }): State => {
  const index = state.heroes.findIndex(item => item.id === hero.id);
  const updatedHeroes = updateArray(state.heroes, hero, index);
  return updateObject(state, { heroes: updatedHeroes, hero });
};

export default reducer;
