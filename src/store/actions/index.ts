export interface Action {
  type: string;
  [propName: string]: any;
}

export {
  createHero,
  createHeroFail,
  createHeroSuccess,
  deleteHero,
  deleteHeroFail,
  deleteHeroSuccess,
  fetchHero,
  fetchHeroFail,
  fetchHeroSuccess,
  fetchHeroes,
  fetchHeroesStart,
  fetchHeroesFail,
  fetchHeroesSuccess,
  getHero,
  updateHero,
  updateHeroFail,
  updateHeroSuccess
} from '../hero/heroActions';
