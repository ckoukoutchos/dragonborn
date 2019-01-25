import React, { Component } from 'react';
import { connect } from 'react-redux';

import BasicCard from '../../../components/card/basic-card/BasicCard';
import BlockInput from '../../../components/input/block-input/BlockInput';
import BlockInsetInput from '../../../components/input/block-inset-input/BlockInsetInput';
import Input from '../../../components/input/Input';
import SecondaryCard from '../../../components/card/secondary-card/SecondaryCard';
import TabBar from '../../../components/tab-bar/TabBar';
import TextAreaInput from '../../../components/input/textarea-input/TextAreaInput';
import TitleCard from '../../../components/card/title-card/TitleCard';
import ToggleList from '../../../components/toggle-list/ToggleList';

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

  createAbilitiesArray() {
    const {
      editing,
      hero: { abilityScores }
    } = this.state;
    const abilitiesArray = [];

    for (const ability in abilityScores) {
      abilitiesArray.push(
        <BlockInsetInput
          key={ability}
          editing={editing.abilities}
          label={ability}
          onChange={() => console.log('lol')}
          value={abilityScores[ability]}
        />
      );
    }
    return abilitiesArray;
  }

  onInputChange = label => evt => {
    const updatedValue = {
      ...this.state.hero,
      [label]: evt.target.value
    };
    this.setState({ hero: updatedValue });
  };

  onEditToggled = section => () => {
    this.setState(
      prevState => (prevState.editing[section] = !prevState.editing[section])
    );
  };

  onToggleHandler = () => {
    this.setState(prevState => (prevState.toggled = !prevState.toggled));
  };

  render() {
    const { editing, hero } = this.state;

    const abilitiesArray = this.createAbilitiesArray();

    return (
      <>
        <TitleCard
          title={hero.name}
          editing={editing.basics}
          onEdit={this.onEditToggled('basics')}
        >
          <Input
            label={'Class & Level'}
            editing={editing.basics}
            onChange={this.onInputChange('heroClass')}
          />
          <Input
            label="Race"
            editing={editing.basics}
            onChange={this.onInputChange('race')}
          />
          <Input
            label="Alignment"
            editing={editing.basics}
            onChange={this.onInputChange('alignment')}
          />
        </TitleCard>
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
          <BasicCard
            title={'Abilities & Skills'}
            editing={editing.abilities}
            onEdit={this.onEditToggled('abilities')}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {abilitiesArray}
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
                <ToggleList
                  editing={editing.abilities}
                  items={hero.skills}
                  onToggle={this.onToggleHandler}
                />
              </SecondaryCard>
              <SecondaryCard label="Saving Throws">
                <ToggleList
                  editing={editing.abilities}
                  items={hero.savingThrows}
                  onToggle={this.onToggleHandler}
                  toggled={this.state.toggled}
                />
              </SecondaryCard>
            </div>
          </BasicCard>
          <BasicCard
            title={'Proficiency & Language'}
            editing={editing.proficiencies}
            onEdit={this.onEditToggled('proficiencies')}
          >
            <TextAreaInput editing={editing.proficiencies} />
          </BasicCard>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <BasicCard
            title={'Attacks & Spellcasting'}
            editing={editing.attacks}
            onEdit={this.onEditToggled('attacks')}
          >
            <TextAreaInput editing={editing.attacks} />
          </BasicCard>
          <BasicCard
            title={'Equipment'}
            editing={editing.equipment}
            onEdit={this.onEditToggled('equipment')}
          >
            <TextAreaInput editing={editing.equipment} />
          </BasicCard>
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

const mapStateToProps = state => ({
  hero: state.hero.hero
});

export default connect(mapStateToProps)(TrackStats);
