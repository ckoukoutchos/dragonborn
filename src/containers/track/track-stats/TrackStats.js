import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

import BasicCard from '../../../components/card/basic-card/BasicCard';
import BlockInput from '../../../components/input/block-input/BlockInput';
import BlockInsetInput from '../../../components/input/block-inset-input/BlockInsetInput';
import Input from '../../../components/input/Input';
import SecondaryCard from '../../../components/card/secondary-card/SecondaryCard';
import TabBar from '../../../components/tab-bar/TabBar';
import TextAreaInput from '../../../components/input/textarea-input/TextAreaInput';
import TitleCard from '../../../components/card/title-card/TitleCard';
import ToggleLineInput from '../../../components/input/toggle-line-input/ToggleLineInput';

import { updateObject, updateObjectInArray } from '../../../shared/Utility';

class TrackStats extends Component {
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
    toggled: false
  };

  createAbilityInputs(abilityScores, editing) {
    return abilityScores.map((ability, index) => (
      <BlockInsetInput
        key={index}
        editing={editing.abilities}
        label={ability.name}
        onChange={this.onListInputChange(index, 'abilityScores')}
        value={ability.value}
      />
    ));
  }

  createSkillInputs(hero, editing, section) {
    return hero[section].map((skill, index) => (
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

  onInputChange = label => evt => {
    this.setState({
      hero: updateObject(this.state.hero, { [label]: evt.target.value })
    });
  };

  onListInputChange = (index, section) => evt => {
    const updatedValue = updateObjectInArray(
      this.state.hero[section],
      index,
      'value',
      evt.target.value
    );
    this.setState({
      hero: updateObject(this.state.hero, { [section]: updatedValue })
    });
  };

  onListInputToggle = (index, section) => () => {
    this.setState(prevState => {
      const updatedValue = updateObjectInArray(
        prevState.hero[section],
        index,
        'proficient',
        !prevState.hero[section][index].proficient
      );
      return {
        hero: updateObject(this.state.hero, { [section]: updatedValue })
      };
    });
  };

  onEditToggled = section => () => {
    this.setState(prevState => {
      const updatedValue = updateObject(prevState.editing, {
        [section]: !prevState.editing[section]
      });
      return { editing: updatedValue };
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
          onEdit={this.onEditToggled('basics')}
          onChange={this.onInputChange('name')}
          value={hero.name}
        >
          <Input
            label={'Class & Level'}
            editing={editing.basics}
            onChange={this.onInputChange('heroClass')}
            value={hero.heroClass}
          />
          <Input
            label="Race"
            editing={editing.basics}
            onChange={this.onInputChange('race')}
            value={hero.race}
          />
          <Input
            label="Alignment"
            editing={editing.basics}
            onChange={this.onInputChange('alignment')}
            value={hero.alignment}
          />
        </TitleCard>

        {/* Vitals */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <BasicCard
            title="Vitals"
            editing={editing.vitals}
            onEdit={this.onEditToggled('vitals')}
          >
            <BlockInput
              label="Armor Class"
              editing={editing.vitals}
              onChange={this.onInputChange('armorClass')}
              value={hero.armorClass}
            />
            <BlockInput
              label="Initiative"
              editing={editing.vitals}
              onChange={this.onInputChange('initative')}
              value={hero.initative}
            />
            <BlockInput
              label="Experience"
              editing={editing.vitals}
              onChange={this.onInputChange('xp')}
              value={hero.xp}
            />
            <BlockInput
              label="Speed"
              editing={editing.vitals}
              onChange={this.onInputChange('speed')}
              value={hero.speed}
            />
            <BlockInput
              label="Hit Points"
              editing={editing.vitals}
              onChange={this.onInputChange('currentHP')}
              value={hero.currentHP}
            />
            <BlockInput
              label="Hit Dice"
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
            onEdit={this.onEditToggled('abilities')}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {this.createAbilityInputs(hero.abilityScores, editing)}

              <div style={{ height: '24px' }} />
              <BlockInput
                label="Proficiency"
                editing={editing.abilities}
                onChange={this.onInputChange('proficiency')}
                value={hero.proficiency}
              />
              <BlockInput
                label="Inspiration"
                editing={editing.abilities}
                onChange={this.onInputChange('inspiration')}
                value={hero.inspiration}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <SecondaryCard label="Skills">
                {this.createSkillInputs(hero, editing.abilities, 'skills')}
              </SecondaryCard>
              <SecondaryCard label="Saving Throws">
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
            onEdit={this.onEditToggled('attacks')}
          >
            <TextAreaInput editing={editing.attacks} />
          </BasicCard>

          {/* Equipment */}
          <BasicCard
            title={'Equipment'}
            editing={editing.equipment}
            onEdit={this.onEditToggled('equipment')}
          >
            <TextAreaInput editing={editing.equipment} />
          </BasicCard>

          {/* Features */}
          <BasicCard
            title={'Features & Traits'}
            editing={editing.features}
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

const mapDispatchToProps = dispatch => ({
  createHero: hero => dispatch(actions.createHero(hero))
});

const mapStateToProps = state => ({
  hero: state.hero.hero
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackStats);
