// library
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// store
import { AppState } from '../../store/rootReducer';
import { createHero } from '../../store/hero/heroActionCreators';
import { HeroActionTypes } from '../../store/hero/heroActionTypes';

// components
import SecondaryCard from '../../components/card/secondary-card/SecondaryCard';
import TitleCard from '../../components/card/title-card/TitleCard';

// shared
import Hero from '../../models/Hero';

interface CreateProps {
  history: History;
  user: any;
  createHero: (hero: Hero, route: any, uid: string) => HeroActionTypes;
}

/*
 * Container for Create hero widget
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
      <TitleCard subTitle="So begins a new legend..." title="Create">
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
            Step-by-step guide to creating your next hero! Coming in phase 3.
          </p>
        </SecondaryCard>
      </TitleCard>
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
