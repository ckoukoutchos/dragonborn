import { updateObject, updateArray } from '../../shared/immutable';
import Hero from '../../models/Hero';
import {
  HeroState,
  HeroActionTypes,
  CREATE_HERO_FAIL,
  CREATE_HERO_SUCCESS,
  DELETE_HERO_SUCCESS,
  FETCH_HERO_SUCCESS,
  FETCH_HEROES_START,
  FETCH_HEROES_SUCCESS,
  GET_HERO,
  UPDATE_HERO_SUCCESS
} from './heroActionTypes';

/*
 * Inital Hero state
 */
const initialState: HeroState = {
  hero: new Hero(),
  heroes: [],
  loading: false,
  userId: 1
};

/**
 * @name heroReducer
 * @description reducer for hero slice of state
 * @param state
 * @param action
 */
const heroReducer = (
  state: HeroState = initialState,
  action: HeroActionTypes
): HeroState => {
  switch (action.type) {
    case CREATE_HERO_FAIL: return state;
    case CREATE_HERO_SUCCESS: return createHeroSuccess(state, action);
    case DELETE_HERO_SUCCESS: return deleteHeroSuccess(state, action);
    case FETCH_HERO_SUCCESS: return fetchHeroSuccess(state, action);
    case FETCH_HEROES_START: return fetchHeroesStart(state);
    case FETCH_HEROES_SUCCESS: return fetchHeroesSuccess(state, action);
    case GET_HERO: return getHero(state, action);
    case UPDATE_HERO_SUCCESS: return updateHeroSuccess(state, action);
    default: return state;
  }
};

/*
 * reducer case functions
 */
const createHeroSuccess = (
  state: HeroState,
  { hero }: { hero: Hero }
): HeroState => updateObject(state, {
  heroes: state.heroes.concat(hero),
  hero
});

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
): HeroState => updateObject(state, { hero });

const fetchHeroesStart = (state: HeroState): HeroState => updateObject(state, { loading: true });

const fetchHeroesSuccess = (
  state: HeroState,
  { heroes }: { heroes: Hero[] }
): HeroState => updateObject(state, { heroes, loading: false });

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
