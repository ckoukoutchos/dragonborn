import React, { Component } from 'react';
import { connect } from 'react-redux';

import BasicCard from '../../../components/card/basic-card/BasicCard';
import BlockInput from '../../../components/input/block-input/BlockInput';
import BlockInsetInput from '../../../components/input/block-inset-input/BlockInsetInput';
import Input from '../../../components/input/Input';
import TabBar from '../../../components/tab-bar/TabBar';
import TextAreaInput from '../../../components/input/textarea-input/TextAreaInput';
import TitleCard from '../../../components/card/title-card/TitleCard';
import ToggleList from '../../../components/toggle-list/ToggleList';

class TrackStats extends Component {
  state = {
    editing: false,
    toggled: false
  };

  createAbilitiesArray() {
    const { abilityScores } = this.props.hero;
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
    const { editing } = this.state;
    const { hero } = this.props;

    const abilitiesArray = this.createAbilitiesArray();

    return (
      <>
        <TitleCard
          title={hero.name}
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
            <BlockInput
              label="Armor Class"
              editing={this.state.editing}
              value={hero.armorClass}
            />
            <BlockInput
              label="Initiative"
              editing={this.state.editing}
              value={hero.initative}
            />
            <BlockInput
              label="Experience"
              editing={this.state.editing}
              value={hero.xp}
            />
            <BlockInput
              label="Speed"
              editing={this.state.editing}
              value={hero.speed}
            />
            <BlockInput
              label="Hit Points"
              editing={this.state.editing}
              value={hero.currentHP}
            />
            <BlockInput
              label="Hit Dice"
              editing={this.state.editing}
              value={
                hero.hitDice.numberOfDice + 'd' + hero.hitDice.numberOfSides
              }
            />
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
              {/* <ToggleList
                editing={this.state.editing}
                items={hero.abilityScores}
                label="Saving Throws"
                onToggle={this.onToggleHandler}
                toggled={this.state.toggled}
              /> */}
              <ToggleList
                editing={this.state.editing}
                items={hero.skills}
                label="Skills"
                onToggle={this.onToggleHandler}
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
        <TabBar id={this.props.match.params.id} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  hero: state.hero.hero
});

export default connect(mapStateToProps)(TrackStats);
