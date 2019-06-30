// library
import React, { Component, ChangeEvent, ReactElement } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// store
import { AppState } from '../../../store/rootReducer';
import {
  fetchHero,
  getHero,
  updateHero
} from '../../../store/hero/heroActionCreators';
import { HeroActionTypes } from '../../../store/hero/heroActionTypes';

// components
import Attacks from '../../../components/hero/attacks/Attacks';
import BasicCard from '../../../components/UI/card/basic-card/BasicCard';
import BlockInput from '../../../components/UI/input/block-input/BlockInput';
import BlockInsetInput from '../../../components/UI/input/block-inset-input/BlockInsetInput';
import Dropdown from '../../../components/UI/dropdown/Dropdown';
import Equipment from '../../../components/hero/equipment/Equipment';
import Proficiency from '../../../components/hero/proficiencies/Proficiency';
import SecondaryCard from '../../../components/UI/card/secondary-card/SecondaryCard';
import TabBar from '../../../components/UI/tab-bar/TabBar';
import TextAreaInput from '../../../components/UI/input/textarea-input/TextAreaInput';
import TitleCard from '../../../components/UI/card/title-card/TitleCard';
import ToggleLineInput from '../../../components/UI/input/toggle-line-input/ToggleLineInput';

// shared
import { updateObject } from '../../../shared/immutable';
import Hero, {
  AbilityScores,
  Races,
  Alignments,
  HeroClasses
} from '../../../models/Hero';
import { User } from '../../../models/User';
import { calcAbilityModifier } from '../../../shared/convert';

// TODO:  refactor, remove style tags, move to own components

interface TrackStatsProps {
  hero: any;
  history: any;
  match: any;
  user: User | null;
  fetchHero: (heroId: number, uid: string) => HeroActionTypes;
  getHero: (heroId: number) => HeroActionTypes;
  updateHero: (hero: Hero, uid: string) => HeroActionTypes;
}

interface TrackStatsState {
  editing: {
    abilities: boolean;
    attacks: boolean;
    basics: boolean;
    equipment: boolean;
    features: boolean;
    proficiencies: boolean;
    vitals: boolean;
    [key: string]: any;
  };
  hero: Hero;
  toggled: boolean;
  updated: boolean;
  [key: string]: any;
}

/*
 * trackstats container widget
 */
class TrackStats extends Component<TrackStatsProps, TrackStatsState> {
  state = {
    editing: {
      abilities: false,
      attacks: false,
      basics: false,
      equipment: false,
      features: false,
      proficiencies: false,
      vitals: false
    },
    hero: this.props.hero,
    toggled: false,
    updated: false
  };

