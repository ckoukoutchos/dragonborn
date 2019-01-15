import React, { Component } from 'react';

import Card from '../../components/card/Card';
import NavBar from '../../components/nav-bar/NavBar';
import SmBlockInput from '../../components/input/sm-block-input/SmBlockInput';
import ToggleLineInput from '../../components/input/toggle-line-input/ToggleLineInput';

class HeroDetail extends Component {
  state = {
    editing: false,
    toggled: false
  };

  onEditToggleHandler = () => {
    this.setState(prevState => (prevState.editing = !prevState.editing));
  };

  onToggleHandler = () => {
    this.setState(prevState => (prevState.toggled = !prevState.toggled));
  };

  render() {
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
            <SmBlockInput label="Armor Class" editing={this.state.editing} />
            <SmBlockInput label="Initiative" editing={this.state.editing} />
            <SmBlockInput label="Speed" editing={this.state.editing} />
            <SmBlockInput label="Hit Points" editing={this.state.editing} />
            <SmBlockInput label="Hit Dice" editing={this.state.editing} />
          </Card>

          <Card
            title={'Abilities & Skills'}
            editing={this.state.editing}
            onEdit={this.onEditToggleHandler}
          >
            <ToggleLineInput
              label="Strength"
              editing={this.state.editing}
              onToggle={this.onToggleHandler}
              toggled={this.state.toggled}
            />
          </Card>
        </div>
      </>
    );
  }
}

export default HeroDetail;
