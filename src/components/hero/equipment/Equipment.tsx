// library
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// store
import { AppState } from '../../../store/rootReducer';

// components
import Accordian from '../../UI/accordian/Accordian';
import BasicCard from '../../UI/card/basic-card/BasicCard';
import Button from '../../UI/button/Button';
import Modal from '../../UI/modal/Modal';
import Panel from '../../UI/accordian/panel/Panel';
import WeaponDetails from '../weapon-details/WeaponDetails';

// shared
import Weapons from '../../../shared/weapons';
import { Weapon } from '../../../models/Weapon';

class Equipment extends Component<any> {
  state = {
    showModal: false,
    weapons: [...Weapons]
  };

  onAddItem = (weaponName: string) => () => {
    const choosenWeapon = Weapons.find(
      ({ name }: Weapon) => name === weaponName
    );

    this.setState((prevState: any) => ({
      showModal: false,
      weapons: prevState.weapons.concat(choosenWeapon)
    }));
  };

  onDeleteItem = (weaponName: string) => () => {
    this.setState((prevState: any) => {
      const newArray = prevState.weapons.filter(
        ({ name }: Weapon) => name !== weaponName
      );
      return { weapons: newArray };
    });
  };

  /**
   * @name onModalToggled
   * @description toggles modal show status
   */
  onModalToggled = () => {
    this.setState((prevState: any) => ({
      showModal: !prevState.showModal
    }));
  };

  render() {
    const { showModal, weapons } = this.state;

    const weaponList = weapons.map((weapon: Weapon, index: number) => {
      return (
        <Panel
          key={index}
          label={weapon.name}
          odd={index % 2 !== 0}
          onSecondaryClicked={this.onDeleteItem(weapon.name)}
        >
          <WeaponDetails weapon={weapon} />
        </Panel>
      );
    });

    const allWeaponsList = Weapons.map((weapon: Weapon, index: number) => {
      return (
        <Panel
          key={index}
          label={weapon.name}
          odd={index % 2 !== 0}
          onPrimaryClicked={this.onAddItem(weapon.name)}
        >
          <WeaponDetails weapon={weapon} />
        </Panel>
      );
    });

    return (
      <>
        <BasicCard
          btnText={['', 'Add']}
          title='Equipment'
          onEdit={this.onModalToggled}
        >
          <Accordian>{weaponList}</Accordian>
        </BasicCard>

        <Modal
          color='Primary'
          onClose={this.onModalToggled}
          show={showModal}
          title='Add Weapon'
        >
          <Accordian>{allWeaponsList}</Accordian>

          <div style={{ width: '100%' }}>
            <Button btnType='Flat' color='Warn' clicked={this.onModalToggled}>
              Cancel
            </Button>
          </div>
        </Modal>
      </>
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
