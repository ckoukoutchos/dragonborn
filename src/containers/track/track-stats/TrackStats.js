import React, { Component } from 'react';

import BasicCard from '../../../components/card/basic-card/BasicCard';
import BlockInput from '../../../components/input/block-input/BlockInput';
import BlockInsetInput from '../../../components/input/block-inset-input/BlockInsetInput';
import Input from '../../../components/input/Input';
import TabBar from '../../../components/tab-bar/TabBar';
import TextAreaInput from '../../../components/input/textarea-input/TextAreaInput';
import TitleCard from '../../../components/card/title-card/TitleCard';
import ToggleList from '../../../components/toggle-list/ToggleList';
import Hero from '../../../shared/Hero';

class TrackStats extends Component {
  state = {
    editing: false,
    hero: new Hero(),
    toggled: false
  };

  createAbilitiesArray() {
    const { abilityScores } = this.state.hero;
    const abilitiesArray = [];

    for (const ability in abilityScores) {
      abilitiesArray.push(
        <BlockInsetInput
          key={ability}
          label={ability}
          editing={this.state.editing}
          value={abilityScores[ability]}
        />
      );
    }
    return abilitiesArray;
  }

  onEditToggleHandler = () => {
    this.setState(prevState => (prevState.editing = !prevState.editing));
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
          title="Thronk, Destroyer of Worlds"
          editing={this.state.editing}
          onEdit={this.onEditToggleHandler}
        >
          <Input label={'Class & Level'} editing={editing} />
          <Input label="Race" editing={editing} />
          <Input label="Alignment" editing={editing} />
        </TitleCard>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <BasicCard
            title="Vitals"
            editing={this.state.editing}
            onEdit={this.onEditToggleHandler}
          >
            <BlockInput label="Armor Class" editing={this.state.editing} />
            <BlockInput label="Initiative" editing={this.state.editing} />
            <BlockInput label="Experience" editing={this.state.editing} />
            <BlockInput
              label="Speed"
              editing={this.state.editing}
              value={this.state.hero.speed}
            />
            <BlockInput label="Hit Points" editing={this.state.editing} />
            <BlockInput label="Hit Dice" editing={this.state.editing} />
          </BasicCard>
          <BasicCard
            title={'Abilities & Skills'}
            editing={this.state.editing}
            onEdit={this.onEditToggleHandler}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {abilitiesArray}
              <div style={{ height: '24px' }} />
              <BlockInput label="Proficiency" editing={this.state.editing} />
              <BlockInput label="Inspiration" editing={this.state.editing} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ToggleList
                editing={this.state.editing}
                items={hero.abilityScores}
                label="Saving Throws"
                onToggle={this.onToggleHandler}
                toggled={this.state.toggled}
              />
              <ToggleList
                editing={this.state.editing}
                items={hero.skills}
                label="Skills"
                onToggle={this.onToggleHandler}
                toggled={this.state.toggled}
              />
            </div>
          </BasicCard>
          <BasicCard
            title={'Proficiency & Language'}
            editing={this.state.editing}
            onEdit={this.onEditToggleHandler}
          >
            <TextAreaInput editing={this.state.editing} />
          </BasicCard>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <BasicCard
            title={'Attacks & Spellcasting'}
            editing={this.state.editing}
            onEdit={this.onEditToggleHandler}
          >
            <TextAreaInput editing={this.state.editing} />
          </BasicCard>
          <BasicCard
            title={'Equipment'}
            editing={this.state.editing}
            onEdit={this.onEditToggleHandler}
          >
            <TextAreaInput editing={this.state.editing} />
          </BasicCard>
          <BasicCard
            title={'Features & Traits'}
            editing={this.state.editing}
            onEdit={this.onEditToggleHandler}
          >
            <TextAreaInput editing={this.state.editing} />
          </BasicCard>
        </div>
        <TabBar id={1} />
      </>
    );
  }
}

export default TrackStats;
