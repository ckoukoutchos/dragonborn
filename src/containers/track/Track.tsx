import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Hero from '../../shared/Hero';
import {
  deleteHero,
  fetchHeroes,
  getHero
} from '../../store/hero/heroActionCreators';
import { HeroActionTypes } from '../../store/hero/heroActionTypes';
import { AppState } from '../../store/rootReducer';

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Spinner from '../../components/spinner/Spinner';
import TitleCard from '../../components/card/title-card/TitleCard';

interface TrackProps {
  history: any;
  heroes: any; // TS bug, needs to be declared type <any>
  loading: boolean;
  userId: number;
  user: any;
  deleteHero: (heroId: number, uid: string) => HeroActionTypes;
  fetchHeroes: (uid: string) => HeroActionTypes;
  getHero: (heroId: number) => HeroActionTypes;
}

/*
 * Container for Track page
 */
class Track extends Component<TrackProps> {
  componentDidMount() {
    if (!this.props.heroes.length) {
      this.props.fetchHeroes(this.props.user.uid);
    }
  }

  onHeroDeletion = (heroId: number): void => {
    this.props.deleteHero(heroId, this.props.user.uid);
  };

  onHeroSelection = (heroId: number): void => {
    this.props.getHero(heroId);
    this.props.history.push(`/track/${heroId}/stats`);
  };

  render() {
    let heroList = <Spinner />;

    if (!this.props.loading) {
      heroList = this.props.heroes.map((hero: Hero, index: number) => (
        <TitleCard key={index} title={hero.name} readOnly>
          <Input
            label={'Class & Level'}
            value={hero.heroClass + ' ' + hero.level}
          />

          <Input label="Race" value={hero.race} />

          <Input label="Alignment" value={hero.alignment} />

          <Button
            color="Primary"
            btnType="Flat"
            clicked={() => this.onHeroSelection(hero.id)}
          >
            View
          </Button>

          <div>
            <strong>
              {hero.active ? 'Active Campaign' : 'In Need of Quests'}
            </strong>
          </div>

          <Button
            color="Secondary"
            btnType="Flat"
            clicked={() => this.onHeroDeletion(hero.id)}
          >
            Delete
          </Button>
        </TitleCard>
      ));
    }

    return (
      <>
        <Jumbotron header="Track" subHeader="Keep Tabs on your Heroes" />
        {heroList}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  heroes: state.hero.heroes,
  loading: state.hero.loading,
  userId: state.hero.userId,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: Dispatch<HeroActionTypes>) => ({
  deleteHero: (heroId: number, uid: string) =>
    dispatch(deleteHero(heroId, uid)),
  fetchHeroes: (uid: string) => dispatch(fetchHeroes(uid)),
  getHero: (heroId: number) => dispatch(getHero(heroId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);
