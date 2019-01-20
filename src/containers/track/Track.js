import React, { Component } from 'react';

import Input from '../../components/input/Input';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import TitleCard from '../../components/card/title-card/TitleCard';

class Track extends Component {
  state = {
    class: 'Barbarian',
    level: 3,
    race: 'Half-orc',
    alignment: 'Chaotic Neutral'
  };

  onHeroSelection = () => {
    this.props.history.push('/track/1/stats');
  };

  render() {
    return (
      <>
        <Jumbotron header="Track" subHeader="Keep Tabs on your Heroes" />
        <TitleCard title="Thronk, Destroyer of Worlds" readOnly>
          <Input
            label={'Class & Level'}
            value={this.state.class + ' ' + this.state.level}
          />
          <Input label="Race" value={this.state.race} />
          <Input label="Alignment" value={this.state.alignment} />
        </TitleCard>
        <TitleCard title="Valarian" readOnly>
          <Input label={'Class & Level'} value="Ranger 1" />
          <Input label="Race" value="Elf" />
          <Input label="Alignment" value="Chaotic Good" />
        </TitleCard>
      </>
    );
  }
}

export default Track;
