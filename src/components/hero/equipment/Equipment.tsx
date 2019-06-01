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
    editing: false,
    updated: false,
    weapons: Weapons
  };

  /**
   * @name onCancelClicked
   * @description on cancel clicked, sets editing to false for section and updated to false
   */
  onCancelClicked = () => {
    this.setState({ editing: false, updated: false });
  };

  /**
   * @name onEditToggled
   * @description updates editing status when section is toggled
   */
  onEditToggled = () => {
    this.setState((prevState: any) => ({
      editing: !prevState.editing,
      updated: false
    }));
  };

  render() {
    const { editing } = this.state;

    return (
      <BasicCard
        title='Equipment'
        editing={editing}
        onCancel={this.onCancelClicked}
        onEdit={this.onEditToggled}
      >
        <Accordian
          label='Club'
          editing={true}
          onEdit={() => console.log('click')}
          onCancel={() => console.log('click')}
          items={[1, 2, 3]}
        >
          text
        </Accordian>
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
