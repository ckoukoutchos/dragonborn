// library
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// store
import { AppState } from '../../../store/rootReducer';

// components
import BasicCard from '../../card/basic-card/BasicCard';
import MultiLineInput from '../../input/multi-line-input/MultiLineInput';
import SecondaryCard from '../../card/secondary-card/SecondaryCard';

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

    let weapons = null;
    if (editing) {
      weapons = Weapons.map((weapon: any) => (
        <SecondaryCard
          btnColor={['Warn', 'Warn']}
          btnText={['Delete', 'Delete']}
          key={weapon.name}
          label={weapon.name}
          onEdit={() => console.log('remove')}
          wide
        >
          <MultiLineInput
            value={[
              weapon.damage.attackBonus,
              weapon.damage.numberOfDamageDice +
                'd' +
                weapon.damage.numberOfDamageDiceSides,
              weapon.damage.damageType
            ]}
            label={['Atk Bonus', 'Damage', 'Damage Type']}
          />
        </SecondaryCard>
      ));
    } else {
      weapons = Weapons.map((weapon: any) => (
        <SecondaryCard key={weapon.name} label={weapon.name} wide>
          <MultiLineInput
            value={[
              weapon.damage.attackBonus,
              weapon.damage.numberOfDamageDice +
                'd' +
                weapon.damage.numberOfDamageDiceSides,
              weapon.damage.damageType
            ]}
            label={['Atk Bonus', 'Damage', 'Damage Type']}
          />
        </SecondaryCard>
      ));
    }

    return (
      <BasicCard
        title='Equipment'
        editing={editing}
        onCancel={this.onCancelClicked}
        onEdit={this.onEditToggled}
      >
        {weapons}
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
