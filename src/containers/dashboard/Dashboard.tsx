// library
import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';

// store
import { AppState } from '../../store/rootReducer';
import { createHero } from '../../store/hero/heroActionCreators';
import { HeroActionTypes } from '../../store/hero/heroActionTypes';

// components
import Button from '../../components/button/Button';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import SecondaryCard from '../../components/card/secondary-card/SecondaryCard';
import TitleCard from '../../components/card/title-card/TitleCard';

// shared
import Hero from '../../models/Hero';

class Dashboard extends Component<any> {
  /**
   * @name onCreateClicked
   * @description triggers action to create new hero and redirect to track page
   */
  onCreateClicked = () => {
    this.props.createHero(new Hero(), this.props.history, this.props.user.uid);
  };

  signup = () => {
    this.props.history.push('/signup');
  };

  render() {
    const { user } = this.props;

    return (
      <>
        <Jumbotron header="Dragonborn" subHeader="Create, Track & Guide" />

        <TitleCard title="Create">
          <SecondaryCard
            btnText={['', 'Create']}
            label="Traditional"
            onEdit={this.onCreateClicked}
            wide
          >
            <p>Just a clean new hero sheet</p>
          </SecondaryCard>
          <SecondaryCard btnText={['', 'Create']} label="Hero Builder" wide>
            <p>
              Coming in phase 3! Step-by-step guide to creating your next hero
            </p>
          </SecondaryCard>
        </TitleCard>

        {!user ? (
          <Button btnType="Raised" color="Primary" clicked={this.signup}>
            Sign Up
          </Button>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: Dispatch<HeroActionTypes>) => ({
  createHero: (hero: Hero, route: any, uid: string) =>
    dispatch(createHero(hero, route, uid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
