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
import Items from '../../../shared/items';
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
    if (type === 'items') {
      chosenItem = Items.find(({ name }: Gear) => name === itemName);
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
    if (type === 'items') {
      newItemArray = hero.items.filter(({ name }: Gear) => name !== itemName);
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
      hero: { items, tools }
    } = this.props;
    const { showModal } = this.state;

    let itemList: any = (
      <p style={{ textAlign: 'center' }}>You do not have any items!</p>
    );

    if (items && items.length) {
      itemList = items.map((item: Gear, index: number) => {
        return (
          <Panel
            key={item.name}
            label={item.name}
            odd={index % 2 !== 0}
            onSecondaryClicked={this.onDeleteItem('items', item.name)}
          >
            {/* <ArmorDetails armor={item} /> */}
          </Panel>
        );
      });
    }

    // panels for add item modal
    const allItemsList = Items.map((item: Gear, index: number) => {
      return (
        <Panel
          key={item.name}
          label={item.name}
          odd={index % 2 !== 0}
          onPrimaryClicked={this.onAddItem('items', item.name)}
        >
          {/* <ArmorDetails armor={item} /> */}
        </Panel>
      );
    });

    let toolList: any = (
      <p style={{ textAlign: 'center' }}>You do not have any tools!</p>
    );

    // panels for current hero tools
    if (tools && tools.length) {
      toolList = tools.map((tool: Gear, index: number) => {
        return (
          <Panel
            key={tool.name}
            label={tool.name}
            odd={index % 2 !== 0}
            onSecondaryClicked={this.onDeleteItem('tools', tool.name)}
          >
            {/* <WeaponDetails weapon={tool} /> */}
          </Panel>
        );
      });
    }

    // // panels for add tool modal
    const allToolsList = Tools.map((tool: Gear, index: number) => {
      return (
        <Panel
          key={tool.name}
          label={tool.name}
          odd={index % 2 !== 0}
          onPrimaryClicked={this.onAddItem('tools', tool.name)}
        >
          {/* <WeaponDetails weapon={tool} /> */}
        </Panel>
      );
    });

    return (
      <>
        <BasicCard
          btnText={['', 'Add']}
          title='Adventure Gear'
          onEdit={this.onModalToggled}
        >
          <Accordian>
            {toolList}
            {itemList}
          </Accordian>
        </BasicCard>

        <Modal
          color='Primary'
          onClose={this.onModalToggled}
          show={showModal}
          title='Add Adventure Gear'
        >
          <Accordian>{allToolsList}</Accordian>
          <Accordian>{allItemsList}</Accordian>
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
