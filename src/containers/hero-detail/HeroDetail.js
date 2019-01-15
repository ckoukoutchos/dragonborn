import React, { Component } from 'react';

import Card from '../../components/card/Card';
import NavBar from '../../components/nav-bar/NavBar';
import BlockInput from '../../components/input/block-input/BlockInput';
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
    { name: 'Deception' }
  ];

  onEditToggleHandler = () => {
    this.setState(prevState => (prevState.editing = !prevState.editing));
  };

  onToggleHandler = () => {
    this.setState(prevState => (prevState.toggled = !prevState.toggled));
  };

  render() {
    const abilities = this.ablities.map(ability => (
      <BlockInput label={ability.name} editing={this.state.editing} />
    ));

    return (
      <>
        <NavBar />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '64px'
          }}
        >
          <Card
            title="Vitals"
            editing={this.state.editing}
            onEdit={this.onEditToggleHandler}
          >
            <BlockInput label="Armor Class" editing={this.state.editing} />
            <BlockInput label="Initiative" editing={this.state.editing} />
            <BlockInput label="Speed" editing={this.state.editing} />
            <BlockInput label="Hit Points" editing={this.state.editing} />
            <BlockInput label="Hit Dice" editing={this.state.editing} />
          </Card>

          <Card
            title={'Abilities & Skills'}
            editing={this.state.editing}
            onEdit={this.onEditToggleHandler}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {abilities}
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
          </Card>
        </div>
      </>
    );
  }
}

export default HeroDetail;
