// library
import React, { Component, ReactElement } from 'react';
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

// shared
import Hero from '../../../models/Hero';
import Proficiencies from '../../../shared/proficiencies';
import { updateObject } from '../../../shared/immutable';
import { HeroActionTypes } from '../../../store/hero/heroActionTypes';
import { User } from '../../../models/User';

interface ProficiencyProps {
  hero: Hero;
  proficiencies: string[];
  user: User | null;
  updateHero: (hero: Hero, uid: string) => HeroActionTypes;
}

interface ProficiencyState {
  proficiencies: string[];
  showModal: boolean;
}

// TODO: smaller slice of state

class Proficiency extends Component<ProficiencyProps, ProficiencyState> {
  state = {
    proficiencies: [...Proficiencies],
    showModal: false
  };

  /**
   * @name createProficiencyPanels
   * @description creates an array of <Panel> for each item in each proficiency of a hero
   * @param proficiencies string[]
   */
  createProficiencyPanels(proficiencies: string[]) {
    // FB sometimes deletes empty arrays so proficiencies maybe undefined
    if (proficiencies && proficiencies.length) {
      return proficiencies.map((proficiency: string, index: number) => {
        return (
          <Panel
            key={proficiency}
            label={proficiency}
            odd={index % 2 !== 0}
            onSecondaryClicked={this.onDeleteItem(proficiency)}
          >
            text
          </Panel>
        );
      });
    } else {
      return (
        <p style={{ textAlign: 'center' }}>You need to add proficiencies!</p>
      );
    }
  }

  /**
   * @name createGearPanels
   * @description creates an array of <Panel> for each passed gear item
   * @param gear gear[]
   */
  //   createGearPanels(gear: any[], equipment: any[]): ReactElement[] {
  //     // create index of equipment for quick look up
  //     const indexedEquipment: any = {};
  //     equipment.forEach((item: Gear) => {
  //       // FB sometimes deletes empty arrays so item maybe undefined
  //       if (item) {
  //         indexedEquipment[item.name] = item;
  //       }
  //     });

  //     // filter gear alread equipped
  //     const filteredGear = gear.filter(
  //       (item: Gear) => !indexedEquipment[item.name]
  //     );

  //     return filteredGear.map((item: any, index: number) => {
  //       return (
  //         <Panel
  //           key={item.name}
  //           label={this.itemLabel(item)}
  //           odd={index % 2 !== 0}
  //           onPrimaryClicked={this.onAddItem(item.type, item.name)}
  //         >
  //           {this.getDetailsComponent(item.type, item)}
  //         </Panel>
  //       );
  //     });
  //   }

  /**
   * @name onAddItem
   * @description adds choosen item to hero item list and dispatches action to update hero in FB
   * @param itemName string
   */
  // onAddItem = (type: string, itemName: string) => () => {
  //   const { hero, user } = this.props;
  //   const { gear } = this.state;

  //   const chosenItem = gear.find(({ name }: any) => name === itemName);

  //   if (chosenItem) {
  //     let updatedHero;

  //     // if [type] is a prop on the hero object add to the array
  //     if (hero[type]) {
  //       const newItemArray = hero[type].concat(chosenItem);
  //       updatedHero = updateObject(hero, {
  //         [type]: newItemArray
  //       });
  //       // create item prop on hero and adds item (sometimes FB deletes props with empty arrays)
  //     } else {
  //       updatedHero = updateObject(hero, {
  //         [type]: [chosenItem]
  //       });
  //     }

  //     if (user) {
  //       this.props.updateHero(updatedHero, user.uid);
  //     }
  //   }

  //   this.setState({ showModal: false });
  // };

  /**
   * @name onDeleteItem
   * @description removes choosen item from hero items list and dispatches action to update hero in FB
   * @param itemName string
   */
  onDeleteItem = (proficiency: string) => () => {
    const { hero, user } = this.props;

    let newItemArray = hero.proficiencies.filter(
      (item: string) => item !== proficiency
    );

    const updatedHero = updateObject(hero, {
      proficiencies: newItemArray
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
    const { proficiencies } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <BasicCard
          btnText={['', 'Add']}
          title='Proficiency'
          onEdit={this.onModalToggled}
        >
          <Accordian>{this.createProficiencyPanels(proficiencies)}</Accordian>
        </BasicCard>

        {/* <Modal
          color='Primary'
          onClose={this.onModalToggled}
          show={showModal}
          title='Add Equipment'
        >
          <Accordian>{this.createGearPanels(gear, equipment)}</Accordian>

          <div style={{ width: '100%' }}>
            <Button btnType='Flat' color='Warn' clicked={this.onModalToggled}>
              Cancel
            </Button>
          </div>
        </Modal> */}
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
)(Proficiency);
