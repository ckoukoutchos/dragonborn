import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import TitleCard from '../../components/card/title-card/TitleCard';

class Track extends Component {
  componentDidMount() {
    this.props.fetchHeroes(this.props.userId);
  }

  onHeroDeletion = heroId => {
    this.props.deleteHero(heroId);
  };

  onHeroSelection = heroId => {
    this.props.getHero(heroId);
    this.props.history.push(`/track/${heroId}/stats`);
  };

  createHeroList(heroes) {
    return heroes.map((hero, index) => (
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

  render() {
    return (
      <>
        <Jumbotron header="Track" subHeader="Keep Tabs on your Heroes" />
        {this.createHeroList(this.props.heroes)}
      </>
    );
  }
}

const mapStateToProps = state => ({
  heroes: state.hero.heroes,
  userId: state.hero.userId
});

const mapDispatchToProps = dispatch => ({
  deleteHero: heroId => dispatch(actions.deleteHero(heroId)),
  fetchHeroes: userId => dispatch(actions.fetchHeroes(userId)),
  getHero: heroId => dispatch(actions.getHero(heroId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);
