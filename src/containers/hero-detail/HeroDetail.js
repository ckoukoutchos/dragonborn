import React, { Component } from 'react';

import BasicCard from '../../components/card/basic-card/BasicCard';
import BlockInput from '../../components/input/block-input/BlockInput';
import BlockInsetInput from '../../components/input/block-inset-input/BlockInsetInput';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import TableBlockInput from '../../components/input/table-block-input/TableBlockInput';
import TextAreaInput from '../../components/input/textarea-input/TextAreaInput';
import TitleCard from '../../components/card/title-card/TitleCard';
import ToggleList from '../../components/toggle-list/ToggleList';

class HeroDetail extends Component {
  state = {
    editing: false,
    toggled: false
  };

  ablities = [
    { name: 'Strength' },
    { name: 'Dexterity' },
    { name: 'Constitution' },
    { name: 'Intelligence' },
    { name: 'Wisdom' },
    { name: 'Charisma' }
  ];

  skills = [
    { name: 'Acrobatics' },
    { name: 'Animal Herding' },
    { name: 'Arcana' },
    { name: 'Athletics' },
    { name: 'Deception' },
    { name: 'Histroy' },
    { name: 'Insight' },
    { name: 'Intimidation' },
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
    { name: '7' },
    { name: '8' },
    { name: '9' }
  ];

  onEditToggleHandler = () => {
    this.setState(prevState => (prevState.editing = !prevState.editing));
  };

  onToggleHandler = () => {
    this.setState(prevState => (prevState.toggled = !prevState.toggled));
  };

  render() {
    const abilities = this.ablities.map(ability => (
      <BlockInsetInput
        key={ability.name}
        label={ability.name}
        editing={this.state.editing}
        value={17}
      />
    ));

    return (
      <>
        <TitleCard
          title="Thronk, Destroyer of Worlds"
          editing={this.state.editing}
          onEdit={this.onEditToggleHandler}
        >
          <Input label={'Class & Level'} editing={this.state.editing} />
          <Input label="Race" editing={this.state.editing} />
          <Input label="Alignment" editing={this.state.editing} />
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
            <BlockInput label="Speed" editing={this.state.editing} />
            <BlockInput label="Hit Points" editing={this.state.editing} />
            <BlockInput label="Hit Dice" editing={this.state.editing} />
          </BasicCard>
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

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <BasicCard
            title={'Abilities & Skills'}
            editing={this.state.editing}
            onEdit={this.onEditToggleHandler}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {abilities}
              <div style={{ height: '24px' }} />
              <BlockInput label="Proficiency" editing={this.state.editing} />
              <BlockInput label="Inspiration" editing={this.state.editing} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ToggleList
                editing={this.state.editing}
                items={this.ablities}
                label="Saving Throws"
                onToggle={this.onToggleHandler}
                toggled={this.state.toggled}
              />
              <ToggleList
                editing={this.state.editing}
                items={this.skills}
                label="Skills"
                onToggle={this.onToggleHandler}
                toggled={this.state.toggled}
              />
            </div>
          </BasicCard>
          <BasicCard
            title={'Proficiencies & Languages'}
            editing={this.state.editing}
            onEdit={this.onEditToggleHandler}
          >
            <TextAreaInput editing={this.state.editing} />
          </BasicCard>
        </div>
      </>
    );
  }
}

export default HeroDetail;
