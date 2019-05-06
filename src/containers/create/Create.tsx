import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Hero from '../../shared/Hero';
import { createHero } from '../../store/hero/heroActionCreators';
import { HeroActionTypes } from '../../store/hero/heroActionTypes';

import Button from '../../components/button/Button';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import TitleCard from '../../components/card/title-card/TitleCard';

interface CreateProps {
  history: History;
  createHero: (hero: Hero, route: any) => HeroActionTypes;
}

/*
 * Container for Create character page
 */
class Create extends Component<CreateProps> {
  /**
   * @name onCreateClicked
   * @description triggers action to create new hero and redirect to track page
   * @memberof Create
   */
  onCreateClicked = (): void => {
    this.props.createHero(new Hero(), this.props.history);
  };

  render() {
    return (
      <>
        <Jumbotron header="Create" subHeader="So Begins a New Legend" />

        <TitleCard title="Traditional" readOnly>
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

const mapDispatchToProps = (dispatch: Dispatch<HeroActionTypes>) => ({
  createHero: (hero: Hero, route: any) => dispatch(createHero(hero, route))
});

export default connect(
  null,
  mapDispatchToProps
)(Create);
