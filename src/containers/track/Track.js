import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Spinner from '../../components/spinner/Spinner';
import TitleCard from '../../components/card/title-card/TitleCard';

class Track extends Component {
  componentDidMount() {
    if (!this.props.heroes.length) {
      this.props.fetchHeroes();
    }
  }

  onHeroDeletion = heroId => {
    this.props.deleteHero(heroId);
  };

  onHeroSelection = heroId => {
    this.props.getHero(heroId);
    this.props.history.push(`/track/${heroId}/stats`);
  };

  render() {
    const heroes = this.props.heroes.map((hero, index) => (
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

    return (
      <>
        <Jumbotron header="Track" subHeader="Keep Tabs on your Heroes" />
        {heroes}
        <Spinner />
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
  fetchHeroes: () => dispatch(actions.fetchHeroes()),
  getHero: heroId => dispatch(actions.getHero(heroId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);
