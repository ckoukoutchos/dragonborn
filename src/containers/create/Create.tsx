import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Hero from '../../models/Hero';
import { AppState } from '../../store/rootReducer';
import { createHero } from '../../store/hero/heroActionCreators';
import { HeroActionTypes } from '../../store/hero/heroActionTypes';

import Button from '../../components/button/Button';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import TitleCard from '../../components/card/title-card/TitleCard';

interface CreateProps {
  history: History;
  user: any;
  createHero: (hero: Hero, route: any, uid: string) => HeroActionTypes;
}

/*
 * Container for Create character page
 */
class Create extends Component<CreateProps> {
  /**
   * @name onCreateClicked
   * @description triggers action to create new hero and redirect to track page
   */
  onCreateClicked = (): void => {
    this.props.createHero(new Hero(), this.props.history, this.props.user.uid);
  };

  render() {
    return (
      <>
        <Jumbotron header="Create" subHeader="So Begins a New Legend" />

        <TitleCard title="Traditional" wide>
          {/* TODO: remove inline styles */}
          <p
            style={{
              fontSize: '20px',
              margin: '4px',
              padding: '8px 4px 0 4px'
            }}
          >
            I know what I'm doing, just give me a clean sheet.
          </p>

          <Button btnType="Flat" color="Primary" clicked={this.onCreateClicked}>
            Create
          </Button>
        </TitleCard>
      </>
    );
  }
}

const mapStatetoProps = (state: AppState) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: Dispatch<HeroActionTypes>) => ({
  createHero: (hero: Hero, route: any, uid: string) =>
    dispatch(createHero(hero, route, uid))
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Create);
