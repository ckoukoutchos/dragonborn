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
import BasicCard from '../../../components/card/basic-card/BasicCard';
import BlockInput from '../../../components/input/block-input/BlockInput';
import BlockInsetInput from '../../../components/input/block-inset-input/BlockInsetInput';
import Input from '../../../components/input/Input';
import SecondaryCard from '../../../components/card/secondary-card/SecondaryCard';
import Dropdown from '../../../components/dropdown/Dropdown';
import TabBar from '../../../components/tab-bar/TabBar';
import TextAreaInput from '../../../components/input/textarea-input/TextAreaInput';
import TitleCard from '../../../components/card/title-card/TitleCard';
import ToggleLineInput from '../../../components/input/toggle-line-input/ToggleLineInput';

// shared
import { updateObject, updateObjectInArray } from '../../../shared/immutable';
import Hero, { AbilityScore, SavingThrow, Skill, Races } from '../../../models/Hero';
import { User } from '../../../models/User';

// TODO:  refactor, remove style tags, use loops to repeat similar sections, use object fields to generate labels rather than strings?

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
    [key: string]: any
  };
  hero: Hero;
  toggled: boolean;
  updated: boolean;
  [key: string]: any
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
  createAbilityInputs(abilityScores: AbilityScore[], editing: any): ReactElement[] {
    return abilityScores.map((ability: AbilityScore, index: number) => (
      <BlockInsetInput
        key={index}
        editing={editing.abilities}
        label={ability.name}
        onChange={this.onListInputChange(index, 'abilityScores')}
        value={ability.value}
      />
    ));
  }

  /**
   * @name createSkillInputs
   * @description creates an array of toggle line inputs for each skill
   */
  createSkillInputs(hero: Hero, editing: any, section: string): ReactElement[] {
    return hero[section].map((skill: SavingThrow | Skill, index: number) => (
      <ToggleLineInput
        key={index}
        label={skill.name}
        editing={editing}
        onChange={this.onListInputChange(index, section)}
        onToggle={this.onListInputToggle(index, section)}
        proficient={skill.proficient}
        proficientBonus={hero.proficiency}
        value={skill.value}
      />
    ));
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
  onListInputChange = (index: number, section: string) => (evt: ChangeEvent<HTMLInputElement>) => {
    const updatedValue = updateObjectInArray(
      this.state.hero[section],
      index,
      'value',
      evt.target.value
    );
    this.setState({
      hero: updateObject(this.state.hero, { [section]: updatedValue }),
      updated: true
    });
  };

  /**
   * @name onListInputToggle
   * @description updates proficiency value for skill on hero when input is toggled
   */
  onListInputToggle = (index: number, section: string) => () => {
    this.setState((prevState: TrackStatsState) => {
      const updatedValue = updateObjectInArray(
        prevState.hero[section],
        index,
        'proficient',
        !prevState.hero[section][index].proficient
      );
      return {
        hero: updateObject(prevState.hero, { [section]: updatedValue }),
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
          <Input
            label={'Class & Level'}
            editing={editing.basics}
            onChange={this.onInputChange('heroClass')}
            value={hero.heroClass}
          />

          <Input
            label='Race'
            editing={editing.basics}
            onChange={this.onInputChange('race')}
            value={hero.race}
          />

          <Dropdown optObj={Races} value={hero.race}></Dropdown>

          <Input
            label='Alignment'
            editing={editing.basics}
            onChange={this.onInputChange('alignment')}
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
              value={hero.armorClass}
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
              value={
                hero.hitDice.numberOfDice + 'd' + hero.hitDice.numberOfSides
              }
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
                onChange={this.onInputChange('proficiency')}
                value={hero.proficiency}
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
                {this.createSkillInputs(hero, editing.abilities, 'skills')}
              </SecondaryCard>

              <SecondaryCard label='Saving Throws'>
                {this.createSkillInputs(
                  hero,
                  editing.abilities,
                  'savingThrows'
                )}
              </SecondaryCard>
            </div>
          </BasicCard>

          {/* Proficiencies */}
          <BasicCard
            title={'Proficiency & Language'}
            editing={editing.proficiencies}
            onCancel={this.onCancelClicked('proficiencies')}
            onEdit={this.onEditToggled('proficiencies')}
          >
            <TextAreaInput editing={editing.proficiencies} />
          </BasicCard>
        </div>

        {/* Attacks */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <BasicCard
            title={'Attacks & Spellcasting'}
            editing={editing.attacks}
            onCancel={this.onCancelClicked('attacks')}
            onEdit={this.onEditToggled('attacks')}
          >
            <TextAreaInput editing={editing.attacks} />
          </BasicCard>

          {/* Equipment */}
          <BasicCard
            title={'Equipment'}
            editing={editing.equipment}
            onCancel={this.onCancelClicked('equipment')}
            onEdit={this.onEditToggled('equipment')}
          >
            <TextAreaInput editing={editing.equipment} />
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
