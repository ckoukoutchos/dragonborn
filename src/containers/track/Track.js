import React, { Component } from 'react';

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import TitleCard from '../../components/card/title-card/TitleCard';

class Track extends Component {
  state = {
    heroList: [
      {
        id: 1,
        class: 'Barbarian',
        level: 3,
        race: 'Half-orc',
        alignment: 'Chaotic Neutral',
        name: 'Thronk, Destroyer of Worlds',
        active: true
      },
      {
        id: 5,
        class: 'Rogue',
        level: 7,
        race: 'Elf',
        alignment: 'Chaotic Good',
        name: 'Valarian',
        active: false
      }
    ]
  };

  onHeroDeletion = index => {
    this.setState(prevState => {
      const newList = [...prevState.heroList];
      newList.splice(index, 1);
      return { heroList: newList };
    });
  };

  onHeroSelection = id => {
    this.props.history.push(`/track/${id}/stats`);
  };

  createHeroList(heroes) {
    return heroes.map((hero, key) => (
      <TitleCard key={key} title={hero.name} readOnly>
        <Input label={'Class & Level'} value={hero.class + ' ' + hero.level} />
        <Input label="Race" value={hero.race} />
        <Input label="Alignment" value={hero.alignment} />
        <Button
          color="Primary"
          btnType="Flat"
          clicked={() => this.onHeroSelection(hero.id)}
        >
          View
        </Button>
        <div>
          <strong>
            {hero.active ? 'Active Campaign' : 'In Need of Quests'}
          </strong>
        </div>
        <Button
          color="Secondary"
          btnType="Flat"
          clicked={() => this.onHeroDeletion(key)}
        >
          Delete
        </Button>
      </TitleCard>
    ));
  }

  render() {
    return (
      <>
        <Jumbotron header="Track" subHeader="Keep Tabs on your Heroes" />
        {this.createHeroList(this.state.heroList)}
      </>
    );
  }
}

export default Track;
