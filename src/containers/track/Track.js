import React, { Component } from 'react';

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import TitleCard from '../../components/card/title-card/TitleCard';

class Track extends Component {
  render() {
    return (
      <>
        <Jumbotron header="Track" subHeader="Keep Tabs on your Heroes" />
        <TitleCard title="Thronk, Destroyer of Worlds" readOnly>
          <Input label={'Class & Level'} value="Barbarian 3" />
          <Input label="Race" value="Half-Orc" />
          <Input label="Alignment" value="Chaotic Neutral" />
        </TitleCard>
        <Button color="Primary" btnType="Raised">
          View
        </Button>
        <Button color="Secondary" btnType="Raised">
          Delete
        </Button>
        <TitleCard title="Valarian" readOnly>
          <Input label={'Class & Level'} value="Ranger 1" />
          <Input label="Race" value="Elf" />
          <Input label="Alignment" value="Chaotic Good" />
        </TitleCard>
        <Button color="Primary" btnType="Raised">
          View
        </Button>
        <Button color="Secondary" btnType="Raised">
          Delete
        </Button>
        <TitleCard title="Thunder Shucker" readOnly>
          <Input label={'Class & Level'} value="Sorceror 4" />
          <Input label="Race" value="Dwarf" />
          <Input label="Alignment" value="Neutral Good" />
        </TitleCard>
        <Button color="Primary" btnType="Raised">
          View
        </Button>
        <Button color="Secondary" btnType="Raised">
          Delete
        </Button>
      </>
    );
  }
}

export default Track;
