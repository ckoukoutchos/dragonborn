import * as actionTypes from '../actions/actionTypes';
import { updateObject, updateArray } from '../../shared/Utility';
import { Action } from '../actions/index';
import Hero from '../../shared/Hero';

interface HeroState {
  hero: Hero;
  heroes: Hero[];
  loading: boolean;
  userId: number;
}

const initialState: HeroState = {
  hero: new Hero(),
  heroes: [],
  loading: false,
  userId: 1
};

const heroReducer = (
  state: HeroState = initialState,
  action: any
): HeroState => {
  switch (action.type) {
    case actionTypes.CREATE_HERO_FAIL:
      return state;
    case actionTypes.CREATE_HERO_SUCCESS:
      return createHeroSuccess(state, action);
    case actionTypes.DELETE_HERO_SUCCESS:
      return deleteHeroSuccess(state, action);
    case actionTypes.FETCH_HERO_SUCCESS:
      return fetchHeroSuccess(state, action);
    case actionTypes.FETCH_HEROES_START:
      return fetchHeroesStart(state, action);
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

const createHeroSuccess = (
  state: HeroState,
  { hero }: { hero: Hero }
): HeroState => {
  return updateObject(state, {
    heroes: state.heroes.concat(hero),
    hero
  });
};

const deleteHeroSuccess = (
  state: HeroState,
  { heroId }: { heroId: number }
): HeroState => {
  const newHeroes = state.heroes.filter((hero: Hero) => hero.id !== heroId);
  return updateObject(state, { heroes: newHeroes });
};

const fetchHeroSuccess = (
  state: HeroState,
  { hero }: { hero: Hero }
): HeroState => {
  return updateObject(state, { hero });
};

const fetchHeroesStart = (state: HeroState, action: Action): HeroState => {
  return updateObject(state, { loading: true });
};

const fetchHeroesSuccess = (
  state: HeroState,
  { heroes }: { heroes: Hero[] }
): HeroState => {
  return updateObject(state, { heroes, loading: false });
};

const getHero = (
  state: HeroState,
  { heroId }: { heroId: number }
): HeroState => {
  const selectedHero = state.heroes.find((hero: Hero) => hero.id === heroId);
  return updateObject(state, { hero: selectedHero });
};

const updateHeroSuccess = (
  state: HeroState,
  { hero }: { hero: Hero }
): HeroState => {
  const index = state.heroes.findIndex((item: Hero) => item.id === hero.id);
  const updatedHeroes = updateArray(state.heroes, hero, index);
  return updateObject(state, { heroes: updatedHeroes, hero });
};

export default heroReducer;
