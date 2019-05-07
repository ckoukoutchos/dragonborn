import Hero from '../../shared/Hero';
import {
  HeroActionTypes,
  CREATE_HERO,
  CREATE_HERO_FAIL,
  CREATE_HERO_SUCCESS,
  DELETE_HERO,
  DELETE_HERO_FAIL,
  DELETE_HERO_SUCCESS,
  FETCH_HERO,
  FETCH_HERO_FAIL,
  FETCH_HERO_SUCCESS,
  FETCH_HEROES,
  FETCH_HEROES_START,
  FETCH_HEROES_FAIL,
  FETCH_HEROES_SUCCESS,
  GET_HERO,
  UPDATE_HERO,
  UPDATE_HERO_FAIL,
  UPDATE_HERO_SUCCESS
} from './heroActionTypes';

/*
 * Hero action creators
 */
export const createHero = (hero: Hero, route: string, uid: string): HeroActionTypes => ({
  type: CREATE_HERO,
  hero,
  route,
  uid
});

export const createHeroFail = (error: any): HeroActionTypes => ({
  type: CREATE_HERO_FAIL,
  error
});

export const createHeroSuccess = (hero: Hero): HeroActionTypes => ({
  type: CREATE_HERO_SUCCESS,
  hero
});

export const deleteHero = (heroId: number, uid: string): HeroActionTypes => ({
  type: DELETE_HERO,
  heroId,
  uid
});

export const deleteHeroFail = (error: any): HeroActionTypes => ({
  type: DELETE_HERO_FAIL,
  error
});

export const deleteHeroSuccess = (heroId: number): HeroActionTypes => ({
  type: DELETE_HERO_SUCCESS,
  heroId
});

export const fetchHero = (heroId: number, uid: string): HeroActionTypes => ({
  type: FETCH_HERO,
  heroId,
  uid
});

export const fetchHeroFail = (error: any): HeroActionTypes => ({
  type: FETCH_HERO_FAIL,
  error
});

export const fetchHeroSuccess = (hero: Hero): HeroActionTypes => ({
  type: FETCH_HERO_SUCCESS,
  hero
});

export const fetchHeroes = (uid: string): HeroActionTypes => ({
  type: FETCH_HEROES,
  uid
});

export const fetchHeroesStart = (): HeroActionTypes => ({
  type: FETCH_HEROES_START
});

export const fetchHeroesFail = (error: any): HeroActionTypes => ({
  type: FETCH_HEROES_FAIL,
  error
});

export const fetchHeroesSuccess = (heroes: Hero[]): HeroActionTypes => ({
  type: FETCH_HEROES_SUCCESS,
  heroes
});

export const getHero = (heroId: number): HeroActionTypes => ({
  type: GET_HERO,
  heroId
});

export const updateHero = (hero: Hero, uid: string): HeroActionTypes => ({
  type: UPDATE_HERO,
  hero,
  uid
});

export const updateHeroFail = (error: any): HeroActionTypes => ({
  type: UPDATE_HERO_FAIL,
  error
});

export const updateHeroSuccess = (hero: Hero): HeroActionTypes => ({
  type: UPDATE_HERO_SUCCESS,
  hero
});
