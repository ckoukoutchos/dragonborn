// library
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// store
import { AppState } from '../../../store/rootReducer';
import { updateHero } from '../../../store/hero/heroActionCreators';

// components
import Accordian from '../../UI/accordian/Accordian';
import ArmorDetails from '../armor-details/ArmorDetails';
import BasicCard from '../../UI/card/basic-card/BasicCard';
import Button from '../../UI/button/Button';
import Modal from '../../UI/modal/Modal';
import Panel from '../../UI/accordian/panel/Panel';
import WeaponDetails from '../weapon-details/WeaponDetails';

// shared
import Hero from '../../../models/Hero';
import Gears from '../../../shared/gears';
import Tools from '../../../shared/tools';
import { Armor, Gear, Weapon } from '../../../models/Gear';
import { updateObject } from '../../../shared/immutable';
import { HeroActionTypes } from '../../../store/hero/heroActionTypes';
import { User } from '../../../models/User';

interface GearProps {
  hero: Hero;
  user: User | null;
  updateHero: (hero: Hero, uid: string) => HeroActionTypes;
}

interface GearState {
  showModal: boolean;
}

// TODO: remove style tags, clean up render func, smaller slice of state

class AdventureGear extends Component<GearProps, GearState> {
  state = {
    showModal: false
  };

  /**
   * @name onAddItem
   * @description adds choosen item to hero item list and dispatches action to update hero in FB
   * @param itemName string
   */
  onAddItem = (type: string, itemName: string) => () => {
    const { hero, user } = this.props;

    let chosenItem;
    if (type === 'gear') {
      chosenItem = Gears.find(({ name }: Gear) => name === itemName);
    } else {
      chosenItem = Tools.find(({ name }: Gear) => name === itemName);
    }

    if (chosenItem) {
      let updatedHero;

      // if [type] is a prop on the hero object add to the array
      if (hero[type]) {
        const newItemArray = hero[type].concat(chosenItem);
        updatedHero = updateObject(hero, {
          [type]: newItemArray
        });

        // create item prop on hero and adds item (sometimes FB deletes props with empty arrays)
      } else {
        updatedHero = updateObject(hero, {
          [type]: [chosenItem]
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
   * @description removes choosen item from hero items list and dispatches action to update hero in FB
   * @param itemName string
   */
  onDeleteItem = (type: string, itemName: string) => () => {
    const { hero, user } = this.props;

    let newItemArray;
    if (type === 'gear') {
      newItemArray = hero.gear.filter(({ name }: Gear) => name !== itemName);
    } else {
      newItemArray = hero.tools.filter(({ name }: Gear) => name !== itemName);
    }

    const updatedHero = updateObject(hero, {
      [type]: newItemArray
    });

    if (user) {
      this.props.updateHero(updatedHero, user.uid);
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
      hero: { gear }
    } = this.props;
    const { showModal } = this.state;

    let armorList: any = (
      <p style={{ textAlign: 'center' }}>You do not have any armor!</p>
    );

    if (gear && gear.length) {
      armorList = gear.map((gear: Armor, index: number) => {
        return (
          <Panel
            key={gear.name}
            label={gear.name}
            odd={index % 2 !== 0}
            onSecondaryClicked={this.onDeleteItem('armor', gear.name)}
          >
            <ArmorDetails armor={gear} />
          </Panel>
        );
      });
    }

    // panels for add item modal
    // const allArmorsList = Armors.map((armor: Armor, index: number) => {
    //   return (
    //     <Panel
    //       key={armor.name}
    //       label={armor.name}
    //       odd={index % 2 !== 0}
    //       onPrimaryClicked={this.onAddItem('armor', armor.name)}
    //     >
    //       <ArmorDetails armor={armor} />
    //     </Panel>
    //   );
    // });

    let weaponList: any = (
      <p style={{ textAlign: 'center' }}>You do not have any weapons!</p>
    );

    // panels for current hero weapons
    // if (weapons && weapons.length) {
    //   weaponList = weapons.map((weapon: Weapon, index: number) => {
    //     return (
    //       <Panel
    //         key={weapon.name}
    //         label={weapon.name}
    //         odd={index % 2 !== 0}
    //         onSecondaryClicked={this.onDeleteItem('weapons', weapon.name)}
    //       >
    //         <WeaponDetails weapon={weapon} />
    //       </Panel>
    //     );
    //   });
    // }

    // // panels for add weapon modal
    // const allWeaponsList = Weapons.map((weapon: Weapon, index: number) => {
    //   return (
    //     <Panel
    //       key={weapon.name}
    //       label={weapon.name}
    //       odd={index % 2 !== 0}
    //       onPrimaryClicked={this.onAddItem('weapons', weapon.name)}
    //     >
    //       <WeaponDetails weapon={weapon} />
    //     </Panel>
    //   );
    // });

    return (
      <>
        <BasicCard
          btnText={['', 'Add']}
          title='Equipment'
          onEdit={this.onModalToggled}
        >
          <Accordian>
            {weaponList}
            {armorList}
          </Accordian>
        </BasicCard>

        <Modal
          color='Primary'
          onClose={this.onModalToggled}
          show={showModal}
          title='Add Equipment'
        >
          {/* <Accordian>{allWeaponsList}</Accordian> */}
          {/* <Accordian>{allArmorsList}</Accordian> */}

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
)(AdventureGear);