  componentDidMount() {
    if (this.props.hero.id !== this.props.match.params.id) {
      this.props.history.push('/track');
    }
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
          editing={editing.abilities}
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
  createSkillInputs(hero: Hero, editing: any, section: string): ReactElement[] {
    const { abilityScores } = hero;
    const skills = hero[section];
    const skillsList = [];

    // TODO: rework to use only calculated values for skill or actually use skill value

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
          proficientBonus={hero.proficiencyBonus}
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
  onCancelClicked = (section: string) => () => {
    this.setState((prevState: TrackStatsState) => {
      const updatedValue = updateObject(prevState.editing, {
        [section]: !prevState.editing[section]
      });
      return { editing: updatedValue, updated: false };
    });
  };

  /**
   * @name onDropdownSelection
   * @description on dropdown selection, update hero value
   */
  onDropdownSelection = (label: string) => (value: string) => {
    this.setState({
      hero: updateObject(this.state.hero, { [label]: value }),
      updated: true
    });
  };

  /**
   * @name onInputChange
   * @description updates value for field on input change
   */
  onInputChange = (label: string) => (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      hero: updateObject(this.state.hero, { [label]: evt.target.value }),
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
      const updatedValue = updateObject(this.state.hero[section][label], {
        value: evt.target.value
      });

      sectionToUpdate = updateObject(this.state.hero[section], {
        [label]: updatedValue
      });
    } else {
      sectionToUpdate = updateObject(this.state.hero[section], {
        [label]: evt.target.value
      });
    }

    this.setState({
      hero: updateObject(this.state.hero, { [section]: sectionToUpdate }),
      updated: true
    });
  };

  /**
   * @name onListInputToggle
   * @description updates proficiency value for skill on hero when input is toggled
   */
  onListInputToggle = (label: string, section: string) => () => {
    this.setState((prevState: TrackStatsState) => {
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

  /**
   * @name onEditToggled
   * @description updates editing status when section is toggled
   */
  onEditToggled = (section: string) => () => {
    this.setState((prevState: TrackStatsState) => {
      const updatedValue = updateObject(prevState.editing, {
        [section]: !prevState.editing[section]
      });

      if (prevState.updated) {
        // @ts-ignore
        this.props.updateHero(prevState.hero, this.props.user.uid);
      }

      return { editing: updatedValue, updated: false };
    });
  };

  render() {
    const { editing, hero } = this.state;

    return (
      <>
        {/* Basic */}
        <TitleCard
          title={hero.name}
          editing={editing.basics}
          onCancel={this.onCancelClicked('basics')}
          onEdit={this.onEditToggled('basics')}
          onChange={this.onInputChange('name')}
          value={hero.name}
          wide
        >
          <Dropdown
            disabled={!editing.basics}
            label='Class'
            onSelected={this.onDropdownSelection('heroClass')}
            optObj={HeroClasses}
            value={hero.heroClass}
          />

          <Dropdown
            disabled={!editing.basics}
            label='Race'
            onSelected={this.onDropdownSelection('race')}
            optObj={Races}
            value={hero.race}
          />

          <Dropdown
            disabled={!editing.basics}
            label='Alignment'
            onSelected={this.onDropdownSelection('alignment')}
            optObj={Alignments}
            value={hero.alignment}
          />
        </TitleCard>

        {/* Vitals */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <BasicCard
            title='Vitals'
            editing={editing.vitals}
            onCancel={this.onCancelClicked('vitals')}
            onEdit={this.onEditToggled('vitals')}
          >
            <BlockInput
              label='Armor Class'
              editing={editing.vitals}
              onChange={this.onInputChange('armorClass')}
              value={
                hero.armor && hero.armor.length ? hero.armor[0].armorClass : 0
              }
            />

            <BlockInput
              label='Initiative'
              editing={editing.vitals}
              onChange={this.onInputChange('initative')}
              value={hero.initative}
            />

            <BlockInput
              label='Experience'
              editing={editing.vitals}
              onChange={this.onInputChange('xp')}
              value={hero.xp}
            />

            <BlockInput
              label='Speed'
              editing={editing.vitals}
              onChange={this.onInputChange('speed')}
              value={hero.speed}
            />

            <BlockInput
              label='Hit Points'
              editing={editing.vitals}
              onChange={this.onInputChange('currentHP')}
              value={hero.currentHP}
            />

            <BlockInput
              label='Hit Dice'
              editing={editing.vitals}
              onChange={this.onInputChange('numberOfDice')}
              value={hero.numberOfHitDice + 'd' + hero.numberOfHitDiceSides}
            />
          </BasicCard>

          {/* Abilities */}
          <BasicCard
            title={'Abilities & Skills'}
            editing={editing.abilities}
            onCancel={this.onCancelClicked('abilities')}
            onEdit={this.onEditToggled('abilities')}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {this.createAbilityInputs(hero.abilityScores, editing)}

              <div style={{ height: '24px' }} />
              <BlockInput
                label='Proficiency'
                editing={editing.abilities}
                onChange={this.onInputChange('proficiencyBonus')}
                value={hero.proficiencyBonus}
              />

              <BlockInput
                label='Inspiration'
                editing={editing.abilities}
                onChange={this.onInputChange('inspiration')}
                value={hero.inspiration}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <SecondaryCard label='Skills'>
                {this.createSkillInputs(hero, editing.abilities, 'skillScores')}
              </SecondaryCard>

              <SecondaryCard label='Saving Throws'>
                {this.createSkillInputs(
                  hero,
                  editing.abilities,
                  'savingThrowsScores'
                )}
              </SecondaryCard>
            </div>
          </BasicCard>
        </div>

        {/* Attacks */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Attacks />

          <Equipment />

          <Proficiency />
          {/* Proficiencies */}
          <BasicCard
            title={'Proficiency & Language'}
            editing={editing.proficiencies}
            onCancel={this.onCancelClicked('proficiencies')}
            onEdit={this.onEditToggled('proficiencies')}
          >
            <TextAreaInput editing={editing.proficiencies} />
          </BasicCard>

          {/* Features */}
          <BasicCard
            title={'Features & Traits'}
            editing={editing.features}
            onCancel={this.onCancelClicked('features')}
            onEdit={this.onEditToggled('features')}
          >
            <TextAreaInput editing={editing.features} />
          </BasicCard>
        </div>
        <TabBar id={this.props.match.params.id} />
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  hero: state.hero.hero,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchHero: (heroId: number, uid: string) => dispatch(fetchHero(heroId, uid)),
  getHero: (heroId: number) => dispatch(getHero(heroId)),
  updateHero: (hero: Hero, uid: string) => dispatch(updateHero(hero, uid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackStats);
