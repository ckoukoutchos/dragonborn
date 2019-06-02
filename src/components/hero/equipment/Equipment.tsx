// library
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// store
import { AppState } from '../../../store/rootReducer';
import { updateHero } from '../../../store/hero/heroActionCreators';

// components
import Accordian from '../../UI/accordian/Accordian';
import BasicCard from '../../UI/card/basic-card/BasicCard';
import Button from '../../UI/button/Button';
import Modal from '../../UI/modal/Modal';
import Panel from '../../UI/accordian/panel/Panel';
import WeaponDetails from '../weapon-details/WeaponDetails';

// shared
import Hero from '../../../models/Hero';
import Weapons from '../../../shared/weapons';
import { Weapon } from '../../../models/Weapon';
import { updateObject } from '../../../shared/immutable';
import { HeroActionTypes } from '../../../store/hero/heroActionTypes';
import { User } from '../../../models/User';

interface EquipmentProps {
  hero: Hero;
  user: User | null;
  updateHero: (hero: Hero, uid: string) => HeroActionTypes;
}

interface EquipmentState {
  showModal: boolean;
}

class Equipment extends Component<EquipmentProps, EquipmentState> {
  state = {
    showModal: false
  };

  /**
   * @name onAddItem
   * @description adds choosen weapon to hero weapons list and dispatches action to update hero in FB
   * @param weaponName string
   */
  onAddItem = (weaponName: string) => () => {
    const { hero, user } = this.props;

    const choosenWeapon = Weapons.find(
      ({ name }: Weapon) => name === weaponName
    );

    let updatedHero;

    if (choosenWeapon) {
      // if weapons is a prop on the hero object add to weapons array
      if (hero.weapons) {
        const newWeaponArray = hero.weapons.concat(choosenWeapon);
        updatedHero = updateObject(hero, {
          weapons: newWeaponArray
        });

        // create weapons prop on hero and adds weapon (sometimes FB deletes props with empty arrays)
      } else {
        updatedHero = updateObject(hero, {
          weapons: [choosenWeapon]
        });
      }

      if (user) {
        this.props.updateHero(updatedHero, user.uid);
      }
    }

    this.setState({ showModal: false });
  };

  /**
   * @name onDeleteItem
   * @description removes choosen weapon from hero weapons list and dispatches action to update hero in FB
   * @param weaponName string
   */
  onDeleteItem = (weaponName: string) => () => {
    const newWeaponArray = this.props.hero.weapons.filter(
      ({ name }: Weapon) => name !== weaponName
    );
    const updatedHero = updateObject(this.props.hero, {
      weapons: newWeaponArray
    });

    if (this.props.user) {
      this.props.updateHero(updatedHero, this.props.user.uid);
    }
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
    const {
      hero: { weapons }
    } = this.props;
    const { showModal } = this.state;

    let weaponList: any = (
      <p style={{ textAlign: 'center' }}>You do not have any weapons!</p>
    );

    // panels for current hero weapons
    if (weapons) {
      weaponList = weapons.map((weapon: Weapon, index: number) => {
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
    }

    // panels for add weapon modal
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
  hero: state.hero.hero,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateHero: (hero: Hero, uid: string) => dispatch(updateHero(hero, uid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Equipment);
