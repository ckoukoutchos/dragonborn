import React, { Component } from 'react';

import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';
import NavBar from '../../components/nav-bar/NavBar';

class HeroDetail extends Component {
  state = {
    isEditing: false
  };

  onEditToggleHandler = () => {
    this.setState(prevState => (prevState.isEditing = !prevState.isEditing));
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
          <Card>
            <Input label={'Class & Level'} edit={this.state.isEditing} />
            <Input label="Background" edit={this.state.isEditing} />
            <Input label="Race" value="Dwarf" />
            <Input label="Alignment" edit={this.state.isEditing} />
            <Input label="XP" edit={this.state.isEditing} />
            <Button
              color="Primary"
              btnType="Fab"
              clicked={this.onEditToggleHandler}
            >
              +
            </Button>
          </Card>
          <Card title="Vitals" />
          <Card title="Abilities">
            <Input label="Armor Class" edit={this.state.isEditing} />
            <Input label="Initiative" edit={this.state.isEditing} />
            <Input label="Speed" edit={this.state.isEditing} />
            <Input label="Hit Points" edit={this.state.isEditing} />
            <Input label="Hit Dice" edit={this.state.isEditing} />
            <Input label="Death Saves" edit={this.state.isEditing} />
            <Button
              color="Primary"
              btnType="Fab"
              clicked={this.onEditToggleHandler}
            >
              +
            </Button>
          </Card>
        </div>
      </>
    );
  }
}

export default HeroDetail;
