// library
import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// store
import { AppState } from '../../../store/rootReducer';
import { updateHero } from '../../../store/hero/heroActionCreators';

// components
import classes from './Proficiency.module.css';
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

// TODO: smaller slice of state, remove style tags

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
            <p style={{ padding: '0px 8px' }}>
              Adds your proficiency bouns to all actions with this item.
            </p>
            <hr className={classes.Divide} />
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
   * @description creates an array of <Panel> for each passed proficiency
   * @param proficiencies string[]
   * @param proficiencyList string[]
   */
  createModalProficiencyPanels(
    proficiencies: string[],
    proficiencyList: string[]
  ): ReactElement[] {
    // create index of equipment for quick look up
    const indexedProficiencies: any = {};
    // FB sometimes deletes empty arrays so proficiencies maybe undefined
    if (proficiencies) {
      proficiencies.forEach((item: string) => {
        indexedProficiencies[item] = item;
      });
    }

    // filter proficiency already equipped
    const filteredProficiencies = proficiencyList.filter(
      (item: string) => !indexedProficiencies[item]
    );

    return filteredProficiencies.map((item: string, index: number) => {
      return (
        <Panel
          key={item}
          label={item}
          odd={index % 2 !== 0}
          onPrimaryClicked={this.onAddItem(item)}
        >
          Adds your proficiency bouns to all actions with this item.
        </Panel>
      );
    });
  }

  /**
   * @name onAddItem
   * @description adds choosen proficiency to hero item list and dispatches action to update hero in FB
   * @param proficiency string
   */
  onAddItem = (proficiency: string) => () => {
    const { hero, user } = this.props;
    const { proficiencies } = this.state;

    const chosenProficiency = proficiencies.find(
      (item: string) => proficiency === item
    );

    if (chosenProficiency) {
      let updatedHero;

      // if proficiencies is a prop on the hero object add to the array
      if (hero.proficiencies) {
        const newItemArray = hero.proficiencies.concat(chosenProficiency);
        updatedHero = updateObject(hero, {
          proficiencies: newItemArray
        });
        // create item prop on hero and adds item (sometimes FB deletes props with empty arrays)
      } else {
        updatedHero = updateObject(hero, {
          proficiencies: [chosenProficiency]
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
    const { hero } = this.props;
    const { proficiencies, showModal } = this.state;

    return (
      <>
        <BasicCard
          btnText={['', 'Add']}
          title='Proficiencies'
          onEdit={this.onModalToggled}
        >
          <Accordian>
            {this.createProficiencyPanels(hero.proficiencies)}
          </Accordian>
        </BasicCard>

        <Modal
          color='Primary'
          onClose={this.onModalToggled}
          show={showModal}
          title='Add Proficiency'
        >
          <Accordian>
            {this.createModalProficiencyPanels(
              hero.proficiencies,
              proficiencies
            )}
          </Accordian>

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
)(Proficiency);
