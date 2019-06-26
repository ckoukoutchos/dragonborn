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
import Weapons from '../../../shared/weapons';
import Armors from '../../../shared/armors';
import Items from '../../../shared/items';
import Tools from '../../../shared/tools';
import { Armor, Weapon, Gear, GearTypes } from '../../../models/Gear';
import { updateObject } from '../../../shared/immutable';
import { HeroActionTypes } from '../../../store/hero/heroActionTypes';
import { User } from '../../../models/User';

interface EquipmentProps {
  hero: Hero;
  user: User | null;
  updateHero: (hero: Hero, uid: string) => HeroActionTypes;
}

interface EquipmentState {
  gear: any[];
  showModal: boolean;
}

// TODO: remove style tags, smaller slice of state, func docs

class Equipment extends Component<EquipmentProps, EquipmentState> {
  state = {
    // eventually will be from json on server
    gear: [...Weapons, ...Armors, ...Tools, ...Items],
    showModal: false
  };

  createEquipmentPanels(hero: Hero) {
    const equipment = [];

    for (const [key, type] of Object.entries(GearTypes)) {
      // check if [type] is prop on hero, sometimes FB deletes props with empty arrays
      if (hero[type] && hero[type].length) {
        // for each GearType, create panels for items in those types
        const panels = hero[type].map(
          (item: Gear | Armor | Weapon, index: number) => (
            <Panel
              key={item.name}
              label={item.name}
              odd={index % 2 !== 0}
              onSecondaryClicked={this.onDeleteItem(type, item.name)}
            >
              {this.getDetailsComponent(type, item)}
            </Panel>
          )
        );
        equipment.push(panels);
      }
    }

    return equipment;
  }

  createGearPanels(gear: any[]) {
    return gear.map((item: any, index: number) => (
      <Panel
        key={item.name}
        label={item.name}
        odd={index % 2 !== 0}
        onPrimaryClicked={this.onAddItem(item.type, item.name)}
      >
        {this.getDetailsComponent(item.type, item)}
      </Panel>
    ));
  }

  getDetailsComponent(gearType: string, item: Gear | Armor | Weapon) {
    switch (gearType) {
      case 'weapons':
        //@ts-ignore
        return <WeaponDetails weapon={item} />;
      case 'armor':
        //@ts-ignore
        return <ArmorDetails armor={item} />;
      default:
        return;
    }
  }

  /**
   * @name onAddItem
   * @description adds choosen item to hero item list and dispatches action to update hero in FB
   * @param itemName string
   */
  onAddItem = (type: string, itemName: string) => () => {
    const { hero, user } = this.props;
    const { gear } = this.state;

    const chosenItem = gear.find(({ name }: any) => name === itemName);

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

    let newItemArray = hero[type].filter(
      ({ name }: Weapon | Armor | Gear) => name !== itemName
    );

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
    const { hero } = this.props;
    const { gear, showModal } = this.state;

    return (
      <>
        <BasicCard
          btnText={['', 'Add']}
          title='Equipment'
          onEdit={this.onModalToggled}
        >
          <Accordian>{this.createEquipmentPanels(hero)}</Accordian>
        </BasicCard>

        <Modal
          color='Primary'
          onClose={this.onModalToggled}
          show={showModal}
          title='Add Equipment'
        >
          <Accordian>{this.createGearPanels(gear)}</Accordian>

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
