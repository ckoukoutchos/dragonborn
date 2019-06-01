// library
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// store
import { AppState } from '../../../store/rootReducer';

// components
import BasicCard from '../../UI/card/basic-card/BasicCard';
import Accordian from '../../UI/accordian/Accordian';

// shared
import Weapons from '../../../shared/weapons';

class Equipment extends Component<any> {
  state = {
    weapons: Weapons
  };

  render() {
    return (
      <BasicCard title='Equipment'>
        <Accordian items={Weapons} />
      </BasicCard>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  hero: state.hero.hero
});

// const mapDispatchToProps = (dispatch: Dispatch) => ({

// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Equipment);
