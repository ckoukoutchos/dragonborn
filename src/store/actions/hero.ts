import * as actionTypes from './actionTypes';
import { Action } from './index';
import Hero from '../../shared/Hero';

export const createHero = (hero: Hero, route: string): Action => ({
  type: actionTypes.CREATE_HERO,
  hero,
  route
});

export const createHeroFail = (error: any): Action => ({
  type: actionTypes.CREATE_HERO_FAIL,
  error
});

export const createHeroSuccess = (hero: Hero): Action => ({
  type: actionTypes.CREATE_HERO_SUCCESS,
  hero
});

export const deleteHero = (heroId: number): Action => ({
  type: actionTypes.DELETE_HERO,
  heroId
});

export const deleteHeroFail = (error: any): Action => ({
  type: actionTypes.DELETE_HERO_FAIL,
  error
});

export const deleteHeroSuccess = (heroId: number): Action => ({
  type: actionTypes.DELETE_HERO_SUCCESS,
  heroId
});

export const fetchHero = (heroId: number): Action => ({
  type: actionTypes.FETCH_HERO,
  heroId
});

export const fetchHeroFail = (error: any): Action => ({
  type: actionTypes.FETCH_HERO_FAIL,
  error
});

export const fetchHeroSuccess = (hero: Hero): Action => ({
  type: actionTypes.FETCH_HERO_SUCCESS,
  hero
});

export const fetchHeroes = () => ({
  type: actionTypes.FETCH_HEROES
});

export const fetchHeroesStart = () => ({
  type: actionTypes.FETCH_HEROES_START
});

export const fetchHeroesFail = (error: any): Action => ({
  type: actionTypes.FETCH_HEROES_FAIL,
  error
});

export const fetchHeroesSuccess = (heroes: Hero[]): Action => ({
  type: actionTypes.FETCH_HEROES_SUCCESS,
  heroes
});

export const getHero = (heroId: number): Action => ({
  type: actionTypes.GET_HERO,
  heroId
});

export const updateHero = (hero: Hero): Action => ({
  type: actionTypes.UPDATE_HERO,
  hero
});

export const updateHeroFail = (error: any): Action => ({
  type: actionTypes.UPDATE_HERO_FAIL,
  error
});

export const updateHeroSuccess = (hero: Hero): Action => ({
  type: actionTypes.UPDATE_HERO_SUCCESS,
  hero
});
