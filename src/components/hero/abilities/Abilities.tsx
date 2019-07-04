// library
import React, { Component, ReactElement, ChangeEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// store
import { AppState } from '../../../store/rootReducer';

// components
import BasicCard from '../../UI/card/basic-card/BasicCard';
import BlockInput from '../../UI/input/block-input/BlockInput';
import BlockInsetInput from '../../UI/input/block-inset-input/BlockInsetInput';
import SecondaryCard from '../../UI/card/secondary-card/SecondaryCard';
import ToggleLineInput from '../../UI/input/toggle-line-input/ToggleLineInput';

//shared
import {
  AbilityScores,
  SavingThrowsScores,
  SkillScores
} from '../../../models/Hero';
import { updateObject } from '../../../shared/immutable';
import { calcAbilityModifier } from '../../../shared/convert';

interface AbilitiesProps {
  abilityScores: AbilityScores;
  inspiration: number;
  proficiencyBonus: number;
  savingThrowsScores: SavingThrowsScores;
  skillScores: SkillScores;
}

interface AbilitiesState {
  editing: boolean;
  abilityScores: AbilityScores;
  inspiration: number;
  proficiencyBonus: number;
  savingThrowsScores: SavingThrowsScores;
  skillScores: SkillScores;
  updated: boolean;
}

class Abilities extends Component<AbilitiesProps, AbilitiesState> {
  state = {
    editing: false,
    abilityScores: this.props.abilityScores,
    inspiration: this.props.inspiration,
    proficiencyBonus: this.props.proficiencyBonus,
    savingThrowsScores: this.props.savingThrowsScores,
    skillScores: this.props.skillScores,
    updated: false
  };

  componentWillReceiveProps(nextProps: AbilitiesProps) {
    const newState: any = {};

    for (const [key, value] of Object.entries(nextProps)) {
      // @ts-ignore
      if (this.state[key] === value) {
        newState[key] = value;
      }
    }
    this.setState({ ...newState });
  }

  /**
   * @name createAbilityInputs
   * @description creates any array of block inset inputs for each ability score
   */
  createAbilityInputs(
    abilityScores: AbilityScores,
    editing: any
  ): ReactElement[] {
    const abilityScoreList = [];

    for (const ability in abilityScores) {
      abilityScoreList.push(
        <BlockInsetInput
          key={ability}
          editing={editing}
          label={ability}
          onChange={this.onListInputChange(ability, 'abilityScores')}
          value={abilityScores[ability]}
        />
      );
    }
    return abilityScoreList;
  }

  /**
   * @name createSkillInputs
   * @description creates an array of toggle line inputs for each skill
   */
  createSkillInputs(
    abilityScores: AbilityScores,
    savingThrowsScores: SavingThrowsScores,
    proficiencyBonus: number,
    editing: any,
    section: string
  ): ReactElement[] {
    const skillsList = [];
    const skills = abilityScores ? abilityScores : savingThrowsScores;

    for (const skill in skills) {
      // in hero ability scores, grab ability that matches ability of the skill
      let skillModifier;
      if (section === 'skillScores') {
        skillModifier = calcAbilityModifier(
          abilityScores[skills[skill].ability]
        );
      } else {
        skillModifier = calcAbilityModifier(abilityScores[skill]);
      }
      skillsList.push(
        <ToggleLineInput
          editing={editing}
          key={skill}
          label={skill}
          onToggle={this.onListInputToggle(skill, section)}
          proficient={skills[skill].proficient}
          proficientBonus={proficiencyBonus}
          value={skills[skill].value + skillModifier}
        />
      );
    }
    return skillsList;
  }

  /**
   * @name onCancelClicked
   * @description on cancel clicked, sets editing to false for section and updated to false
   */
  onCancelClicked = () => {
    // this.setState((prevState: any) => {
    //   const updatedValue = updateObject(prevState.editing, {
    //     [section]: !prevState.editing[section]
    //   });
    //   return { editing: updatedValue, updated: false };
    // });
  };

  /**
   * @name onEditToggled
   * @description updates editing status when section is toggled
   */
  onEditToggled = () => {
    // this.setState((prevState: any) => {
    //   const updatedValue = updateObject(prevState.editing, {
    //     [section]: !prevState.editing[section]
    //   });
    //   if (prevState.updated) {
    //     // @ts-ignore
    //     this.props.updateHero(prevState.hero, this.props.user.uid);
    //   }
    //   return { editing: updatedValue, updated: false };
    // });
  };

  /**
   * @name onInputChange
   * @description updates value for field on input change
   */
  onInputChange = (label: string) => (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      // @ts-ignore
      [label]: updateObject(this.state[label], { [label]: evt.target.value }),
      updated: true
    });
  };

  /**
   * @name onListInputChange
   * @description updates value for field in hero when input changes
   */
  onListInputChange = (label: string, section: string) => (
    evt: ChangeEvent<HTMLInputElement>
  ) => {
    let sectionToUpdate;
    if (section !== 'abilityScores') {
      // need to update object one layer deeper
      const updatedValue = updateObject(this.props[section][label], {
        value: evt.target.value
      });

      sectionToUpdate = updateObject(this.props[section], {
        [label]: updatedValue
      });
    } else {
      sectionToUpdate = updateObject(this.props[section], {
        [label]: evt.target.value
      });
    }

    this.setState({
      hero: updateObject(this.props, { [section]: sectionToUpdate }),
      updated: true
    });
  };

  /**
   * @name onListInputToggle
   * @description updates proficiency value for skill on hero when input is toggled
   */
  onListInputToggle = (label: string, section: string) => () => {
    this.setState((prevState: any) => {
      const updatedValue = updateObject(prevState.hero[section][label], {
        proficient: !prevState.hero[section][label].proficient
      });

      const sectionToUpdate = updateObject(this.state.hero[section], {
        [label]: updatedValue
      });

      return {
        hero: updateObject(prevState.hero, { [section]: sectionToUpdate }),
        updated: true
      };
    });
  };

  render() {
    const { editing } = this.state;
    const {
      abilityScores,
      inspiration,
      proficiencyBonus,
      savingThrowsScores,
      skillScores
    } = this.props;

    return (
      <BasicCard
        title={'Abilities & Skills'}
        editing={editing}
        onCancel={this.onCancelClicked}
        onEdit={this.onEditToggled}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {this.createAbilityInputs(abilityScores, editing)}

          <div style={{ height: '24px' }} />
          <BlockInput
            label='Proficiency'
            editing={editing}
            onChange={this.onInputChange('proficiencyBonus')}
            value={proficiencyBonus}
          />

          <BlockInput
            label='Inspiration'
            editing={editing}
            onChange={this.onInputChange('inspiration')}
            value={inspiration}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <SecondaryCard label='Skills'>
            {this.createSkillInputs(
              abilityScores,
              savingThrowsScores,
              proficiencyBonus,
              editing,
              'skillScores'
            )}
          </SecondaryCard>

          <SecondaryCard label='Saving Throws'>
            {this.createSkillInputs(
              abilityScores,
              savingThrowsScores,
              proficiencyBonus,
              editing,
              'savingThrowsScores'
            )}
          </SecondaryCard>
        </div>
      </BasicCard>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  abilityScores: state.hero.hero.abilityScores,
  inspiration: state.hero.hero.inspiration,
  proficiencyBonus: state.hero.hero.proficiencyBonus,
  savingThrowsScores: state.hero.hero.savingThrowsScores,
  skillScores: state.hero.hero.skillScores,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Abilities);
