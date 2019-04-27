import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Hero from '../../shared/Hero';

import Button from '../../components/button/Button';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import TitleCard from '../../components/card/title-card/TitleCard';

class Create extends Component {
  state = {
    modalOpen: false
  };

  onCreateClicked = () => {
    this.props.createHero(new Hero(), this.props.history);
  };

  clicked = () => {
    this.setState(prevState => {
      return { modalOpen: !prevState.modalOpen };
    });
  };

  render() {
    return (
      <>
        <Jumbotron header="Create" subHeader="So Begins a New Legend" />
        <TitleCard title="Traditional" readOnly>
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
        <button onClick={this.clicked}>Modal</button>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createHero: (hero, route) => dispatch(actions.createHero(hero, route))
});

export default connect(
  null,
  mapDispatchToProps
)(Create);
